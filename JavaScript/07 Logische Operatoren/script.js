// Erstelle zwei Zufallszahl zwischen 0 und 100
let r1 = Math.floor(Math.random() * 100);
let r2 = Math.floor(Math.random() * 100);
console.log("Zufallszahl 1: " + r1);
console.log("Zufallszahl 2: " + r2);
// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"
if(r1 < r2 && r1 < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}
// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"
if(r1 < 30 || r2 < 30) {
    console.log("Eine der beiden ist kleiner als 30");
}

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"
if(r1 < 50 && r2 != 50) {
    console.log("Erste Zahl klein, zweite kein 50iger");
}