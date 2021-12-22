import React from "react";
import ImgQuiz from "./ImgQuiz";
import Title from "./Title";

const HeaderQuiz = ({ title, image, isStarted, setIsStarted }) => {
  return (
    <div
      className={`w-full relative w-96 h-auto bg-gray-200 ${
        isStarted ? "rounded-t-md" : "rounded-md"
      } pt-24 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center`}
    >
      <div className="absolute rounded-full bg-gray-100 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
        <ImgQuiz imageUrl={image} />
      </div>

      <Title text={title} />
      {!isStarted && (
        <button
          className="mt-5 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
          onClick={() => setIsStarted(true)}
        >
          Start Quiz
        </button>
      )}
    </div>
  );
};

export default HeaderQuiz;
