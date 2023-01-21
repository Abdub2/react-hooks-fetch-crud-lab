import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const[quiz,setQuiz]=useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((results) => {
    setQuiz(results)
    })
    }, [])

    function addQuiz(newQuiz){
      setQuiz([...quiz,newQuiz])
    }

    function deleteQuiz(quizId){
      setQuiz(quiz.filter(quiz =>quiz.id !== quizId))
    }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuiz={addQuiz}/> : <QuestionList questions={quiz} deleteQuiz={deleteQuiz} />}
    </main>
  );
}

export default App;
