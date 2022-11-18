const tasks = [];
console.log(tasks);

printTaskList();

function markTask(element) {
    let index = element.getAttribute("data-index");
    let isChecked = element.checked;
    tasks[index].isDone = isChecked;
    printTaskList();
}

function getHTMLTasks() {
    let html = "";
    let index = 0;
    tasks.forEach((element) => {
        if(element.isDone) {
            html += "<li><input onClick='markTask(this)' type='checkbox' data-index='" + index + "' checked/>" + element.name + " " + element.responsible + " " + index + "</li>";
            index++;
        }
        else{
            html += "<li><input onClick='markTask(this)' type='checkbox' data-index='" + index + "' />" + element.name + " " + element.responsible + " " + index + "</li>";
            index++;
        }
    });
    return html;

}
function printTaskList() {
    document.getElementById("tasklist").innerHTML = getHTMLTasks();
}

document.getElementById("addTask").addEventListener("click", function() {
    addTask();
});

function addTask() {
    let taskName = document.getElementById("txtNewTask").value;
    let Responsible = document.getElementById("txtResponsible").value;
    let task = {name: taskName, isDone: false, responsible : Responsible};
    tasks.push(task);
    printTaskList();
}