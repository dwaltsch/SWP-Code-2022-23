let r1 = Math.random();
let number = Math.round(r1 * 1000);

if (number < 200) {
    console.log("Mini");
}
// Wenn die Zahl zw. 20 und 50 ist gib aus "Medium"
if (number > 200 && number < 500) {
    console.log("Medium");
}
// Wenn die Zahl größer als 50 ist gib aus "Large"
if (number > 800) {
    console.log("Large");
}