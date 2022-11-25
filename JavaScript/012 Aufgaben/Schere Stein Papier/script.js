var machinecount = 0;
var humancount = 0;
var gamelog = [];

function dostuff(){
    let options = ["Schere","Stein","Papier"]
    let option = document.getElementById("game").value
    let r1 = Math.random();
    let number = Math.round(r1 * 2);
    if(option == options[number]){
        machinecount++;
        humancount++;
        updatescore()
    }
    else if(option == "Schere" && options[number] == "Papier"){
        humancount++;
    }
    else if(option == "Stein" && options[number] == "Schere"){
        humancount++;
    }
    else if(option == "Papier" && options[number == "Stein"]){
        humancount++;
    }
    else{
        machinecount++;
    }
    addtogamelog(option,options[number]);
}
function updatescore(){
    let score = "<p>Maschine: " + machinecount + " : Mensch " + humancount + "</p>";
    document.getElementById("score").innerHTML = score;

}
function addtogamelog(option1, option2){
    let htmllog = "";
    gamelog.push(option1+" : "+option2)
    for (let i = 0; i < gamelog.length; i++) {
        htmllog = htmllog + "<p>" + gamelog[i] + "</p>";
    }
    document.getElementById("gamelog").innerHTML = htmllog;
}
document.getElementById("submit").addEventListener("click", function () {
    dostuff()
    updatescore()
});