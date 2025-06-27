const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value =""
}

function  calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error anjnk";
    }
}
function appendNumber (number) {
    let display =
    document.getElementById("display");
    if (display.value.length <12) {
        display.value += number;
    }
}