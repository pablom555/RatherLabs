import React, { useEffect, useRef, useState } from "react";
import ImgQuiz from "./ImgQuiz";
import OptionButton from "./OptionButton";
import Timer from "./Timer";

const QuestionItem = ({
  item,
  chooseOptionHandler,
  currentQuestion,
  totalQuestions,
}) => {
  const timeoutId = useRef();
  const [timeStop, setTimeStop] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [chosenOption, setChosenOption] = useState(null);

  const onTimeOutOrSelectOption = (option) => {
    setTimeStop(true);
    setShowAnswer(true);

    const tId = setTimeout(() => {
      chooseOptionHandler(option);
    }, 1000);
    timeoutId.current = tId;
  };

  useEffect(() => {
    setTimeStop(false);

    return () => {
      setShowAnswer(false);
      setChosenOption(null);
      clearTimeout(timeoutId.current);
    };
  }, [item]);

  return (
    <div className="w-full relative w-96 h-auto bg-gray-200 rounded-b-md pt-5 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
      {!timeStop && (
        <Timer
          init={item.lifetimeSeconds}
          onTimeOut={onTimeOutOrSelectOption}
        />
      )}
      <span className="text-gray-700 text-lg mb-2">
        {currentQuestion} of {totalQuestions} Questions
      </span>
      <span className="font-bold text-gray-700 text-xl">{item.text}</span>
      <div className=" mt-4 rounded-full bg-gray-100 w-28 h-28 p-2 shadow-lg hover:shadow-xl transition">
        <ImgQuiz imageUrl={item.image} />
      </div>

      <div className="flex flex-col p-3">
        {item.options.map((option, index) => (
          <OptionButton
            key={index}
            option={{ ...option, optionNumber: index }}
            showAnswer={showAnswer}
            selectOptionHandler={onTimeOutOrSelectOption}
            chosenOption={chosenOption}
            setChosenOption={setChosenOption}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionItem;
