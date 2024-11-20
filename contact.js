function output(message){
myOutput.innerHTML += (message);
}
function output1(message1){
myOutput1.innerHTML += (message1);
}


function handleSubmit(resolve){
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

    
    setTimeout(serverSimulation,5000);
    output1("Your form is being processed...<br>");

    function serverSimulation(){
        resolve(`Your information has been processed.  Your Name is ${value} <br>
    Your Email Address is ${value1}<br>`);
}
}

function makePromise1(){
    const promise = new Promise(handleSubmit);
    promise.then(getMessage);
}

function getMessage(resolveMessage){
    output1(resolveMessage);
}




function handleSubmit2(resolve){
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
    setTimeout(serverSimulation1,5000);
    output("Please wait while we process your appointment. <br>")
    
    function serverSimulation1(){
        resolve(`Hi ${nameValue} <br> Your appointment has been successfully processed. <br> The date and time for your scheduled phone appointment will be ${dateValue}. <br> We will call you at ${phoneValue}. <br> We look forward to speaking with you then.<br> <br>`)
}
}

function makePromise(){
    const promise = new Promise(handleSubmit2);
    promise.then(getMessage1);
}

function getMessage1(resolveMessage){
    output(resolveMessage);
}
