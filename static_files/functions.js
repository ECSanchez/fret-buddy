function genFretboard(iKey) {
    console.log("creating the fretboard");
    // only makes standard tuning guitar

    // create the fretboard
    // var fretboard = document.getElementById("fretboard");
    var fretboard = document.createElement("table");

    var key = iKey;
    var pattern = majorScale;
    var shiftedPattern = [];

    console.log(majorScale);

    for (var i = 0; i < pattern.length; i++) {
        shiftedPattern.push( addNotes(pattern[i],key) );
    }
    console.log(shiftedPattern);

    var sNum;
    var fNum;

    for (sNum = 5; sNum >= 0; sNum--) {
        // add new row
        var string = document.createElement('tr');
        for (fNum = 0; fNum < 15; fNum++) {
            // populate that row
            var fret = document.createElement('td');
            var note = addNotes(tuning[sNum],fNum);
            fret.setAttribute("note", note);
            fret.innerHTML = noteMap[note];

            if (shiftedPattern.includes(note)) {
                fret.setAttribute("lit",true);
            }

            string.appendChild(fret);
        }
        fretboard.appendChild(string);
    }

    document.getElementById("fretLocation").appendChild(fretboard);


}

function addNotes(a,b) {
    return (a + b) % 12;
}

function checkLoad() {
    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "interactive") {
            genFretboard(0);
        }
    });
}


function keyButton() {
    // delete old fret board
    console.log("abandon");
    const fl = document.getElementById("fretLocation");
    while(fl.firstChild) {
        fl.removeChild(fl.firstChild);
    }

    // get new value

    var e = document.getElementById("keySelect");
    console.log(e.options[e.selectedIndex].value);

    var key = e.options[e.selectedIndex].value;


    genFretboard(noteMap[key]);
}

// fiddlin

var majorScale = [0,2,4,5,7,9,11];
var minorScale = [0,2,3,5,7,8,10];

var tuning = [4,9,2,7,11,4]; // standard tuning EADGBE

var noteMap = {     // only flats for now
    0 : "C" ,
    1 : "Db",
    2 : "D" ,
    3 : "Eb",
    4 : "E" ,
    5 : "F" ,
    6 : "Gb",
    7 : "G" ,
    8 : "Ab",
    9 : "A" ,
    10: "Bb",
    11: "B" ,
    "C" : 0,
    "Db": 1,
    "D" : 2,
    "Eb": 3,
    "E" : 4,
    "F" : 5,
    "Gb": 6,
    "G" : 7,
    "Ab": 8,
    "A" : 9,
    "Bb": 10,
    "B" : 11
}

checkLoad();

//  0  1  2  3  4  5  6  7  8  9  10  11 12  
//  C     D     E  F     G     A      B  C
//  1     2     3  4     5     6      7  8



