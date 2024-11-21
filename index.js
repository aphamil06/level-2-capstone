function output(message){
  debugger;
  outputTag.innerHTML = message;
}



function redirect() {
  let answer = prompt("Would you like to book a shoot Now?");
  if (answer === "yes") {
    window.location.href = "contact.html";
    alert("Please complete form to begin the booking process");
  } else {
    window.location.href = "gallery.html";
    alert("Feel free to browse our gallery");
  }
}
bookNow.onclick = redirect;

let password = "admin";
function enterPassword(userInput, correctAnswer) {
  if (userInput === correctAnswer) {
    return "success";
  } else {
    return "Please try again";
  }
}

function goNow() {
  let result = enterPassword(
    prompt("Please enter the password.(admin)"),
    password
  );
  if (result === "success") {
    alert("Successful");
    window.location.href = "gallery.html";
  } else {
    bsAlert.innerHTML += (`<div class="alert alert-warning" role="alert">
  Wrong password, try again.
</div>`);
  }
}
galleryButton.onclick = goNow;

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
      function output2(message){
        outputTag2.innerHTML += message;
        }
      const trivia = `<div>${question}</div>
      <ol type="a">
      <li>${incorrects[0]}</li>
      <li>${incorrects[1]}</li>
      <li>${incorrects[2]}</li>
      <li>${answer}</li>
      </ol>
      </div>`;
      output(trivia);
}

 

