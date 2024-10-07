let todos = [
    { id: 1, text: 'Купити продукти', completed: false },
    { id: 2, text: 'Підготувати звіт', completed: true },
];

// Функція для додавання нової справи
function newTodo() {
    const todoText = prompt('Введіть нове завдання:');
    if (todoText) {
        const newTodo = { id: Date.now(), text: todoText, completed: false };
        todos.push(newTodo);
        console.log(todos); // Перевірка чи справи додані
        render();
        updateCounter();
    }
}

// Функція для рендерингу однієї справи
function renderTodo(todo) {
    return `
        <li>
            <input type="checkbox" id="todo-${todo.id}" ${todo.completed ? 'checked' : ''} onclick="checkTodo(${todo.id})">
            <label for="todo-${todo.id}">${todo.text}</label>
            <button onclick="deleteTodo(${todo.id})">Видалити</button>
        </li>
    `;
}

// Функція для рендерингу всіх справ
function render() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = todos.map(renderTodo).join('');
}

// Функція для оновлення лічильників
function updateCounter() {
    const totalCount = todos.length;
    const incompleteCount = todos.filter(todo => !todo.completed).length;
    document.getElementById('total-count').textContent = totalCount;
    document.getElementById('incomplete-count').textContent = incompleteCount;
}

// Функція для видалення справи
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
    updateCounter();
}

// Функція для відмітки справи як виконаної
function checkTodo(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        render();
        updateCounter();
    }
}

// Початкова ініціалізація
render();
updateCounter();
