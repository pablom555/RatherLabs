import React from "react";

const MessageResult = ({ answerCount, restart }) => {
  return (
    <div className="w-full relative w-96 h-auto bg-gray-200 rounded-b-md pt-5 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
      <h1>Correct answers: {answerCount.correct}</h1>
      <h1>Wrong answers: {answerCount.inCorrect}</h1>
      <button
        className="mt-5 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
        onClick={() => restart()}
      >
        Restart
      </button>
    </div>
  );
};

export default MessageResult;
