function output(message){
myOutput.innerHTML += (message);
}


function processForm(event){
    event.preventDefault();
    const form = event.target;
    const input = form[0];
    const input1 = form[1]
    const value = input.value
    const value1 = input1.value
    output(`Your Name is ${value} <br>`);
    output(`Your Email Address is ${value1}<br>`);
    output("The form has been processed");
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

    output(`<br> Hi ${nameValue}, Your appointment has been processed. The date and time for your scheduled phone appointment is ${dateValue}.  We will call you at ${phoneValue}.  We look forward to speaking with you then.`)

}