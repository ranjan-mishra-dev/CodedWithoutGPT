function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
}
console.log(new Date().toLocaleDateString())
setInterval(updateClock, 1000);

document.getElementById("date").innerText = new Date().toLocaleDateString();

updateClock();
