const loadData = () =>{
fetch("https://www.openligadb.de/api/getbltable/wmk/2022").then((result)=>{
    result.json().then((data)=>{
        fillTable(data,"WM Katar Tabelle");
    })
})
    fetch("https://api.openligadb.de/getmatchdata/wm2022/2022").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            generatematches(data);
        })
    })

    fetch("https://www.openligadb.de/api/getcurrentgroup/wmk").then((result)=>{
        result.json().then((data)=>{
            let html = "";
                html += "<p>"+ "aktuell " + data.GroupName +"</p>"

            document.getElementById("aktuell").innerHTML=html;
        })
    })
}
const fillTable =(data, Liga)=>{
    let html = "<table> <tr> <th>Flagge</th><th>Land</th><th>Punkte</th><th>Matches</th><th>Won</th> <th>Draw</th><th>Lost</th></tr>";
    data.forEach(element => {
        if( element.TeamIconUrl != "https://cdn.pixabay.com/photo/2013/07/12/14/07/interrogation-147799_960_720.png"){
            html += "<tr><td><img src=" + element.TeamIconUrl + " width= '40px' height='20px' >" + "</td> <td>" + element.ShortName+  "</td> <td>" + element.Points+"</td> <td>" + element.Matches+"</td> <td>" + element.Won+"</td> <td>" + element.Draw+"</td> <td>" + element.Lost+"</td></tr>";
        }
    })
    html += "</table>";
    document.getElementById("output").innerHTML =html;
}
const generatematches =(data)=>{
    // i bin selber ned stolz uf den code aber es funktioniert
    let html ="<table><th> Gruppe A</th>";
    let htmb ="<table><th> Gruppe B</th>";
    let htmc ="<table><th> Gruppe C</th>";
    let htmd ="<table><th> Gruppe D</th>";
    let htme ="<table><th> Gruppe E</th>";
    let htmf ="<table><th> Gruppe F</th>";
    data.forEach(element =>{
        if(element.group.groupName == "Gruppe A"){
            html += "<tr> <td>" + element.team1.teamName + "</td> <td>" + element.team2.teamName +"</td><td>"+ element.matchResults[0].pointsTeam1 + ":" + element.matchResults[0].pointsTeam2 +"</td></tr>"
        }
        if(element.group.groupName == "Gruppe B"){
            htmb += "<tr> <td>" + element.team1.teamName + "</td> <td>" + element.team2.teamName +"</td><td>"+ element.matchResults[0].pointsTeam1 + ":" + element.matchResults[0].pointsTeam2 +"</td></tr>"
        }
        if(element.group.groupName == "Gruppe C"){
            htmc += "<tr> <td>" + element.team1.teamName + "</td> <td>" + element.team2.teamName +"</td><td>"+ element.matchResults[0].pointsTeam1 + ":" + element.matchResults[0].pointsTeam2 +"</td></tr>"
        }
        if(element.group.groupName == "Gruppe D"){
htmd += "<tr> <td>" + element.team1.teamName + "</td> <td>" + element.team2.teamName +"</td><td>"+ element.matchResults[0].pointsTeam1 + ":" + element.matchResults[0].pointsTeam2 +"</td></tr>"
        }
        if(element.group.groupName == "Gruppe E"){
            htme += "<tr> <td>" + element.team1.teamName + "</td> <td>" + element.team2.teamName +"</td><td>"+ element.matchResults[0].pointsTeam1 + ":" + element.matchResults[0].pointsTeam2 +"</td></tr>"
        }
        if(element.group.groupName == "Gruppe F"){
            htmf += "<tr> <td>" + element.team1.teamName + "</td> <td>" + element.team2.teamName +"</td><td>"+ element.matchResults[0].pointsTeam1 + ":" + element.matchResults[0].pointsTeam2 +"</td></tr>"
        }
    })
    html += "</table>"
    document.getElementById("matches").innerHTML = (html + htmb + htmc + htmd + htme + htmf);
}
loadData();
