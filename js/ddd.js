const guides = {
    "swirlA": "<p><h2>A. Swirl, Necro, Lamia</h2><ol><li>Fusion Genghis (Necro + Swirl)</li><li>NS Lamia</li><li>Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro Siegfried (Lamia + Alexander) => SS Alexander(Grave) Via Genghis </li><li>Destroy Genghis to SS Lamia (Grave)</li><li>Synchro Crystal Wing (Lamia + Alexander)</li></ol><b>Final. (Siegfried + Crystal Wing)</b></p>",
    "swirlB": "<p><h2>B. Swirl, Necro, Kepler</h2><ol><li>NS Kepler Search Gate => Search Lamia via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>SS Lamia Via Swirl (Grave)</li><li>Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Crystal Wing (Lamia + Alexander)</li><li>Destroy Gate to SS Lamia (Grave) => SS Alexander (Grave) via Genghis</li><li>Synchro Formula (Kepler + Lamia) => Synchro Siegfried (Genghis + Formula)</li></ol><b>Final (Crystal Wing + Alexander + Siegfried)</b></p>",
    "swirlC": "<p><h2>C. Swirl, Necro, Copper</h2><ol><li>Fusion Genghis (Necro + Swirl)</li><li>NS Copper => Mill Kepler</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => ss Kepler (Grave) via Genghis => Search Swamp Via Kepler</li><li>Fusion d'Arc via Swamp (Copper + Kepler in Field)</li><li>Xyz Beatrice (2 Genghis) => Mill Lamia (Via Detach Genghis)</li><li>Destroy Swamp to SS Lamia (Grave) => Synchro Omega (Lamia + d'Arc)</li></ol><b>Final (Omega + Beatrice)</b></p>",
    "swirlD": "<p><h2>D. Swirl, Necro, Ragnarok</h2><ol><li>Fusion Genghis (Necro + Swirl)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => Xyz Beatrice (2 Genghis) => Mill Swirl (Via Detach Genghis)</li><li>SS Ragnarok via Swirl (Grave) => SS Genghis (Grave) via Ragnarok</li></ol><b>Final (Beatrice + Genghis + Ragnarok)</b></p>",
    "swirlE": "<p><h2>E. Swirl, Lamia, Gate</h2><ol><li>Search Necro via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>NS Lamia => Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Siegfried (Lamia + Alexander) => SS Alexander (Grave) via Genghis</li><li>Destroy Gate to SS Lamia (Grave) => Synchro Crystal (Lamia + Alexander)</li></ol><b>Final (Genghis + Siegfried + Crystal)</b></p>",
    "swirlF": "<p><h2>F.Swirl, Lamia, Kepler</h2><ol><li>NS Kepler => Search Gate via Kepler => Necro</li><li>Fusion Genghis (Necro + Swirl)</li><li>SS Lamia via Swirl (Grave) => Synchro Alexander (Genghis + Lamia)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) via Alexander </li><li>Synchro Crystal (Alexander + Lamia)</li><li>Destroy Gate to SS Lamia (Grave) => SS Alexander (Grave) Via Genghis </li><li>Synchro Formula (Kepler + Lamia) => Synchro Siegfried (Formula + Genghis)</li></ol><b>Final (Crystal Wing + Siegfried + Alexander + 1 Draw)</b></p>",
    "swirlG": "<p><h2>G. Swirl, Lamia, Copper</h2><ol><li>Fusion Genghis (Swirl + Copper)</li><li>SS Lamia via Swirl (Grave)'=> SS Copper (Grave) via Genghis => Mill Necro</li><li>Synchro Alexander (Genghis + Lamia)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Librarian</li><li>Destroy Genghis via SS Lamia (Grave)</li><li>Synchro Omega (Alexander + Lamia)</li></ol><b>Final (Omega + Librarian + 1 Draw)</b></p>",
    "swirlH": "<p><h2>H. Swirl, Lamia, Ragnarok</h2><ol><li>Pend Zone Ragnarok</li><li>Fusion Genghis (Lamia + Swirl) => SS Swirl (Grave) Via Ragnarok => SS Lamia (Grave) Via Genghis</li><li>Synchro Alexander (Genghis + Lamia)</li><li>Destroy Swirl via SS Lamia (Grave) => SS Swirl (Grave) Via Alexander</li><li>Synchro Siegfried (Alexander + Lamia</li></ol><b>Final (Siegfried + Swirl + Ragnarok [Pend Zone])</b></p>",
    "swirlI": "<p><h2>I.(& E) Swirl, Necro, Gate</h2><ol><li>Search Lamia via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>NS Lamia => Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Siegfried (Lamia + Alexander) => SS Alexander (Grave) via Genghis</li><li>Destroy Gate to SS Lamia (Grave) => Synchro Crystal (Lamia + Alexander)</li></ol><b>Final (Genghis + Siegfried + Crystal)</b></p>",
    "swirlJ": "<p><h2>J. Swirl, Kepler, Copper</h2><ol><li>NS Kepler => Search Gate via Kepler => Search Lamia Via Gate</li><li>Fusion Genghis => (Copper + Swirl)</li><li>SS Lamia via Swirl (Grave) => SS Copper (Grave) via Genghis => Mill NEcro</li><li>Synchro Alexander (Genghis + Lamia)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro Crystal (Alexander + Lamia)</li><li>Destroy Gate via SS Lamia (Grave) => Synchro Formula (Lamia + Kepler) => Synchro Siegfried</li></ol><b>Final (Copper + Crystal Wing + Siegfried + 1 Draw)</b></p>",
    "swirlK": "<p><h2>K. Swirl, Kepler, Ragnarok</h2><ol><li>NS Kepler => Search Gate via Kepler => Search Necro Via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave)</li><li>Xyz Beatrice (2 Genghis) => Mill Lamia (Via Detach Genghis)</li><li>Pend Zone Ragnarok</li><li>Destroy Gate Via SS Lamia (Grave) => SS Genghis (Grave) Via Ragnarok</li><li>Synchro Formula (Lamia + Kepler) => Synchro Omega (Genghis + Formula)</li></ol><b>Final (Ragnarok [Pend Zone] + Beatrice + Omega + 1 Draw)</b></p>",
    "swirlL": "<p><h2>L. Swirl, Kepler, Gate</h2><ol><li>Search Lamia via Gate</li><li>Fusion Genghis (Swirl + Kepler)</li><li>SS Lamia Via Swirl (Grave) => SS Kepler (Grave) via Genghis => Search Swamp Via Kepler</li><li>Synchro Alexander (Lamia + Genghis)</li><li>Fusion d'Arc via Swamp (Kepler + Genghis [Grave]) => SS Lamia (Grave) Via Alexander</li><li>Synchro Crystal (Lamia + Alexander) => Destroy Swamp Via SS Lamia (Grave) => Synchro Siegfried (d'ARc + Lamia)</li></ol><b>Final (Siegfried + Crystal Wing + Gate)</b></p>",
    "swirlM": "<p><h2>M. Swirl, Copper, Ragnarok</h2><ol><li>Fusion Genghis (Swirl + Ragnarok)</li><li>NS Copper => Mill Necro</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => SS Ragnarok (Grave) Via Genghis</li><li>Xyz Beatrice (2 Genghis) => Mill Something</li></ol><b>Final (Ragnarok + Copper [ATK] + Beatrice [Later Mill] )</b></p>",
    "swirlN": "<p><h2>N.swirl, Copper, Gate</h2><ol><li>Search Lamia via Gate</li><li>Fusion Genghis (Copper + Swirl)</li><li>SS Lamia via Swirl (Grave) => SS Copper (Grave) Via Genghis => Mill Necro</li><li>Synchro Alex (Lamia + Genghis)</li><li>Fusion d'Arc (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro Crystal (Alex + Lamia) => Destroy Gate via SS Lamia =>  Synchro Sieg (Lamia + d'Arc)</li></ol><b>Final (Sieg + Crystal + Copper)</b></p>",
    "swirlO": "<p><h2>O. Swirl, Ragnarok, Gate</h2><ol><li>Search Kepler Via Gate</li><li>NS Kepler => Search Swamp via Kepler</li><li>Fusion Genghis (Swirl + Ragnarok)</li><li>Fusion Genghis via Swamp (Kepler [Field] + Swirl [Grave]) => SS Ragnarok (Grave) Via Genghis</li><li>Xyz Beatrice (2 Genghis) => Mill Necro via Beatrice</li><li>Fusion Beowulf (Genghis in Grave + Necro in Grave) => Xyz Harbinger (Beowulf + Ragnarok)</li></ol><b>Final (Swamp + Gate + Beatrice + Harbinger)</b></p>"
};
const swirl = "D/D Swirl Slime";
const necro = "D/D Necro Slime";
const lamia = "D/D Lamia";
const kepler = "D/D Savant Kepler";
const coper = "D/D Savant Copernicus";
const ragna = "D/D/D Oblivion King Abyss Ragnarok";
const gate = "Dark Contract With The Gate";
const reqs = {
    "swirlA": [swirl, necro, lamia],
    "swirlB": [swirl, necro, kepler],
    "swirlC": [swirl, necro, coper],
    "swirlD": [swirl, necro, ragna],
    "swirlE": [swirl, lamia, gate],
    "swirlF": [swirl, lamia, kepler],
    "swirlG": [swirl, lamia, coper],
    "swirlH": [swirl, lamia, ragna],
    "swirlI": [swirl, necro, gate],
    "swirlJ": [swirl, kepler, coper],
    "swirlK": [swirl, kepler, ragna],
    "swirlL": [swirl, kepler, gate],
    "swirlM": [swirl, coper, ragna],
    "swirlN": [swirl, coper, gate],
    "swirlO": [swirl, ragna, gate]
};
const c1 = document.getElementById("card1");
const c2 = document.getElementById("card2");
const c3 = document.getElementById("card3");
const c4 = document.getElementById("card4");
const c5 = document.getElementById("card5");
const output = document.getElementById("out");
c1.addEventListener("change", function() {
    search();
});
c2.addEventListener("change", function() {
    search();
});
c3.addEventListener("change", function() {
    search();
});
c4.addEventListener("change", function() {
    search();
});
c5.addEventListener("change", function() {
    search();
});
var card1 = "";
var card2 = "";
var card3 = "";
var card4 = "";
var card5 = "";
var hand = [];
var combos = [];
var out = "";

function search() {
    card1 = c1.value;
    card2 = c2.value;
    card3 = c3.value;
    card4 = c4.value;
    card5 = c5.value;
    hand = [card1, card2, card3, card4, card5];
    combos = [];
    out = "";
    for (var key in reqs) {
        if (reqs.hasOwnProperty(key)) {
            var boo = true;
            for (var card of reqs[key]) {
                if (!hand.includes(card)) {
                    boo = false;
                }
            }
            if (boo) {
                combos.push(key);
            }
        }
    }
    for (var com of combos) {
        out += guides[com];
    }
    if (out.length === 0) {
        out = "No combos found! Try again with another hand.";
    }
    output.innerHTML = out;
}
console.log("loaded ver. refactor fix");
