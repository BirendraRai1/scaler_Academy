document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const addButton = document.getElementById("addButton");
  const todoList = document.getElementById("todoList");

  // Load existing todos from local storage
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  renderTodos();

  // Add a new todo

  addButton.addEventListener("click", () => {
    const todoText = todoInput.value.trim();
    if (todoText != "") {
      todos.push(todoText);
      saveToLocalStorage();
      renderTodos();
      todoInput.value = ""; // Clear the input field
    }
  });

  //Remove a todo
  todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
      const index = event.target.dataset.index;
      todos.splice(index, 1);
      saveToLocalStorage();
      renderTodos();
    }
  });

  // Save todos to local storage
  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Render the todos
  function renderTodos() {
    todoList.innerHTML = ""; //clear the list
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.className = "todo-item";
      li.innerHTML = `<span>${todo}</span>
            <button class="remove-button" data-index="${index}">Remove</button>
            `;
      todoList.appendChild(li);
    });
  }
});
