import { useState, useRef } from "react";

const dummyFlashcards = [
  {
    question: "What is a Data Structure?",
    answer: "A way to organize and store data efficiently.",
  },
  {
    question: "What is a Stack?",
    answer: "A LIFO (Last In First Out) data structure.",
  },
  {
    question: "What is a Queue?",
    answer: "A FIFO (First In First Out) data structure.",
  },
];

function Flashcards() {
  const [cards, setCards] = useState(dummyFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipSoundRef = useRef(new Audio("/flip.mp3")); 
  // 🔊 Put flip.mp3 inside public folder

  const handleFlip = () => {
    flipSoundRef.current.currentTime = 0;
    flipSoundRef.current.play();
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) =>
      prev === cards.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-gray-50 dark:bg-gray-900">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Flashcards
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Click the card to flip
        </p>
      </div>

      {/* Card */}
      <div
        className="w-full max-w-md h-64 perspective cursor-pointer"
        onClick={handleFlip}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full rounded-2xl shadow-2xl flex items-center justify-center p-6 text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            style={{ backfaceVisibility: "hidden" }}
          >
            <h2 className="text-xl font-semibold">
              {cards[currentIndex].question}
            </h2>
          </div>

          {/* Back */}
          <div
            className="absolute w-full h-full rounded-2xl shadow-2xl flex items-center justify-center p-6 text-center text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <p className="text-lg">
              {cards[currentIndex].answer}
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:scale-105 transition"
        >
          Prev
        </button>

        <button
          onClick={handleShuffle}
          className="px-5 py-2 bg-yellow-400 text-black rounded-lg hover:scale-105 transition"
        >
          Shuffle
        </button>

        <button
          onClick={handleNext}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition"
        >
          Next
        </button>
      </div>

      {/* Counter */}
      <div className="mt-6 text-gray-600 dark:text-gray-300">
        Card {currentIndex + 1} of {cards.length}
      </div>
    </div>
  );
}

export default Flashcards;