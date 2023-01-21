import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,deleteQuiz}) {

  const listofQuestions=questions.map((quiz)=>

      <QuestionItem key={quiz.id} question={quiz} deleteQuiz={deleteQuiz}/>

  )
  return (
    <section>
      <h1>Quiz Questions</h1>

      <ul>
        {listofQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;
