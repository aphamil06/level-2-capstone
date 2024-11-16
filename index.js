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
