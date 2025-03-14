document.getElementById("calculate").addEventListener("click", function() {
    // Get input values
    let billAmount = parseFloat(document.getElementById("billAmount").value);
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    // Check if values are valid
    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
        console.log("Please enter valid positive numbers.");
        return;
    }

    // Calculate tip and total amount
    let tipAmount = (billAmount * tipPercentage) / 100;
    let totalWithTip = billAmount + tipAmount;

    // Update the HTML elements
    document.getElementById("amount").innerText = `Rs. ${totalWithTip.toFixed(2)}`;
    document.getElementById("tipCost").innerText = `Rs. ${tipAmount.toFixed(2)}`;

    document.getElementById("billAmount").value = '';
    document.getElementById("tipPercentage").value = '';
});
