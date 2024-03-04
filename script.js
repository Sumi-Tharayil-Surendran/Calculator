const display = document.getElementById("display")


function appendtoDisplay(x){
    display.value += x;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="Error"
    }

}
function clearDisplay(){
    display.value="";
}