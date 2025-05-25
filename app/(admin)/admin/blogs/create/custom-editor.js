// components/custom-editor.js
"use client"; // Required only in App Router.
import "./styles.css";
import "ckeditor5/ckeditor5.css";

import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import CKEditorInspector from "@ckeditor/ckeditor5-inspector";
import {
  ClassicEditor,
  Essentials,
  Bold,
  Italic,
  Paragraph,
  Heading,
  Fullscreen,
  Underline,
  Link,
  Table,
  TableToolbar,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  LinkImage,
  AutoImage,
} from "ckeditor5";

const CustomEditor = () => {
  const [editorData, setEditorData] = React.useState("<p>Hello world!</p>");

  return (
    <CKEditor
      editor={ClassicEditor}
      data={editorData}
      onChange={(evt, editor) => {
        // A function executed when the user types or modifies the editor content.
        // It updates the state of the application.
        setEditorData(editor.getData());
      }}
      onReady={(editor) => {
        // A function executed when the editor has been initialized and is ready.
        // It synchronizes the initial data state and saves the reference to the editor instance.
        // CKEditor&nbsp;5 inspector allows you to take a peek into the editor's model and view
        // data layers. Use it to debug the application and learn more about the editor.
        CKEditorInspector.attach(editor);
      }}
      config={{
        licenseKey: "GPL",
        plugins: [
          // A set of editor features to be enabled and made available to the user.
          Essentials,
          Heading,
          Fullscreen,
          Bold,
          Italic,
          Underline,
          Link,
          Paragraph,
          Table,
          TableToolbar,
          Image,
          ImageCaption,
          ImageResize,
          ImageStyle,
          LinkImage,
          ImageToolbar,
          AutoImage,
          // Your custom plugin implementing the widget is loaded here.
        ],
        toolbar: [
          "fullscreen",
          "heading",
          "|",
          "bold",
          "italic",
          "underline",
          "|",
          "link",
          "insertTable",
          "upload",
          "|",
          "undo",
          "redo",
        ],
      }}
    />
  );
};

export default CustomEditor;
