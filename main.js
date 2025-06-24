const tasks = [
    { title: "Task 1", completed: false },
    { title: "Task 2", completed: true },
    { title: "Task 3", completed: false },
];

const taskList = document.querySelector("#task-list");
const toDoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

toDoForm.onsubmit = function (e) {
    e.preventDefault();
    const value = todoInput.value.trim();
    if (!value) {
        return alert("Please enter a task");
    }
    let newTask = {
        title: value,
        completed: false,
    };
    tasks.push(newTask);

    render();
    todoInput.value = "";
};

function render() {
    const html = tasks
        .map(
            (task) => `
     <li class="task-item ${task.completed ? "completed" : ""}">
                    <span class="task-title">${task.title}</span>
                    <div class="task-action">
                        <button class="task-btn edit">Edit</button>
                        <button class="task-btn done">${
                            task.completed ? "Mark as undone" : "Mark as done"
                        }</button>
                        <button class="task-btn delete">Delete</button>
                    </div>
                </li>
`
        )
        .join("");

    taskList.innerHTML = html;
}
render();
