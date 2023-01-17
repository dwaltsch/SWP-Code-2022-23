if (true) {
    var varVariable = "This is true";
}
console.log(varVariable);

if (true) {
    let letVariable = "This is true";
}
// des tuat ned weil letVariable als let definiert ist und nur innerhalb des if-Blocks gültig ist

// console.log(letVariable);
const constVariable = {name: "John"};
constVariable.name = "Jane";
console.log(constVariable.name);
// tldr immer const oder let verwenden, nie var verwenden