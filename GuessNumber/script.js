let btn = document.getElementById('btn');
let userInputField = document.getElementById('userInput');

const handleGuess = function () {
    let userInput = userInputField.value.trim();
    userInputField.value = "";

    if (isNaN(userInput) || userInput === null || !isFinite(userInput) || userInput === "") {
        return;
    }

    console.log(userInput);

    let randomNumber = Math.random();
    console.log(randomNumber);

    let number = Math.floor(randomNumber * 101);

    let hint = document.getElementById('hint');
    let displayNumber = document.getElementById('number');

    if (userInput > number) {
        displayNumber.innerText = number;
        hint.innerText = 'Too high!';
    } else if (userInput < number) {
        displayNumber.innerText = number;
        hint.innerText = 'Too low!';
    } else {
        displayNumber.innerText = number;
        hint.innerText = 'Congrats!';
    }
}

btn.addEventListener("click", handleGuess);

userInputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click(); 
    }
});

