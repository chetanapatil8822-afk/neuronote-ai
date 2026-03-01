import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const dummyStats = {
  totalUploads: 12,
  totalQuizzes: 8,
  averageScore: 78,
};

const dummyChartData = [
  { name: "Quiz 1", score: 60 },
  { name: "Quiz 2", score: 75 },
  { name: "Quiz 3", score: 85 },
  { name: "Quiz 4", score: 90 },
  { name: "Quiz 5", score: 70 },
];

function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Analytics Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Overview of your activity and performance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        {/* Total Uploads */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition">
          <h2 className="text-sm text-gray-500 dark:text-gray-400">
            Total Uploads
          </h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {dummyStats.totalUploads}
          </p>
        </div>

        {/* Total Quizzes */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition">
          <h2 className="text-sm text-gray-500 dark:text-gray-400">
            Total Quizzes
          </h2>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {dummyStats.totalQuizzes}
          </p>
        </div>

        {/* Average Score */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition">
          <h2 className="text-sm text-gray-500 dark:text-gray-400">
            Average Score
          </h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            {dummyStats.averageScore}%
          </p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Quiz Performance
        </h2>

        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dummyChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Analytics;