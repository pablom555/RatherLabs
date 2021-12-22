import React, { useState } from "react";
import HeaderQuiz from "./HeaderQuiz";
import MessageResult from "./MessageResult";
import QuestionItem from "./QuestionItem";

const Quiz = ({ data }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerCount, setAnswerCount] = useState({ correct: 0, inCorrect: 0 });

  const restartHandler = () => {
    setIsStarted(false);
    setIsFinished(false);
    setCurrentQuestion(0);
    setAnswerCount({ correct: 0, inCorrect: 0 });
  };

  const chooseOptionHandler = (chosenOption) => {
    chosenOption
      ? setAnswerCount((last) => {
          return { ...last, correct: last.correct + 1 };
        })
      : setAnswerCount((last) => {
          return { ...last, inCorrect: last.inCorrect + 1 };
        });

    if (currentQuestion + 1 < data?.questions?.length) {
      setCurrentQuestion((last) => last + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <>
      <HeaderQuiz
        title={data.title}
        image={data.image}
        isStarted={isStarted}
        setIsStarted={setIsStarted}
      />

      {isStarted && data?.questions?.length && !isFinished && (
        <QuestionItem
          item={data.questions[currentQuestion]}
          chooseOptionHandler={chooseOptionHandler}
          totalQuestions={data.questions.length}
          currentQuestion={currentQuestion + 1}
        />
      )}

      {isFinished && (
        <MessageResult answerCount={answerCount} restart={restartHandler} />
      )}
    </>
  );
};

export default Quiz;
