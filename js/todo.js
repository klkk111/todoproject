const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//newTodo가 만들어질 때마다 array에push
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
  saveToDos();
}

//화면에 출력
function paintToDo(newTodo) {
  //li 요소 만들기
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  console.log(li); //li태그 안의 span태그에 newTodo가 입력된 것을 확인

  //span을 li의 자식요소로 만든다
  li.appendChild(span);
  li.appendChild(button);
  //toDoList(위에서 정한)의 자식요소로 li태그를 추가한다
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  //input의 현재 value를 새로운 변수에 저장
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
