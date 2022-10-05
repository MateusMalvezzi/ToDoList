//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);

//functions

function addTodo(event){

    //prevent form from submitting
    event.preventDefault();

    //Todo DIV
    const todoDIV = document.createElement('div');
    todoDIV.classList.add("todo");

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerHTML = todoInput.value;
    todoDIV.appendChild(newTodo);
    
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHtml = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDIV.appendChild(completedButton);

    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHtml = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trashButton");
    todoDIV.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDIV);

}