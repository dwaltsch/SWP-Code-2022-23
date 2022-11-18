function convert() {
    let amount = document.getElementById("txtEuro").value;
    let converted = amount * 0.87;
    let html = "<p>" + converted + " GBP</p>";
    document.getElementById("value").innerHTML= html;
}
document.getElementById("convert").addEventListener("click", function () {
    convert();
});