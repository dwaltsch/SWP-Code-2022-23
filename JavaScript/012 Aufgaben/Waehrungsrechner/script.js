function convert() {
    let amount = document.getElementById("txtEuro").value;
    let currency = document.getElementById("currency").value;
        let converted = calculateamount(amount,currency)
        document.getElementById("value").innerHTML= converted;

}
function calculateamount(amount,currency){
    if(currency == "CHF"){
        var exchangerate = 1.01;
    }
    if(currency == "USD"){
        var exchangerate = 1.04;
    }
    if(currency == "GBP"){
        var exchangerate = 0.87;
    }
    let converted =  amount * exchangerate;
    let html = "<p>" + converted + " " + currency+ "</p>";
    return html
}
document.getElementById("convert").addEventListener("click", function () {
    convert();
});