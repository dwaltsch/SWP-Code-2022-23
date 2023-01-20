function sayHello() {
    var a = 7;
}

sayHello();
console.log(a);

const caseOrTrick = readline();
const n = parseInt(readline());
var buchstaben = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var output = "";
if (n > 26) {
    if (caseOrTrick.toLowerCase() == "lower") {
        for (let i = 0; i < n; i++) {
            if (i + 1 == n) {
                output += buchstaben[i];
            } else {
                output = output + buchstaben[i] + " ";
            }
        }
        console.log(output);
    }
    if (caseOrTrick.toLowerCase() == "upper") {
        for (let i = 0; i < n; i++) {
            if (i + 1 == n) {
                output += buchstaben[i].toUpperCase();
            } else {
                output = output + buchstaben[i].toUpperCase() + " ";
            }
        }
        console.log(output);
    }
} else {
    console.log("ERROR");
}