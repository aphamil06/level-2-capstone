function redirect(){
    let answer = prompt("Would you like to book a shoot Now?");
    if (answer === "yes") {window.location.href="contact.html";
        alert("Please complete form to begin the booking process");
    }
    else {window.location.href="gallery.html";
        alert ("Feel free to browse our gallery");
    }
  
}
bookNow.onclick = redirect;