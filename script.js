//Pin Generate button for random number
var pinGenarate = document.getElementById('pinGenerate').addEventListener('click',function(){
    var getPin = document.getElementById('getPin').value = Math.floor(1000 + Math.random() * 9000);
})

//Get Input from keypad
var btn = document.getElementsByClassName('button');
for (let i = 0; i < btn.length; i++) {
    const number = btn[i];
    number.addEventListener('click', function (event) {
        var btnClicked = event.target;
        var inputDisplay = document.getElementById('inputDisplay');

       //for backspace button 
       if(btnClicked.innerText == '<'){
        var backSpace = inputDisplay.value;
        var backSpaceNew = backSpace.substring(0,backSpace.length -1);
        inputDisplay.value = backSpaceNew;
       }

       //for all clear
       else if(btnClicked.innerText == 'C'){
        inputDisplay.value= "";
       }

       //for only numbers
       else{
           inputDisplay.value += btnClicked.innerText;
       }
        
    })
    
}

// for submit button
var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(){
    var pinGenarate = document.getElementById('pinGenerate');
    var inputDisplay = document.getElementById('inputDisplay');
    var unmatchedNotification = document.getElementById('pinUnmatched');
    var matchedNotification = document.getElementById('pinMatched');
    var actionLeft = document.getElementById('actionLeft')

    // for alert and execution
    if (inputDisplay.value == '' && getPin.value == '') {
        alert('Please generate pin and type first');
    }

    else if(getPin.value == ''){
        alert('Generate Pin first');
    }

    else if(inputDisplay.value == ''){
        alert('Please insert pin');
    }
    
    //if pin does not match then for pop up and left chances and btn disable
    else if(getPin.value != inputDisplay.value ){
        unmatchedNotification.style.display = 'block';
        matchedNotification.style.display = 'none';

        //make submit button disable
        if(actionLeft.innerText==1){
            actionLeft.innerText -= 1;
            submitBtn.disabled = true;
            submitBtn.style.opacity = '50%'
            
        }

        //chance left
        else{
            actionLeft.innerText -= 1;
        }
    }

    else{
        matchedNotification.style.display = 'block';
        unmatchedNotification.style.display = 'none';
        getPin.value = '';
        inputDisplay.value = '';
    } 
})