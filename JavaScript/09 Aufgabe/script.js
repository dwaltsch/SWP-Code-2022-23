// Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren):
// X X X X
// O O O O
// X X X X
// O O O O

for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < 4; j++) {
        if (i % 2 == 0) {
            row += "X ";
        } else {
            row += "O ";
        }
    }
    console.log(row);
}
let number = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        number += i;
    }
}
console.log(number);

// Aufugabe 3 bruchen ma ned oda    :D