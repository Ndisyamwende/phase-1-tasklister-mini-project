// index.js

document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const taskInput = document.getElementById('task');
      const prioritySelect = document.getElementById('priority');
  
      const taskText = taskInput.value;
      const priorityValue = prioritySelect.value;
  
      
      const newTask = document.createElement('li');
      newTask.textContent = taskText;
  
      
      newTask.style.color = getPriorityColor(priorityValue);
  

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
    
        taskList.removeChild(newTask);
      });
  
      newTask.appendChild(deleteButton);
  
      
      taskList.appendChild(newTask);
  
      
      taskInput.value = '';
      prioritySelect.value = 'low';
    });
  
    function getPriorityColor(priority) {
      switch (priority) {
        case 'high':
          return 'red';
        case 'medium':
          return 'yellow';
        case 'low':
          return 'green';
        default:
          return 'black';
      }
    }
  });
  