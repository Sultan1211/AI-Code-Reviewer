import { useEffect, useState } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from 'react-simple-code-editor';
import axios from 'axios';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Markdown from 'react-markdown';

export function Rev() {
  const [code, setCode] = useState(`function sum() { return 1 + 1; }`);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [reviewToShow, setReviewToShow] = useState(""); // New state to show typing effect
 
  useEffect(() => {
    if (review) {
      let i = 0;
      const interval = setInterval(() => {
        setReviewToShow((prev) => prev + review[i]);
        i += 1;
        if (i >= review.length) {
          clearInterval(interval);
        }
      }, 10); 
    }
  }, [review]);
 
  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true); 
    try {
      const response = await axios.post("https://ai-code-reviewer-backend-94m9.onrender.com/ai/get-review", { code });
      setReview(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
    } finally {
      setLoading(false); 
    }
  }

  return (
    <main className="h-screen w-full p-3.5 bg-zinc-800 flex gap-2">
      <div className="flex-1 relative h-full rounded-lg bg-black flex flex-col">
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            border: "1px solid #ddd",
            borderRadius: "5px",
            height: "100%",
            width: "100%",
            color: "white",
            caretColor: "#f5f5f5",
            backgroundColor: "#1e1e1e"
          }}
        />
        <button
          onClick={reviewCode}
          className="absolute bottom-4 right-4 text-black font-semibold select-none cursor-pointer bg-white px-4 py-2 rounded-md flex items-center justify-center"
        >
          {loading ? (
            <div className="w-6 h-6 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
          ) : (
            "Review"
          )}



        </button>
      </div>
      <div className="flex-1 h-full overflow-auto bg-cyan-950 rounded-lg text-white p-4">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {reviewToShow}
        </Markdown>
      </div>
    </main>
     
  );
}

export default Rev;
