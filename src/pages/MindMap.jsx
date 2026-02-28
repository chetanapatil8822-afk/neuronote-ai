import { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

function MindMap() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // 🧠 Dummy extracted text (Simulating PDF content)
  const dummyExtractedText = `
    Artificial Intelligence is a branch of computer science.
    It includes Machine Learning, Deep Learning, NLP, and Robotics.
    AI is used in Healthcare, Finance, Education, and Automation.
    Challenges include ethics, bias, and data privacy.
  `;

  const generateMindMap = () => {
    // Simulated AI processing (hardcoded structure for now)
    const mainTopic = "Artificial Intelligence";

    const subTopics = [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Robotics",
      "Applications",
      "Challenges",
    ];

    const generatedNodes = [
      {
        id: "1",
        data: { label: mainTopic },
        position: { x: 250, y: 100 },
        style: {
          background: "#4f46e5",
          color: "white",
          padding: 12,
          borderRadius: 12,
          fontWeight: "bold",
        },
      },
    ];

    const generatedEdges = [];

    subTopics.forEach((topic, index) => {
      const id = `${index + 2}`;

      generatedNodes.push({
        id,
        data: { label: topic },
        position: { x: 50 + index * 150, y: 300 },
        style: {
          background: "#e0e7ff",
          padding: 8,
          borderRadius: 10,
        },
      });

      generatedEdges.push({
        id: `e1-${id}`,
        source: "1",
        target: id,
        animated: true,
      });
    });

    setNodes(generatedNodes);
    setEdges(generatedEdges);
  };

  return (
    <div className="p-6 space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          PDF Based Mind Map
        </h1>
        <p className="text-gray-500 mt-1">
          (Currently using dummy extracted text)
        </p>
      </div>

      {/* Generate Button */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <button
          onClick={generateMindMap}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Generate From PDF
        </button>
      </div>

      {/* Mind Map Canvas */}
      <div className="bg-white rounded-xl shadow-sm border h-[500px]">
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <MiniMap />
          <Controls />
          <Background gap={12} size={1} />
        </ReactFlow>
      </div>

    </div>
  );
}

export default MindMap;