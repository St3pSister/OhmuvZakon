function calculateOhmsLaw() {
    let U = parseFloat(document.getElementById('voltage').value);
    let I = parseFloat(document.getElementById('current').value);
    let R = parseFloat(document.getElementById('resistance').value);
    let result = "";

    if (!isNaN(U) && !isNaN(I)) {
        R = U / I;
        result = "Odpor (R) = " + R.toFixed(2) + " Ω";
    } else if (!isNaN(U) && !isNaN(R)) {
        I = U / R;
        result = "Proud (I) = " + I.toFixed(2) + " A";
    } else if (!isNaN(I) && !isNaN(R)) {
        U = I * R;
        result = "Napětí (U) = " + U.toFixed(2) + " V";
    } else {
        result = "Prosím zadejte dvě hodnoty pro výpočet.";
    }

    document.getElementById('result').innerHTML = result;
}