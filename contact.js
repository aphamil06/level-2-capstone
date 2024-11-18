function output(message){
myOutput.innerHTML += (message);
}


function processForm(event){
    event.preventDefault();
    const form = event.target;
    const input = form[0];
    const input1 = form[1];
    const value = input.value;
    const value1 = input1.value;
    output(`Your Name is ${value} <br>`);
    output(`Your Email Address is ${value1}<br>`);
    setTimeout(serverSimulation,5000);
    output("Your form is being processed...<br>");
}

function serverSimulation(){
output("Your form has successfully been processed. ");
}

function processAppointment(event){
    event.preventDefault();
    debugger;
    const form = event.target;
    const name = form[0];
    const nameValue = name.value;
    const date = form[1];
    const dateValue =date.value;
    const phone = form[2];
    const phoneValue = phone.value;
    setTimeout(serverSimulation,5000);
    output(`<br> Hi ${nameValue}, the date and time for your scheduled phone appointment will be ${dateValue}.  We will call you at ${phoneValue}.  We look forward to speaking with you then. Please wait while we finish processing your appointment....<br>`);
}

