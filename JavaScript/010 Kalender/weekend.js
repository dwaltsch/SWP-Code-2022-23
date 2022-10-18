let anzahltage = 31;
let starttag = 3;

let header = "| Mo | Di | Mi | Do | Fr | Sa | So |";
console.log(header);
let row = "";
let emptyspace = "|    ";
let weekday = 0;
for (let i = 1; i <= anzahltage; i++) {
    if(i >= starttag){
        weekday++;
        if(weekday > 5){
            console.log(weekday)
            row = row + "| " + "WE" + " ";
        }
        if(i < 10 && weekday <= 5){
            row = row + "|  " + i + " ";
        }
        else if ( i > 10 && weekday <= 5){
            row = row + "| " + i + " ";
        }
        if (i % 7 == 0){
            row = row + "| \n"
            weekday = 0;
        }
    }
    else{
        row = row + "|    "
    }
}
if(weekday != 7){
    for (let i = 0; i < 7-weekday; i++) {
        row = row + emptyspace;
    }
}
console.log(row + "|");
