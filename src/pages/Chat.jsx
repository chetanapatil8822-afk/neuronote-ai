import { useState, useRef, useEffect } from "react";

function Chat() {
  const [selectedDoc, setSelectedDoc] = useState("Data Structures.pdf");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hello! Ask me anything about your document." },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const chatEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = { role: "user", content: message };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const aiReply = {
        role: "ai",
        content:
          "This is a simulated AI response based on your selected document.",
      };
      setMessages((prev) => [...prev, aiReply]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="p-6 h-[calc(100vh-100px)] flex flex-col">

      {/* Header */}
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
  AI Chat with Document
</h1>

<p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
  Ask questions based on your uploaded document
</p>
        </div>

        <button
          onClick={() => setShowPreview(!showPreview)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          {showPreview ? "Hide Preview" : "Show Preview"}
        </button>
      </div>

      {/* Document Selector */}
      <div className="bg-white p-4 rounded-xl shadow-sm border mb-4">
        <label className="text-sm font-medium text-gray-700 mr-3">
          Select Document:
        </label>
        <select
          value={selectedDoc}
          onChange={(e) => setSelectedDoc(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option>Data Structures.pdf</option>
          <option>AI Notes.pdf</option>
          <option>Operating Systems.pdf</option>
        </select>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 gap-4 overflow-hidden">

        {/* Chat Section - Always Full Width When Preview Hidden */}
        <div
          className={`${
            showPreview ? "flex-1" : "w-full"
          } bg-white rounded-xl shadow-sm border p-6 overflow-y-auto space-y-4`}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${
                  msg.role === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-xl text-sm">
                🤖 AI is typing...
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Preview Panel (Only When Toggled) */}
        {showPreview && (
          <div className="w-80 bg-white rounded-xl shadow-sm border p-4 overflow-y-auto">
            <h3 className="font-semibold mb-2 text-gray-800">
              Document Preview
            </h3>
            <p className="text-sm text-gray-600">
              Preview content of <strong>{selectedDoc}</strong> will appear here.
            </p>
            <p className="text-xs mt-4 text-gray-400">
              (Later this will show extracted PDF text.)
            </p>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="mt-4 bg-white p-4 rounded-xl shadow-sm border flex gap-3">
        <input
          type="text"
          placeholder="Type your question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
        />

        <button
          onClick={handleSend}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;