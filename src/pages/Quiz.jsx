import { useState, useEffect } from "react";

const dummyQuestions = [
  {
    question: "What does FIFO stand for?",
    options: [
      "First In First Out",
      "Fast Input Fast Output",
      "First Input Final Output",
      "Final In First Out",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which data structure uses LIFO?",
    options: ["Queue", "Stack", "Array", "Graph"],
    correctAnswer: 1,
  },
  {
    question: "Which structure is best for BFS?",
    options: ["Stack", "Queue", "Tree", "Heap"],
    correctAnswer: 1,
  },
];

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(dummyQuestions.length).fill(null)
  );
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  // ⏱ Timer
  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      return;
    }

    if (!showScore) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleOptionChange = (index) => {
    const updated = [...selectedAnswers];
    updated[currentIndex] = index;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    setTimeLeft(15);

    if (currentIndex < dummyQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === dummyQuestions[index].correctAnswer
        ? score + 1
        : score;
    }, 0);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers(Array(dummyQuestions.length).fill(null));
    setShowScore(false);
    setTimeLeft(15);
  };

  const progressPercentage =
    ((currentIndex + 1) / dummyQuestions.length) * 100;

  if (showScore) {
    const score = calculateScore();

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-xl w-full">

          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6 animate-pulse">
            🎉 Quiz Completed!
          </h2>

          <p className="text-xl text-center mb-6 text-gray-700 dark:text-gray-300">
            Your Score: <span className="font-bold">{score} / {dummyQuestions.length}</span>
          </p>

          {/* Review Answers */}
          <div className="space-y-4 mb-6">
            {dummyQuestions.map((q, index) => {
              const isCorrect = selectedAnswers[index] === q.correctAnswer;

              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    isCorrect
                      ? "bg-green-100 dark:bg-green-900"
                      : "bg-red-100 dark:bg-red-900"
                  }`}
                >
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {q.question}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Your Answer:{" "}
                    {selectedAnswers[index] !== null
                      ? q.options[selectedAnswers[index]]
                      : "Not answered"}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">
                      Correct Answer: {q.options[q.correctAnswer]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={handleRestart}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:scale-105 transition"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = dummyQuestions[currentIndex];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-xl">

        {/* 📊 Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mb-6">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Question Count + Timer */}
        <div className="flex justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
          <span>
            Question {currentIndex + 1} of {dummyQuestions.length}
          </span>
          <span className="font-semibold text-red-500">
            ⏱ {timeLeft}s
          </span>
        </div>

        {/* Question */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition 
                ${
                  selectedAnswers[currentIndex] === index
                    ? "bg-blue-100 border-blue-500 dark:bg-blue-900"
                    : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                }`}
            >
              <input
                type="radio"
                checked={selectedAnswers[currentIndex] === index}
                onChange={() => handleOptionChange(index)}
                className="accent-blue-600"
              />
              <span className="text-gray-800 dark:text-gray-200">
                {option}
              </span>
            </label>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition"
          >
            {currentIndex < dummyQuestions.length - 1
              ? "Next"
              : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;