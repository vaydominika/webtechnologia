document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('todoInput');
    const newTodo = input.value.trim();

    if (newTodo) {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(newTodo));

        document.getElementById('todoList').appendChild(li);
        input.value = '';
    }
}); 