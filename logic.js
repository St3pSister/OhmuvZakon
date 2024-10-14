function vypocetohmovazakona() {

    let U = parseFloat(document.getElementById('napeti').value);
    let I = parseFloat(document.getElementById('proud').value);
    let R = parseFloat(document.getElementById('odpor').value);

    let result = "";
    let chyba = "";

    // Pokud odpor je nula a počítáme proud nebo napětí
    if (R === 0 && (!isNaN(U) || !isNaN(I))) {
        chyba = "Nelze dělit nulou (R nemůže být nula).";
        document.getElementById('result').innerHTML = chyba;
        return; // Ukončí funkci, pokud je dělení nulou
    }

    // Výpočet odporu (pokud máme U a I)
    if (!isNaN(U) && !isNaN(I)) {
        R = U / I;
        result = "Odpor (R) = " + R.toFixed(2) + " Ω";
        document.getElementById('odpor').value = R.toFixed(2);

    // Výpočet proudu (pokud máme U a R)
    } else if (!isNaN(U) && !isNaN(R)) {
        if (R !== 0) {  // Ověření, že nedělíme nulou
            I = U / R;
            result = "Proud (I) = " + I.toFixed(2) + " A";
            document.getElementById('proud').value = I.toFixed(2);
        } else {
            chyba = "Nelze dělit nulou (R nemůže být nula).";
        }

    // Výpočet napětí (pokud máme I a R)
    } else if (!isNaN(I) && !isNaN(R)) {
        U = I * R;
        result = "Napětí (U) = " + U.toFixed(2) + " V";
        document.getElementById('napeti').value = U.toFixed(2);

    } else {
        result = "Prosím zadejte dvě hodnoty pro výpočet.";
    }

    if (chyba) {
        document.getElementById('result').innerHTML = chyba; // Zobrazení chyby
    } else {
        document.getElementById('result').innerHTML = result; // Zobrazení výsledku
    }
}
