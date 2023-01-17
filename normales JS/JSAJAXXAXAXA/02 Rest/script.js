registerEvents();

function registerEvents() {
    document.getElementById("loadUser").addEventListener("click", function () {
        loadUsers()
    });
    document.getElementById("loadTodos").addEventListener("click", function () {
        loadTodos()
    });
}

function loadTodos() {
    let html = "";
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.forEach(todo => {
                html += "<li>" + todo.title + "</li>";
                document.getElementById("list").innerHTML = html;
            })
        })
        .catch(function (error) {
            console.log(error);
        });

}

function loadUsers() {
    let html = "";
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.forEach(users => {
                html += "<li>" + users.name + "</li>";
                document.getElementById("list").innerHTML = html;
            })
        })
        .catch(function (error) {
            console.log(error);
        });

}