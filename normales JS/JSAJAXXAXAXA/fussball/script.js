const loadData = () => {
    fetch("https://www.openligadb.de/api/getbltable/bl1/2022").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillTable(data);
        })
    })

}
const fillTable = (data) => {
    let html = " ";
    data.forEach(element => {
        console.log()
        html += "<div>" + element.Points + " " + element.TeamName + "</div>";
    })
    document.getElementById("output").innerHTML = html;
}
loadData();