function dostuff(){
    let options = ["Schere","Stein","Papier"]
    let option = document.getElementById("game").value
    let r1 = Math.random();
    let number = Math.round(r1 * 3);
    console.log(options[number])
    if(option == options[number]){
        alert("Draw")
    }
}
document.getElementById("submit").addEventListener("click", function () {
    dostuff()
});