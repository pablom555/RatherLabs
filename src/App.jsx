import React from "react";
import Quiz from "./components/Quiz";
import trivia from "./data";

function App() {
  return (
    <div className="w-screen max-w-3xl w-full min-h-400 shadow-lg mt-8 m-auto p-2 md:p-8">
      <Quiz data={trivia} />
    </div>
  );
}

export default App;
