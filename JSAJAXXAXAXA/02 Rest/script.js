registerEvents();

function registerEvents(){
    document.getElementById("loadUser").addEventListener("click", function(){
        alert("loadUsers");
    });
    document.getElementById("loadTodos").addEventListener("click", function(){
        loadTodos();
    });
}
function loadTodos(){

}