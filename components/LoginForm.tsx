import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const handleLogin = async () => {
        const urlencoded = new URLSearchParams();
        urlencoded.append("username", username);
        urlencoded.append("password", password);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: urlencoded,
        });

        const data = await res.json();
        localStorage.setItem('token', data.token); // assuming backend returns { token: '...' }

        if (res.ok) {
            router.push('/admin'); // Redirect on success
        } else {
            alert('Login failed');
        }
    };


    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={(e) => e.preventDefault()} >
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">username</Label>
                                <Input
                                    id="email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input id="password" type="password" required value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <Button onClick={() => handleLogin()} type="submit" className="w-full">
                                Login
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
