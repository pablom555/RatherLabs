import React from "react";

const ImgQuiz = ({ imageUrl }) => {
  return (
    <div className="rounded-full bg-black w-full h-full overflow-auto">
      <img src={imageUrl} />
    </div>
  );
};

export default ImgQuiz;
