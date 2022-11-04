const tasks = ["tun", "nichtstun" , "machen"];

printTaskList();

function getHTMLTasks() {
    let html = "";
    tasks.forEach((element) => {
        html += `<li>${element}</li>`;
    });
    return html;

}
function printTaskList() {
    document.getElementById("tasklist").innerHTML = getHTMLTasks();
}

document.getElementById("addTask").addEventListener("click", function() {
    let newTask = document.getElementById("txtNewTask").value;
    tasks.push(newTask);
    printTaskList();
});