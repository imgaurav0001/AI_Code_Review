import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import axios from "axios";
import "prismjs/components/prism-javascript";
import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum() {\n    return 1 + 1;\n}`);
  const [reviewedCode, setReviewedCode] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, [code, reviewedCode]);

  const handleReview = async () => {
    console.log("🔵 Button Clicked!");

    try {
      const response = await axios.post("https://ai-code-review-1.onrender.com/ai/get-review", { code });


      console.log("🟢 API Response:", response);
      console.log("🟢 API Data:", response.data);

      if (response.data && typeof response.data === "string") {
        setReviewedCode(response.data); // ✅ Display reviewed code correctly
      } else {
        setReviewedCode("⚠️ No reviewed code available from the server.");
      }
    } catch (error) {
      console.error("🔴 Error fetching reviewed code:", error);
      setReviewedCode("❌ Failed to fetch reviewed code.");
    }
  };

  return (
    <main>
      {/* Left Section - Code Editor */}
      <div className="left">
        <Editor
          value={code}
          onValueChange={(newCode) => setCode(newCode)}
          highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
          padding={10}
          style={{
            fontFamily: '"Fira Code", "Fira Mono", monospace',
            fontSize: 16,
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "5px",
            height: "100%",
            width: "100%",
            border: "none",
            outline: "none",
            overflow: "auto",
          }}
        />
        <button className="review" onClick={handleReview}>
          Review Code
        </button>
      </div>

      {/* Right Section - AI Reviewed Code */}
      <div className="right">
        <h2>Your Code Review:</h2> 
        <div className="reviewed-code">
          {reviewedCode ? (
            <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
              {reviewedCode}
            </pre>
          ) : (
            <p>⚠️ No reviewed code available from the server.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
