let foglalasok =
JSON.parse(localStorage.getItem("foglalasok")) ||
[false, false, false, false];

// Betöltéskor visszaállítja az állapotokat
for (let i = 1; i <= 4; i++) {

    let status = document.getElementById("status" + i);
    let gomb = document.getElementById("gomb" + i);

    if (status && gomb) {

        if (foglalasok[i - 1]) {
            status.innerHTML = "Állapot: Foglalt ❌";
            gomb.innerHTML = "Feloldás";
        } else {
            status.innerHTML = "Állapot: Szabad ✅";
            gomb.innerHTML = "Foglalás";
        }
    }
}

function foglal(asztal) {

    let szabadQR = document.getElementById("szabad" + asztal);
    let foglaltQR = document.getElementById("foglalt" + asztal);
    let status = document.getElementById("status" + asztal);
    let gomb = document.getElementById("gomb" + asztal);

    if (!foglalasok[asztal - 1]) {

        foglalasok[asztal - 1] = true;

        status.innerHTML = "Állapot: Foglalt ❌";
        gomb.innerHTML = "Feloldás";

        szabadQR.style.display = "none";
        foglaltQR.style.display = "block";

        document.getElementById("uzenet").innerHTML =
            "Az " + asztal + ". asztal sikeresen lefoglalva! ✅";

    } else {

        foglalasok[asztal - 1] = false;

        status.innerHTML = "Állapot: Szabad ✅";
        gomb.innerHTML = "Foglalás";

        szabadQR.style.display = "block";
        foglaltQR.style.display = "none";

        document.getElementById("uzenet").innerHTML =
            "Az " + asztal + ". asztal foglalása feloldva! 🔓";
    }

    localStorage.setItem(
        "foglalasok",
        JSON.stringify(foglalasok)
    );
}

// QR-kódos megnyitás kezelése
const params = new URLSearchParams(window.location.search);
const asztal = params.get("asztal");

if (asztal) {

    let allapot;

    if (foglalasok[asztal - 1]) {
        allapot = "FOGLALT ❌";
    } else {
        allapot = "SZABAD ✅";
    }

    document.body.innerHTML = `
        <div style="text-align:center; margin-top:100px; font-family:Arial;">
            <h1>SMART SCHOOL</h1>
            <h2>Asztal ${asztal}</h2>
            <h1>${allapot}</h1>
        </div>
    `;
}
