import React from "react";

function QuestionItem({ question,deleteQuiz }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(e){
    e.preventDefault()
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method:"DELETE",
      header: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then(results => deleteQuiz(question.id))
  }

  function changeAnswer(e){
    e.preventDefault()
    const chosenAnswer = parseInt(e.target.value)

    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({correctIndex: chosenAnswer})
    })
    .then(result => result.json())
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={changeAnswer}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
