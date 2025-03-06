 
const loggedIn = localStorage.getItem('user');
const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
if (loggedIn === null) {
    window.location.href = 'local.html';
}


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#taskName').value = '';
});

let getItems = document.querySelector('#taskList');
getItems.innerHTML = '';

if (allTasks.length >= 1) {
    for (let i of allTasks) {
        let item = document.createElement('div');
        let singleTask = document.createElement('p');
        singleTask.innerText = i.name;
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('data-task-id', i.id);
        deleteButton.innerText = 'Delete Task';
        deleteButton.addEventListener('click', function() {
            singleTask.innerText = '';
            deleteButton.style.display = 'none';
        })
        item.append(singleTask, deleteButton);
        getItems.append(item);
    }
} 



let tasks = [];

document.querySelector('#createTask').addEventListener('click', function() {
    let taskName = document.querySelector('#taskName');
    let nameOfTask = taskName.value.trim();
    let dateTime = new Date();
    let id = dateTime.getTime();
    taskName.value = '';
    if (nameOfTask === '') return null
    tasks.push({
        'id': id,
        'name': nameOfTask
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
})










































