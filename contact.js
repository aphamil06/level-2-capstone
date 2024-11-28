function output(message3){
myOutput.innerHTML = (message3);
}
function output1(message1){
myOutput1.innerHTML = (message1);
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

    
    output1(`<p>Hi ${user.name}. Please wait while we process your information. Once processed, we'll send your login credentials to ${user.email}.<br><div class="spinner-grow text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div><br></p>`);
          const promise = new Promise(getServerResponse1);
          promise.then(parseResponse1);
      }
      
          
          
          function getServerResponse1(resolve){
              debugger;
      
              setTimeout(activateResolve1,  5000);
      
              
          function activateResolve1(){
              debugger;
      
              const response = {
                  message: "<p>Your appointment has been successfully processed <br> <br></p>"
              };
              const resolveValue = JSON.stringify(response);
              resolve(resolveValue);
      }
      }
      
      
      function parseResponse1(resolveValue){
          debugger;
          const response = JSON.parse(resolveValue);
          const message = response.message;
          output1(message);
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
    output(`Hi ${nameValue}. Please wait while we process your appointment. Once processed, we'll call you on ${dateValue} at ${phoneValue}<br><div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div><br>`);
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
