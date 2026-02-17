import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        <motion.section
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2 }}
  className="py-32 text-center"
>
  <h1 className="text-6xl font-bold tracking-tight mb-6">
    Build Intelligent Interfaces
  </h1>

  <p className="text-gray-400 max-w-2xl mx-auto mb-8">
    A modern AI-inspired dashboard built with React + Tailwind.
  </p>

  <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition">
    Get Started
  </button>
</motion.section>


        <section className="grid md:grid-cols-3 gap-8">
  {["AI Tools", "Analytics", "Automation"].map((item, index) => (
    <div
      key={index}
      className="p-8 rounded-3xl transition-all duration-300
bg-gray-100 border border-gray-200 shadow-md
dark:bg-white/5 dark:border-white/10 dark:shadow-lg
backdrop-blur-lg hover:scale-105 hover:shadow-xl"


    >
      <h3 className="text-2xl font-semibold mb-4">{item}</h3>
      <p className="text-gray-600 dark:text-gray-400">
        Powerful features designed to enhance your workflow and intelligence.
      </p>
    </div>
  ))}
</section>

      </main>
    </div>
  );
}

export default App;
