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

/*function goToGallery() {
    let password = "test";
    let userInput = prompt("Please enter the Password");
    let result;
  if (password === userInput) {
    result = "Success";}
    else {
        result = "Please Try Again";
    }
    /*console.log(result);
    return result;
}

function check () {
    goToGallery();
    if (goToGallery === "Success") {
        window.location.href = "gallery.html";
    }
}
galleryButton.onclick = check;*/

let password = "admin";
function enterPassword(userInput, correctAnswer) {
  if (userInput === correctAnswer) {
    return "success";
  } else {
    return "Please try again";
  }
}

function goNow() {
  let result = enterPassword(prompt("Please enter the password"), password);
  if (result === "success") {
    alert("Successful");
    window.location.href = "gallery.html";
  } else {
    alert("Wrong Password.  Please Try Again");
  }
}
galleryButton.onclick = goNow;
