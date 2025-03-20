function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `<span>${taskText}</span>
        <button onclick="editTask(this)">Sửa</button>
        <button onclick="deleteTask(this)">Xóa</button>`;
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function editTask(button) {
    let li = button.parentElement;
    let newText = prompt("Sửa công việc:", li.firstChild.textContent);
    if (newText !== null) {
        li.firstChild.textContent = newText;
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}