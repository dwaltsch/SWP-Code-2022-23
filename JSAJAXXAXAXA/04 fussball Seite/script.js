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
    let html ="<table><th> Gruppe A</th>";
    data.forEach(element =>{
        if(element.group.groupName == "Gruppe A"){
            console.log(element.team1)
            console.log(element.team2)
            html += "<tr> <td>" + element.team1.teamName + "</td> <td>" + element.team2.teamName +"</td></tr>"+ element.matchResults.teamName +"</td></tr>"
        }
    })
    html += "</table>"
    document.getElementById("matches").innerHTML =html;
}
loadData();
