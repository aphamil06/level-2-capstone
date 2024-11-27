function output(message){
  debugger;
  outputTag.innerHTML = message;
}



function redirect() {
  let answer = prompt("Would you like to book a shoot Now?");
  if (answer.toLowerCase() === "yes") {
    alert("Please complete the form to begin the booking process");
    window.location.href = "contact.html";
  } else {
    alert("Feel free to browse our gallery");
    window.location.href = "gallery.html";
  }
}




function handleClick(event) {
  debugger;
  const promise = fetch("https://opentdb.com/api.php?amount=1&category=25&difficulty=easy&type=multiple");
  promise.then(parseResponse);
  }
  
  function parseResponse(resolveValue) {
      debugger;
      const promise = resolveValue.text();
      promise.then(viewResponse);
      
  
  }
  function viewResponse(resolveValue){
      debugger;
      const response =JSON.parse(resolveValue);
      const results = response.results;
      const item = results[0];
      const question =item.question;
      const answer = item.correct_answer;
      const incorrects = item.incorrect_answers;   
      const trivia = `<div>${question}</div>
      <ol type="a">
      <li>${incorrects[0]}</li>
      <li>${incorrects[1]}</li>
      <li>${incorrects[2]}</li>
      <li id="correct">${answer}</li>
      </ol>
      <button onclick="showAnswer()">Show Correct Answer</button>
      </div>`;
      output(trivia);
  }

      function showAnswer(){
      const correctAnswer=document.getElementById("correct");
      correctAnswer.style.color="green";
      correctAnswer.style.fontWeight="bold";
      }

  

 

