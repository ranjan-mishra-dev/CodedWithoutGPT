let inputTask = document.getElementById("task");
let submit = document.getElementById("submit");
let listContainer = document.querySelector(".listAdded");

document.addEventListener("DOMContentLoaded", loadTasks);


submit.addEventListener("click", () => {
    let taskTitle = inputTask.value.trim();
    if (taskTitle === "") return;

    addTaskToDom(taskTitle, false);
    saveTaskToLocalStorage(taskTitle, false);

    inputTask.value = "";
});

function saveTaskToLocalStorage(taskTitle, isChecked) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({title: taskTitle, checked: isChecked});
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTaskToDom(taskTitle, isChecked) {
    let userList = document.createElement("div");
    userList.classList.add("userList");

    userList.innerHTML = `
        <input type="checkbox" class="taskCheckbox" ${isChecked ? "checked": " "}>
        <p class="title" style="text-decoration: ${isChecked ? "line-through" : "none"}"> ${taskTitle} </p>
        <button class="delete">Delete</button>
    `;

    listContainer.appendChild(userList);

    let checkBox = userList.querySelector(".taskCheckbox");
    let taskText = userList.querySelector(".title");

    checkBox.addEventListener("change", function() {
        taskText.style.textDecoration = this.checked ? "line-through" : "none";
        updateTaskStatusInLocalStorage(taskTitle, this.checked);
    });

    let deleteBtn = userList.querySelector(".delete");

    deleteBtn.addEventListener("click", () => {
        userList.remove();
        removeTaskFromLocalStorage(taskTitle);
    });
}

function removeTaskFromLocalStorage(taskTitle) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.title !== taskTitle);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskStatusInLocalStorage(taskTitle, isChecked) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        if (task.title === taskTitle) {
            task.checked = isChecked;
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToDom(task.title, task.checked));
}