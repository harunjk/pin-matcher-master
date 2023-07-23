function randomPin(){
    const pin=Math.round(Math.random()*10000);
    return pin;
}

function getPin(){
    const pin=randomPin();
        const pinString=pin+'';
        if(pinString.length===4){
            return pinString
        }
        else{
            return getPin();
        }
}

document.getElementById('pin').addEventListener('click',function(){
    const getCode=getPin();
    const displayPin=document.getElementById('input-pin');
    displayPin.value=getCode;
})

document.getElementById('calculetor').addEventListener('click',function(Event){
    const number=Event.target.innerText;
    const trypeNumber=document.getElementById('type-Number');
    const typenumberValue=trypeNumber.value;
    if(isNaN(number)){
       if(number==="C"){
            trypeNumber.value='';
        }
        else if(number=== '<'){
            const digit=typenumberValue.split('');
            digit.pop()
            const reminingDigit=digit.join('');
            trypeNumber.value=reminingDigit;
        }
    }
    else{
        const previewNumber=typenumberValue+number
        trypeNumber.value=previewNumber;
    }
})

// Pin Matching 

document.getElementById('pin-verify').addEventListener('click',function(){
    const genaretPin=document.getElementById('input-pin');
    const genaretPinValue=genaretPin.value;

    const typePin=document.getElementById('type-Number');
    const typePinValue=typePin.value;

    
    const successPin=document.getElementById('success');
    const wrongPin=document.getElementById('notMatch');


    if(genaretPinValue===typePinValue){
        successPin.style.display='block';
        wrongPin.style.display='none';
    }
    else{
        wrongPin.style.display='block';
        successPin.style.display='none';
    }
})