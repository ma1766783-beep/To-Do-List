const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoContainer = document.getElementById("todoContainer");
const doneContainer = document.getElementById("doneContainer");
const todoTitle = document.getElementById("todoTitle");
const doneTitle = document.getElementById("doneTitle");

let tasks = [];

function renderTasks() {
    todoContainer.innerHTML = "";
    doneContainer.innerHTML = "";
    let todoCount = 0;
    let doneCount = 0;
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        if (task.isCompleted) {
            doneCount++;
            taskItem.classList.add("completed");
            taskItem.innerHTML = `
                <span class="task-text completed-text">${task.text}</span>
                <div class="task-actions">
                    <button class="check-btn" onclick="toggleTask(${index})" title="Mark as To do">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </button>
                    <button class="delete-btn" onclick="deleteTask(${index})" title="Delete">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            `;
            doneContainer.appendChild(taskItem);
        } else {
            todoCount++;
            taskItem.innerHTML = `
                <span class="task-text">${task.text}</span>
                <div class="task-actions">
                    <button class="check-btn" onclick="toggleTask(${index})" title="Mark as Done">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </button>
                    <button class="delete-btn" onclick="deleteTask(${index})" title="Delete">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            `;
            todoContainer.appendChild(taskItem);
        }
    });

    todoTitle.innerText = `Tasks to do - ${todoCount}`;
    doneTitle.innerText = `Done - ${doneCount}`;
}

addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text !== "") {
        tasks.push({ text: text, isCompleted: false });
        taskInput.value = "";
        renderTasks();
    }
});


function toggleTask(index) {
    tasks[index].isCompleted = !tasks[index].isCompleted;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}