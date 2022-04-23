const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const addButton = document.getElementById('criar-tarefa');
let tasks = document.getElementsByClassName('item');
const listObj = {
  items: [],
  completed: [],
};

function DetectSelectedTask(selected) {
  const qntd = document.getElementsByClassName('selected');
  for (let i = 0; i < qntd.length; i += 1) {
    if (qntd[i] !== selected) {
      qntd[i].classList.remove('selected');
    }
  }
}

function selectTask(event) {
  const task = event.target;
  task.classList.add('selected');
  DetectSelectedTask(task);
}

function putCompleteTask(lineTask) {
  if (lineTask.classList.contains('completed')) {
    lineTask.classList.remove('completed');
  } else {
    lineTask.classList.add('completed');
  }
}

function completed(event) {
  putCompleteTask(event.target);
}

function deletSelected() {
  const item = document.getElementsByClassName('selected')[0];
  list.removeChild(item);
}

function addEventClick() {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].addEventListener('click', selectTask);
    tasks[i].addEventListener('dblclick', completed);
  }
}

function setTaskToList(text, completedBool) {
  const task = document.createElement('li');
  task.classList.add('item');
  task.innerText = text;

  list.appendChild(task);
  input.value = '';
  tasks = document.getElementsByClassName('item');
  addEventClick();
  if (completedBool) {
    putCompleteTask(task);
  }
}

function createList() {
  setTaskToList(input.value, false);
}

function deleteList() {
  list.innerHTML = '';
}

function deleteCompleted() {
  const items = document.getElementsByClassName('completed');
  for (let i = 0; items.length > 0; i += 1) {
    list.removeChild(items[0]);
  }
}

function saveList() {
  listObj.items = [];
  listObj.completed = [];
  const items = document.getElementsByClassName('item');
  for (let i = 0; i < items.length; i += 1) {
    listObj.items.push(items[i].innerText);
    if (items[i].classList.contains('completed')) {
      listObj.completed.push(true);
    } else {
      listObj.completed.push(false);
    }
  }
  localStorage.setItem('list', JSON.stringify(listObj));
}

function up() {
  const Selected = document.getElementsByClassName('selected')[0];
  if (Selected !== undefined && Selected.previousSibling) {
    list.insertBefore(Selected, Selected.previousElementSibling);
  }
}

function down() {
  const Selected = document.getElementsByClassName('selected')[0];
  if (Selected !== undefined && Selected.nextSibling) {
    list.insertBefore(Selected.nextElementSibling, Selected);
  }
}

function enter(event) {
  if (event.keyCode === 13) {
    createList();
  }
}

input.addEventListener('keyup', enter);
addButton.addEventListener('click', createList);
document.getElementById('apaga-tudo').addEventListener('click', deleteList);
document.getElementById('remover-finalizados').addEventListener('click', deleteCompleted);
document.getElementById('salvar-tarefas').addEventListener('click', saveList);
document.getElementById('mover-cima').addEventListener('click', up);
document.getElementById('mover-baixo').addEventListener('click', down);
document.getElementById('remover-selecionado').addEventListener('click', deletSelected);

window.onload = function Load() {
  if (localStorage.list !== undefined) {
    const listLoad = JSON.parse(localStorage.getItem('list'));
    for (let i = 0; i < listLoad.items.length; i += 1) {
      setTaskToList(listLoad.items[i], listLoad.completed[i]);
    }
  } else {
    localStorage.setItem('list', JSON.stringify(listObj));
  }
};
