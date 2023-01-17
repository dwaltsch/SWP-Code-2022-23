let string = "";
let length = 1;
for (let b = 0; b < x; b++) {
    for (let i = 0; i < x; i++) {
        if (i >= (x - length)) {
            string = string + "*";
        } else {
            string = string + " ";
        }
    }
    console.log(string)
    length = length + 1;
    string = "";
}