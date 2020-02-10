function genFretboard() {
    console.log("creating the fretboard");
    // only makes standard tuning guitar
    var fretboard = document.getElementById("fretboard");

    console.log(fretboard);

    var sNum;
    var fNum;

    for (sNum = 0; sNum < 6; sNum++) {
        // add new row
        var string = document.createElement('tr');
        for (fNum = 0; fNum < 12; fNum++) {
            // populate that row
            var fret = document.createElement('td');
            fret.innerHTML = fNum;
            string.appendChild(fret);
        }
        fretboard.appendChild(string);
    }


}

function checkLoad() {
    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "interactive") {
            genFretboard();
        }

    });
}

checkLoad();

