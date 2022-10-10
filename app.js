//selectors
const todoInput = document.querySelector(".todo-input"); // usar getElementByID
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo')

//Event Listeners
    todoButton.addEventListener("click", addTodo);
    todoList.addEventListener("click", deleteTodo);
    filterOption.addEventListener("click", filterTodo);

//functions
function addTodo(event){

    //prevent form from submitting
    event.preventDefault(); // button do tipo button não envia form

    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerHTML = todoInput.value;
    todoDiv.appendChild(newTodo);
    
    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`; // isso pode ser class
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton); // poe o event listener aqui - complete

    //check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`; // isso pode ser class
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton); // poe o event listener aqui - delete

    //Append to list
    todoList.appendChild(todoDiv);

    //Clear todo input value
    todoInput.value = "";
}
function deleteTodo(e) {
    const item = e.target;
    if(item.classList[0] === "trash-btn"){ // teoricamente vc já pode saber q esse é o botão do lixo - e exixte um "hasClass" ou algo do tipo
        const todo = item.parentElement;
        todo.remove();
    }
    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        //The toggle() method toggles between hide() and show() for the selected elements
    }
}
function filterTodo(e) { // isso aqui é só mudar css global, não precisa fazer item a item
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    });    

}
