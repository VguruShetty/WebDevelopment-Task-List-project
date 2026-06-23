document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const searchInput = document.getElementById('searchInput');
    const taskList = document.getElementById('taskList');

    // --- 1. FUNCTION: Add a New Task ---
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return; // Don't add empty tasks

        // Create the task item element matching your exact CSS classes
        const li = document.createElement('li');
        li.className = 'task-item';

        li.innerHTML = `
            <div class="task-left">
                <input type="checkbox" class="task-checkbox">
                <span class="task-text">${taskText}</span>
            </div>
            <button class="btn-delete">🗑</button>
        `;

        // Append to the list and clear the input field
        taskList.appendChild(li);
        taskInput.value = '';

        // Run search filter in case user adds a task while filtering
        filterTasks();
    }

    // Event listeners for adding a task
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });