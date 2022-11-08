const tasks = [];
console.log(tasks);

printTaskList();

function getHTMLTasks() {
    let html = "";
    tasks.forEach((element) => {
        if(element.isDone) {
            html += "<li><input type='checkbox' checked/>" + element.name + " " + element.responsible + "</li>";
        }
        else{
            html += "<li><input type='checkbox'/>" + element.name + " " + element.responsible + "</li>";
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