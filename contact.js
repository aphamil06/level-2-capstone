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
    let user = {
        name: value,
        email: value1,
    };

    output(`Your Name is ${value} <br>`);
    output(`Your Email Address is ${value1}<br>`);
    setTimeout(serverSimulation,5000);
    output("Your form is being processed...<br>");
    output (JSON.stringify(user));
}

function serverSimulation(){
output("<br>Your form has successfully been processed. ");
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
    let user = {
        name: nameValue,
        date: dateValue,
        Phone: phoneValue,
    };
    setTimeout(serverSimulation,5000);
    output(`<br> Hi ${nameValue}, the date and time for your scheduled phone appointment will be ${dateValue}. <br> We will call you at ${phoneValue}. <br> We look forward to speaking with you then.<br> Please wait while we finish processing your appointment....<br>`);
    output(JSON.stringify (user));
}

