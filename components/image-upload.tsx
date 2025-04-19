"use client";

import * as React from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    ImageIcon,
    UploadIcon,
    X,
    AlertCircle,
    CheckCircle,
} from "lucide-react";

export interface ImageUploadProps
    extends React.HTMLAttributes<HTMLDivElement> {
    defaultImageUrl?: string;
    onImageChange?: (file: File | null) => void;
    onImageUpload?: (url: string | null) => void;
    className?: string;
    aspectRatio?: "square" | "video" | "wide" | number;
    maxSizeInMB?: number;
    uploadText?: string;
    dragActiveText?: string;
    acceptedFileTypes?: string[];
}

export function ImageUpload({
    defaultImageUrl,
    onImageChange,
    onImageUpload,
    className,
    aspectRatio = "square",
    maxSizeInMB = 5,
    uploadText = "Upload an image or drag and drop",
    dragActiveText = "Drop the image here",
    acceptedFileTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"],
    ...props
}: ImageUploadProps) {
    const [file, setFile] = React.useState<File | null>(null);
    const [preview, setPreview] = React.useState<string | null>(defaultImageUrl || null);
    const [uploadProgress, setUploadProgress] = React.useState<number>(0);
    const [isUploading, setIsUploading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState<boolean>(false);

    // Handle aspect ratio
    const getAspectRatioClass = () => {
        if (typeof aspectRatio === "number") {
            return `aspect-[${aspectRatio}]`;
        }

        switch (aspectRatio) {
            case "square":
                return "aspect-square";
            case "video":
                return "aspect-video";
            case "wide":
                return "aspect-[16/9]";
            default:
                return "aspect-square";
        }
    };

    const onDrop = React.useCallback(
        (acceptedFiles: File[]) => {
            setError(null);
            setSuccess(false);

            const selectedFile = acceptedFiles[0];

            // Check file type
            if (!acceptedFileTypes.includes(selectedFile.type)) {
                setError(`File type not supported. Please upload ${acceptedFileTypes.join(", ")}`);
                return;
            }

            // Check file size
            if (selectedFile.size > maxSizeInMB * 1024 * 1024) {
                setError(`File size too large. Maximum size is ${maxSizeInMB}MB`);
                return;
            }

            setFile(selectedFile);

            // Create preview
            const objectUrl = URL.createObjectURL(selectedFile);
            setPreview(objectUrl);

            // Simulate upload progress
            simulateUpload(selectedFile);

            // Call the onChange handler if provided
            if (onImageChange) {
                onImageChange(selectedFile);
            }
        },
        [acceptedFileTypes, maxSizeInMB, onImageChange]
    );

    // Simulate file upload with progress
    const simulateUpload = (file: File) => {
        setIsUploading(true);
        setUploadProgress(0);


        const formdata = new FormData();
        formdata.append("image", file, file.name);

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: formdata,
        }).then((response) => {
            if (!response.ok) {
                setError("Upload failed. Please try again.");
            }
            setUploadProgress(50);
            return response.text();
        }).then((url) => {
            setUploadProgress(100);
            setIsUploading(false);
            setSuccess(true);
            if (onImageUpload) {
                onImageUpload(url);
            }
        });
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': acceptedFileTypes
        },
        maxSize: maxSizeInMB * 1024 * 1024,
        multiple: false,
    });

    const resetUpload = () => {
        if (preview && preview !== defaultImageUrl) {
            URL.revokeObjectURL(preview);
        }
        setFile(null);
        setPreview(defaultImageUrl || null);
        setError(null);
        setSuccess(false);
        setUploadProgress(0);
        setIsUploading(false);

        if (onImageChange) {
            onImageChange(null);
        }

        if (onImageUpload) {
            onImageUpload(defaultImageUrl || null);
        }
    };

    // Clean up object URL on component unmount
    React.useEffect(() => {
        return () => {
            if (preview && preview !== defaultImageUrl) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview, defaultImageUrl]);

    // Reset preview when defaultImageUrl changes
    React.useEffect(() => {
        if (!file && defaultImageUrl !== preview) {
            setPreview(defaultImageUrl || null);
        }
    }, [defaultImageUrl, file, preview]);

    return (
        <div
            className={cn("relative w-full", className)}
            {...props}
        >
            <div
                className={cn(
                    "relative overflow-hidden rounded-md border border-border",
                    getAspectRatioClass(),
                    {
                        "border-primary border-dashed": isDragActive,
                        "border-destructive": error,
                        "border-primary/50": success && !isUploading,
                    }
                )}
            >
                {/* Preview Image */}
                {preview && !error ? (
                    <div className="relative h-full w-full group">
                        <img
                            src={preview}
                            alt="Preview"
                            className="h-full w-full object-cover transition-all duration-200"
                        />

                        {/* Overlay with remove button */}
                        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={resetUpload}
                                type="button"
                                className="rounded-full p-2 h-auto w-auto"
                            >
                                <X className="h-4 w-4" />
                                <span className="sr-only">Remove image</span>
                            </Button>

                            <Button
                                variant="secondary"
                                size="sm"
                                {...getRootProps()}
                                className="text-xs"
                            >
                                Choose different image
                                <input {...getInputProps()} />
                            </Button>
                        </div>
                    </div>
                ) : (
                    /* Upload Area */
                    <div
                        {...getRootProps()}
                        className={cn(
                            "h-full w-full flex flex-col items-center justify-center p-4 transition-all duration-200",
                            isDragActive ? "bg-primary/5" : "bg-muted/40 hover:bg-muted/60"
                        )}
                    >
                        <input {...getInputProps()} />

                        <AnimatePresence mode="wait">
                            {error ? (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex flex-col items-center gap-2 text-center"
                                >
                                    <AlertCircle className="h-8 w-8 text-destructive" />
                                    <p className="text-sm font-medium text-destructive">{error}</p>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setError(null);
                                        }}
                                        className="mt-2"
                                    >
                                        Try again
                                    </Button>
                                </motion.div>
                            ) : isDragActive ? (
                                <motion.div
                                    key="drag-active"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    className="flex flex-col items-center gap-2 text-center"
                                >
                                    <UploadIcon className="h-8 w-8 text-primary animate-pulse" />
                                    <p className="text-sm font-medium">{dragActiveText}</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="upload"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center gap-2 text-center"
                                >
                                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                                    <p className="text-sm text-muted-foreground">{uploadText}</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Supports {acceptedFileTypes.map(type => type.split('/')[1]).join(', ')}
                                        (Max {maxSizeInMB}MB)
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {/* Upload Progress */}
                {isUploading && (
                    <div className="absolute bottom-0 left-0 right-0 bg-background/50 backdrop-blur-sm p-2">
                        <Progress value={uploadProgress} className="h-1.5 w-full" />
                        <p className="text-xs text-center mt-1">Uploading: {uploadProgress}%</p>
                    </div>
                )}

                {/* Success indicator */}
                {success && !isUploading && preview && (
                    <div className="absolute top-2 right-2">
                        <div className="bg-background/80 backdrop-blur-sm rounded-full p-1.5">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}