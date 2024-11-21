function output(message3){
myOutput.innerHTML += (message3);
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




function handleSubmit2(event){
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
    output("Please wait while we process your appointment. <br>");
    const promise = new Promise(getServerResponse);
    promise.then(parseResponse);
}

    
    
    function getServerResponse(resolve){
        debugger;

        setTimeout(activateResolve,  5000);

        
    function activateResolve(){
        debugger;

        const response = {
            message: "Your appointment has been successfully processed <br> <br>"
        };
        const resolveValue = JSON.stringify(response);
        resolve(resolveValue);
}
}


function parseResponse(resolveValue){
    debugger;
    const response = JSON.parse(resolveValue);
    const message = response.message;
    output(message);
}
