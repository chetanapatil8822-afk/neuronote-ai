import { useState } from "react";
import {
  FiUploadCloud,
  FiFileText,
  FiX,
  FiCopy,
  FiRefreshCw,
} from "react-icons/fi";

function Upload() {
  const [showToast, setShowToast] = useState(false);
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (selected) => {
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setError("");
    } else {
      setError("Please upload a valid PDF file.");
    }
  };

  const handleFileChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleGenerate = () => {
    if (!file) return;

    setLoading(true);
    setSummary("");

    setTimeout(() => {
      setSummary(
        "This is a sample AI-generated summary of your uploaded document. It highlights key concepts, important insights, and provides a concise overview for faster understanding."
      );
      setLoading(false);
    }, 2000);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setSummary("");
  };

  const handleCopy = () => {
  navigator.clipboard.writeText(summary);
  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 2000);
};

  // Word Count + Read Time
  const wordCount = summary ? summary.split(" ").length : 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

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
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 border border-gray-200 dark:border-gray-700 transition hover:-translate-y-1 hover:shadow-lg duration-300">

        {/* Upload Area */}
        <label
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-10 cursor-pointer transition duration-300
          ${dragActive
              ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
              : "border-gray-300 dark:border-gray-600"
            }`}
        >
          <FiUploadCloud className="text-4xl text-purple-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
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
          <div className="mt-6 flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <FiFileText className="text-purple-500 text-xl" />
              <span className="text-gray-800 dark:text-gray-200 text-sm">
                {file.name}
              </span>
            </div>
            <button
              onClick={handleRemoveFile}
              className="text-red-500 hover:text-red-700 transition"
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
          className={`mt-6 w-full py-3 rounded-xl font-semibold transition transform duration-300
            ${!file || loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 hover:scale-[1.02] text-white"
            }`}
        >
          {loading ? "Generating Summary..." : "Generate Summary"}
        </button>
      </div>

      {/* Summary Section */}
      {(loading || summary) && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 border border-gray-200 dark:border-gray-700 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              AI Generated Summary
            </h2>

            {!loading && summary && (
              <div className="flex items-center gap-4">

                {/* AI Confidence Badge */}
                <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs px-3 py-1 rounded-full font-medium">
                  92% Confidence
                </span>

                <button
                  onClick={handleCopy}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition"
                >
                  <FiCopy />
                </button>

                <button
                  onClick={handleGenerate}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition"
                >
                  <FiRefreshCw />
                </button>
              </div>
            )}
          </div>

          {/* Skeleton Loader */}
          {loading && (
            <div className="animate-pulse space-y-3">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/6"></div>
            </div>
          )}

          {/* Summary Output */}
          {!loading && summary && (
            <>
              <div className="max-h-64 overflow-y-auto text-gray-700 dark:text-gray-300 text-sm leading-relaxed animate-fadeIn">
                {summary}
              </div>

              {/* Word Count + Read Time */}
              <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                {wordCount} words • {readTime} min read
              </div>
            </>
          )}
          {showToast && (
  <div className="fixed bottom-6 right-6 bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-3 rounded-xl shadow-lg animate-fadeIn text-sm">
    Summary copied to clipboard ✅
  </div>
)}
        </div>
      )}
    </div>
  );
}

export default Upload;