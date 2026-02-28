import { useState } from "react";
import {
  FiUploadCloud,
  FiFileText,
  FiX,
  FiCopy,
  FiRefreshCw,
} from "react-icons/fi";

function Upload() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];

    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setError("");
    } else {
      setError("Please upload a valid PDF file.");
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setSummary("");
  };

  const handleGenerate = () => {
    if (!file) return;

    setLoading(true);

    // Fake delay to simulate AI processing
    setTimeout(() => {
      setSummary(
        "This is a sample AI-generated summary of your uploaded document. It highlights key concepts, important insights, and provides a concise overview for faster understanding."
      );
      setLoading(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          PDF Upload & AI Summary
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Upload your PDF document and generate an AI-powered summary.
        </p>
      </div>

      {/* Upload Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 border border-gray-200 dark:border-gray-700 transition">
        
        {/* Upload Area */}
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-10 cursor-pointer hover:border-purple-500 transition">
          <FiUploadCloud className="text-4xl text-purple-500 mb-4" />
          <span className="text-gray-700 dark:text-gray-300">
            Click to upload or drag & drop your PDF
          </span>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* File Preview */}
        {file && (
          <div className="mt-6 flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <FiFileText className="text-purple-500 text-xl" />
              <span className="text-gray-800 dark:text-gray-200 text-sm">
                {file.name}
              </span>
            </div>
            <button
              onClick={handleRemoveFile}
              className="text-red-500 hover:text-red-700"
            >
              <FiX />
            </button>
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mt-4">{error}</p>
        )}

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={!file || loading}
          className={`mt-6 w-full py-3 rounded-xl font-semibold transition ${
            !file || loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 text-white"
          }`}
        >
          {loading ? "Generating Summary..." : "Generate Summary"}
        </button>
      </div>

      {/* Summary Section */}
      {summary && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 border border-gray-200 dark:border-gray-700 transition">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              AI Generated Summary
            </h2>

            <div className="flex gap-3">
              <button
                onClick={handleCopy}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-500"
              >
                <FiCopy />
              </button>
              <button
                onClick={handleGenerate}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-500"
              >
                <FiRefreshCw />
              </button>
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {summary}
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload;