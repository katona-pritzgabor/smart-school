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
