let textArea = document.getElementById("textArea");
let charCount = document.getElementById("charCount");

textArea.addEventListener("input", function() {
    charCount.innerText = textArea.value.length;
});
