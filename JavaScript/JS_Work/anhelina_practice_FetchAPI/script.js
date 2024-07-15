document.addEventListener('DOMContentLoaded', function () {
    const todoBox = document.getElementById('todos-container');

    document.querySelector("#btn").addEventListener("click", loadJSON);
 
 
function loadJSON(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                const todoItem = document.createElement('div');
                todoItem.classList.add('todo-item');

                if (todo.completed === true) {
                    todoItem.classList.add('todo-item-complete');
                }
                todoItem.innerHTML = `
                        <h3>${todo.title}</h3>
                        <p><strong>UserID:</strong> ${todo.userId}</p>
                        <p><strong>ID:</strong> ${todo.id}</p>
                    `;
                    todoBox.appendChild(todoItem);
            });
        })
    }
});