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
    output("The form has been processed")
}

