// button_ID

function tabButtonId(id){
    const buttonId = document.getElementById(id);
    return buttonId;
}

// inputValue
function inputValueId(id){
    const inputValue = document.getElementById(id).value;
    const floatInputValue = parseFloat(inputValue);
    return floatInputValue;
}

// innerText 
function innerTextValueId(id){
    const innerTextValue = document.getElementById(id).innerText;
    const floatInnerTextValue = parseFloat(innerTextValue);
    return floatInnerTextValue;

}

