let display = document.getElementById("display");

function appendToDisplay(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "Error"; 
    }
}

function clearDisplay() {
    display.innerText = "0";
}
