<div className="flex flex-col h-[80vh] bg-white rounded-2xl shadow p-6">
  
  {/* Header */}
  <div className="border-b pb-3 mb-4">
    <h2 className="text-xl font-semibold">AI Chat</h2>
  </div>

  {/* Messages Area */}
  <div className="flex-1 overflow-y-auto space-y-4">
    <div className="bg-gray-100 p-3 rounded-xl w-fit">
      AI: Hello! Ask me about your document.
    </div>

    <div className="bg-blue-500 text-white p-3 rounded-xl w-fit ml-auto">
      You: What is the summary?
    </div>
  </div>

  {/* Input Area */}
  <div className="mt-4 flex gap-2">
    <input
      type="text"
      placeholder="Type your question..."
      className="flex-1 border rounded-xl px-4 py-2"
    />
    <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
      Send
    </button>
  </div>

</div>