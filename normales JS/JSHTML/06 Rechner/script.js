function buttonClicked() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let resultadd = parseFloat(num1) + parseFloat(num2);
    let resultsub = parseFloat(num1) - parseFloat(num2);
    let resultmult = parseFloat(num1) * parseFloat(num2);
    let resultdivide = parseFloat(num1) / parseFloat(num2);
    let resulthtml = "<p>+ " + resultadd + "</p>" + "<p>- " + resultsub + "</p>" + "<p>* " + resultmult + "</p>" + "<p>/ " + resultdivide + "</p>";

    document.getElementById("results").innerHTML = resulthtml;
}