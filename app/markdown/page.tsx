"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function MarkdownPage() {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    fetch("/content.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Markdown Viewer</h1>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}
