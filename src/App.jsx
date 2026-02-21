import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import MindMap from "./pages/MindMap";
import DataTables from "./pages/DataTables";
import Chat from "./pages/Chat";
import Flashcards from "./pages/Flashcards";
import Quiz from "./pages/Quiz";
import Analytics from "./pages/Analytics";
import History from "./pages/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="upload" element={<Upload />} />
        <Route path="mindmap" element={<MindMap />} />
        <Route path="datatables" element={<DataTables />} />
        <Route path="chat" element={<Chat />} />
        <Route path="flashcards" element={<Flashcards />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}

export default App;
