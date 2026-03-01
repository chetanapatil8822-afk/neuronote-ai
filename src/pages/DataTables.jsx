import { useState } from "react";

function DataTables() {
  const [tableData, setTableData] = useState([]);

  const generateTable = () => {
    // Dummy structured data (simulate backend response)
    const dummyData = [
      {
        Topic: "Artificial Intelligence",
        Definition: "Branch of computer science",
        Application: "Healthcare, Finance",
      },
      {
        Topic: "Machine Learning",
        Definition: "Subset of AI",
        Application: "Prediction, Classification",
      },
      {
        Topic: "Deep Learning",
        Definition: "Neural network based ML",
        Application: "Image & Speech Recognition",
      },
    ];

    setTableData(dummyData);
  };

  const downloadCSV = () => {
    if (!tableData.length) return;

    const headers = Object.keys(tableData[0]).join(",");
    const rows = tableData
      .map((row) => Object.values(row).join(","))
      .join("\n");

    const csvContent = `${headers}\n${rows}`;

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "structured-data.csv";
    a.click();
  };

  return (
    <div className="p-6 space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Structured Data Tables
        </h1>
        <p className="text-gray-500 dark:text-gray-300 mt-1">
          Convert your document into structured key-value data.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="bg-white p-6 rounded-xl shadow-sm border flex gap-4">
        <button
          onClick={generateTable}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Generate Table
        </button>

        <button
          onClick={downloadCSV}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Download CSV
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-sm border p-6 overflow-x-auto">
        {tableData.length === 0 ? (
          <p className="text-gray-400 text-center">
            Generated table will appear here.
          </p>
        ) : (
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                {Object.keys(tableData[0]).map((key) => (
                  <th
                    key={key}
                    className="border px-4 py-3 bg-gray-200 text-left text-sm font-bold text-gray-900"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100 transition">
                  {Object.values(row).map((value, i) => (
                    <td
                      key={i}
                      className="border px-4 py-3 text-sm text-gray-900"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}

export default DataTables;