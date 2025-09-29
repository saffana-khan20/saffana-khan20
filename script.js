const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('tasks');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  // Mark task as done on click
  listItem.addEventListener('click', () => {
    listItem.classList.toggle('done');
  });

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent marking as done
    listItem.remove();
  });

  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);

  taskInput.value = '';
});
