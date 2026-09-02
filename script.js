let foglalasok = [false, false, false, false];

function foglal(asztal) {

    let status = document.getElementById("status" + asztal);
    let gomb = document.getElementById("gomb" + asztal);

    if (!foglalasok[asztal - 1]) {

        foglalasok[asztal - 1] = true;

        status.innerHTML = "Állapot: Foglalt ❌";
        gomb.innerHTML = "Feloldás";

        document.getElementById("uzenet").innerHTML =
            "Az " + asztal + ". asztal sikeresen lefoglalva! ✅";

    } else {

        foglalasok[asztal - 1] = false;

        status.innerHTML = "Állapot: Szabad ✅";
        gomb.innerHTML = "Foglalás";

        document.getElementById("uzenet").innerHTML =
            "Az " + asztal + ". asztal foglalása feloldva! 🔓";
    }
}

const params = new URLSearchParams(window.location.search);
const asztal = params.get("asztal");

if (asztal !== null) {

    let allapot;

    if (foglalasok[asztal - 1]) {
        allapot = "FOGLALT ❌";
    } else {
        allapot = "SZABAD ✅";
    }

    document.body.innerHTML = `
        <h1>SMART SCHOOL</h1>
        <h2>Asztal ${asztal}</h2>
        <h1>${allapot}</h1>
    `;
}

alert(window.location.search);
