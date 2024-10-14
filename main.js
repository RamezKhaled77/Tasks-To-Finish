// LINK - BOM Challenge :

var inputTask = document.querySelector(".input");
var addTaskBtn = document.querySelector(".add");
var tasksDiv = document.querySelector(".tasks-div");
var tasksArr;

if (window.localStorage.getItem("tasksArray") === null) {
  tasksArr = [];
} else {
  tasksArr = JSON.parse(window.localStorage.getItem("tasksArray"));
  displayTasks(tasksArr);
}

addTaskBtn.addEventListener("click", () => {
  if (inputTask.value === "") {
    return;
  } else {
    tasksArr.push(inputTask.value);
    setItToLS();
    clearInput();
    displayTasks(tasksArr);
  }
});

function clearInput() {
  inputTask.value = "";
}

function displayTasks(list) {
  var box = ``;
  for (var i = 0; i < list.length; i++) {
    box += `<div class="task">
                <p>${list[i]}</p>
                <button onclick="deleteTask(${i})" class="delete">Finish</button>
            </div>`;
  }
  tasksDiv.innerHTML = box;
}

function deleteTask(index) {
  tasksArr.splice(tasksArr.indexOf(tasksArr[index]), 1);
  displayTasks(tasksArr);
  setItToLS();
}

function setItToLS() {
  window.localStorage.setItem("tasksArray", JSON.stringify(tasksArr));
}
