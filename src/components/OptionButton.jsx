import React from "react";

const OptionButton = ({
  option,
  showAnswer,
  selectOptionHandler,
  chosenOption,
  setChosenOption,
}) => {
  const onClickHandler = () => {
    selectOptionHandler(option.correct);
    setChosenOption(option.optionNumber);
  };

  console.log("opcion", option.optionNumber, chosenOption);
  return (
    <div>
      <button
        className={`mt-5 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded ${
          showAnswer &&
          option.correct &&
          "bg-green-500 hover:bg-green-500 hover:text-gray-700"
        } ${
          showAnswer &&
          !option.correct &&
          "bg-red-500 hover:bg-red-500 text-white hover:text-gray-700"
        }`}
        disabled={showAnswer}
        onClick={() => onClickHandler()}
      >
        {option.text}
      </button>
      {chosenOption === option.optionNumber && (
        <span className="absolute p-2 mt-5">You answer</span>
      )}
    </div>
  );
};

export default OptionButton;
