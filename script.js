const taskInput = document.getElementById('taskInput')
const pendingList = document.getElementById('pendingList')
const completedList = document.getElementById('completedList')
const descriptionInput = document.getElementById('taskdescription')

function addTask() {
    const taskText = taskInput.value.trim();
    const taskdesc = descriptionInput.value.trim();
    if (taskText === '') return;
    const taskElement = createTaskElement(taskText, taskdesc, new Date());
    pendingList.appendChild(taskElement);

    taskInput.value = '';
    descriptionInput.value = '';
}
function createTaskElement(taskText, taskdesc, date) {
    const listItem = document.createElement('li');
    const taskTitle = document.createElement('strong')
    taskTitle.textContent = taskText;

    const description = document.createElement('p')
    description.textContent = taskdesc;

    const dateElement = document.createElement('span')
    dateElement.textContent = formatDate(date);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completed';
    completeButton.addEventListener('click', function () {
        completeTask(listItem);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        deleteTask(listItem);
    });

    listItem.appendChild(taskTitle);
    listItem.appendChild(description);
    listItem.appendChild(dateElement);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    return listItem;
}
function formatDate(date) {
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    return date.toLocaleString('en-US', options);
}
function completeTask(taskElement) {
    taskElement.classList.add('Completed');
    taskElement.removeChild(taskElement.querySelector('button'));
    completedList.appendChild(taskElement);


}
function deleteTask(taskElement) {
    taskElement.remove();
}