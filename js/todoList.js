/** @format */

const todoList = document.querySelector(".js-todoList");
const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");

const TODOS = "todos";

let todos = [];

function handleDelete(e) {
  const li = e.target.parentElement;

  todoList.removeChild(li);
  const filteredTodos = todos.filter((todo) => {
    return todo.id !== parseInt(li.id);
  });
  todos = filteredTodos;
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS, JSON.stringify(todos));
}

function printTodo(todo) {
  const li = document.createElement("li");
  li.className = "todo";
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", handleDelete);

  li.appendChild(span);
  li.appendChild(delBtn);

  todoList.appendChild(li);
  todos.push(todo);
}

function handleSubmit(e) {
  e.preventDefault();

  if (todoInput.value !== "") {
    const todo = {
      id: Date.now(),
      text: todoInput.value,
    };

    printTodo(todo);
    saveTodos();

    todoInput.value = "";
  }
}

function loadTodos() {
  const storedTodos = localStorage.getItem(TODOS);
  if (storedTodos) {
    const parsedTodos = JSON.parse(storedTodos);
    parsedTodos.forEach((todo) => printTodo(todo));
  }
}

function init() {
  loadTodos();
  todoForm.addEventListener("submit", handleSubmit);
}

if (todoForm) {
  init();
}
