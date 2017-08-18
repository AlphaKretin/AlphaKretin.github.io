const guides = {
    "swirlA": "<p><h2>A. Swirl, Necro, Lamia</h2><ol><li>Fusion Genghis (Necro + Swirl)</li><li>NS Lamia</li><li>Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro Siegfried (Lamia + Alexander) => SS Alexander(Grave) Via Genghis </li><li>Destroy Genghis to SS Lamia (Grave)</li><li>Synchro Crystal Wing (Lamia + Alexander)</li></ol><b>Final (Siegfried + Crystal Wing)</b></p>",
    "swirlB": "<p><h2>B. Swirl, Necro, Kepler</h2><ol><li>NS Kepler Search Gate => Search Lamia via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>SS Lamia Via Swirl (Grave)</li><li>Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Crystal Wing (Lamia + Alexander)</li><li>Destroy Gate to SS Lamia (Grave) => SS Alexander (Grave) via Genghis</li><li>Synchro Formula (Kepler + Lamia) => Synchro Siegfried (Genghis + Formula)</li></ol><b>Final (Crystal Wing + Alexander + Siegfried)</b></p>",
    "swirlC": "<p><h2>C. Swirl, Necro, Copper</h2><ol><li>Fusion Genghis (Necro + Swirl)</li><li>NS Copper => Mill Kepler</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => ss Kepler (Grave) via Genghis => Search Swamp Via Kepler</li><li>Fusion d'Arc via Swamp (Copper + Kepler in Field)</li><li>Xyz Beatrice (2 Genghis) => Mill Lamia (Via Detach Genghis)</li><li>Destroy Swamp to SS Lamia (Grave) => Synchro Omega (Lamia + d'Arc)</li></ol><b>Final (Omega + Beatrice)</b></p>",
    "swirlD": "<p><h2>D. Swirl, Necro, Ragnarok</h2><ol><li>Fusion Genghis (Necro + Swirl)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => Xyz Beatrice (2 Genghis) => Mill Swirl (Via Detach Genghis)</li><li>SS Ragnarok via Swirl (Grave) => SS Genghis (Grave) via Ragnarok</li></ol><b>Final (Beatrice + Genghis + Ragnarok)</b></p>",
    "swirlE": "<p><h2>E. Swirl, Lamia, Gate</h2><ol><li>Search Necro via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>NS Lamia => Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Siegfried (Lamia + Alexander) => SS Alexander (Grave) via Genghis</li><li>Destroy Gate to SS Lamia (Grave) => Synchro Crystal (Lamia + Alexander)</li></ol><b>Final (Genghis + Siegfried + Crystal)</b></p>",
    "swirlF": "<p><h2>F. Swirl, Lamia, Kepler</h2><ol><li>NS Kepler => Search Gate via Kepler => Necro</li><li>Fusion Genghis (Necro + Swirl)</li><li>SS Lamia via Swirl (Grave) => Synchro Alexander (Genghis + Lamia)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) via Alexander </li><li>Synchro Crystal (Alexander + Lamia)</li><li>Destroy Gate to SS Lamia (Grave) => SS Alexander (Grave) Via Genghis </li><li>Synchro Formula (Kepler + Lamia) => Synchro Siegfried (Formula + Genghis)</li></ol><b>Final (Crystal Wing + Siegfried + Alexander + 1 Draw)</b></p>",
    "swirlG": "<p><h2>G. Swirl, Lamia, Copper</h2><ol><li>Fusion Genghis (Swirl + Copper)</li><li>SS Lamia via Swirl (Grave)'=> SS Copper (Grave) via Genghis => Mill Necro</li><li>Synchro Alexander (Genghis + Lamia)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Librarian</li><li>Destroy Genghis via SS Lamia (Grave)</li><li>Synchro Omega (Alexander + Lamia)</li></ol><b>Final (Omega + Librarian + 1 Draw)</b></p>",
    "swirlH": "<p><h2>H. Swirl, Lamia, Ragnarok</h2><ol><li>Pend Zone Ragnarok</li><li>Fusion Genghis (Lamia + Swirl) => SS Swirl (Grave) Via Ragnarok => SS Lamia (Grave) Via Genghis</li><li>Synchro Alexander (Genghis + Lamia)</li><li>Destroy Swirl via SS Lamia (Grave) => SS Swirl (Grave) Via Alexander</li><li>Synchro Siegfried (Alexander + Lamia</li></ol><b>Final (Siegfried + Swirl + Ragnarok [Pend Zone])</b></p>",
    "swirlI": "<p><h2>I.(& E) Swirl, Necro, Gate</h2><ol><li>Search Lamia via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>NS Lamia => Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Siegfried (Lamia + Alexander) => SS Alexander (Grave) via Genghis</li><li>Destroy Gate to SS Lamia (Grave) => Synchro Crystal (Lamia + Alexander)</li></ol><b>Final (Genghis + Siegfried + Crystal)</b></p>",
    "swirlJ": "<p><h2>J. Swirl, Kepler, Copper</h2><ol><li>NS Kepler => Search Gate via Kepler => Search Lamia Via Gate</li><li>Fusion Genghis => (Copper + Swirl)</li><li>SS Lamia via Swirl (Grave) => SS Copper (Grave) via Genghis => Mill NEcro</li><li>Synchro Alexander (Genghis + Lamia)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro Crystal (Alexander + Lamia)</li><li>Destroy Gate via SS Lamia (Grave) => Synchro Formula (Lamia + Kepler) => Synchro Siegfried</li></ol><b>Final (Copper + Crystal Wing + Siegfried + 1 Draw)</b></p>",
    "swirlK": "<p><h2>K. Swirl, Kepler, Ragnarok</h2><ol><li>NS Kepler => Search Gate via Kepler => Search Necro Via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave)</li><li>Xyz Beatrice (2 Genghis) => Mill Lamia (Via Detach Genghis)</li><li>Pend Zone Ragnarok</li><li>Destroy Gate Via SS Lamia (Grave) => SS Genghis (Grave) Via Ragnarok</li><li>Synchro Formula (Lamia + Kepler) => Synchro Omega (Genghis + Formula)</li></ol><b>Final (Ragnarok [Pend Zone] + Beatrice + Omega + 1 Draw)</b></p>",
    "swirlL": "<p><h2>L. Swirl, Kepler, Gate</h2><ol><li>Search Lamia via Gate</li><li>Fusion Genghis (Swirl + Kepler)</li><li>SS Lamia Via Swirl (Grave) => SS Kepler (Grave) via Genghis => Search Swamp Via Kepler</li><li>Synchro Alexander (Lamia + Genghis)</li><li>Fusion d'Arc via Swamp (Kepler + Genghis [Grave]) => SS Lamia (Grave) Via Alexander</li><li>Synchro Crystal (Lamia + Alexander) => Destroy Swamp Via SS Lamia (Grave) => Synchro Siegfried (d'ARc + Lamia)</li></ol><b>Final (Siegfried + Crystal Wing + Gate)</b></p>",
    "swirlM": "<p><h2>M. Swirl, Copper, Ragnarok</h2><ol><li>Fusion Genghis (Swirl + Ragnarok)</li><li>NS Copper => Mill Necro</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => SS Ragnarok (Grave) Via Genghis</li><li>Xyz Beatrice (2 Genghis) => Mill Something</li></ol><b>Final (Ragnarok + Copper [ATK] + Beatrice [Later Mill] )</b></p>",
    "swirlN": "<p><h2>N. Swirl, Copper, Gate</h2><ol><li>Search Lamia via Gate</li><li>Fusion Genghis (Copper + Swirl)</li><li>SS Lamia via Swirl (Grave) => SS Copper (Grave) Via Genghis => Mill Necro</li><li>Synchro Alex (Lamia + Genghis)</li><li>Fusion d'Arc (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro Crystal (Alex + Lamia) => Destroy Gate via SS Lamia =>  Synchro Sieg (Lamia + d'Arc)</li></ol><b>Final (Sieg + Crystal + Copper)</b></p>",
    "swirlO": "<p><h2>O. Swirl, Ragnarok, Gate</h2><ol><li>Search Kepler Via Gate</li><li>NS Kepler => Search Swamp via Kepler</li><li>Fusion Genghis (Swirl + Ragnarok)</li><li>Fusion Genghis via Swamp (Kepler [Field] + Swirl [Grave]) => SS Ragnarok (Grave) Via Genghis</li><li>Xyz Beatrice (2 Genghis) => Mill Necro via Beatrice</li><li>Fusion Beowulf (Genghis in Grave + Necro in Grave) => Xyz Harbinger (Beowulf + Ragnarok)</li></ol><b>Final (Swamp + Gate + Beatrice + Harbinger)</b></p>",
    "necroA": "<p><h2>A. Necro, Lamia, Keplar</h2><ol><li>NS Keplar => Search Gate via Keplar => Search Swirl</li><li>Fusion Genghis (Necro + Swirl)</li><li>SS Lamia via Swirl (Grave) => Synchro Alexander (Genghis + Lamia)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) via Alexander </li><li>Synchro Crystal (Alexander + Lamia)</li><li>Destroy Gate to SS Lamia (Grave) => SS Alexander (Grave) Via Genghis </li><li>Synchro Formula (Keplar + Lamia) => Synchro Siegfried (Formula + Genghis)</li></ol><b>Final (Crystal Wing + Siegfried + Alexander + 1 Draw)</b></p>",
    "necroB": "<p><h2>B. Necro, Lamia, Copper</h2><ol><li>Destroy Copper [Hand] Via SS Lamia [Hand]</li><li>NS Necro => Formula Synchro (Necro + Lamia)</li><li>Fusion Genghis (Copper in Grave + Necro in Grave) => Synchro Omega (Formula + Genghis)</li></ol><b>Final (Omega + 1 Draw)</b></p>",
    "necroC": "<p><h2>C. Necro, Keplar, Copper</h2><ol><li>NS Keplar => Search Gate via Keplar => Search Swirl via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>SS Copper via Swirl (Grave) => Mill Lamia (Don't Activate Genghis)</li><li>Destroy Gate vua SS Lamia (Grave) => Synchro Formula (Lamia + Keplar) => Synchro Omega (Genghis + Formula)</li><li>Fusion Beowulf (Necro + Genghis) [Bonus]</li></ol><b>Final (Omega + 1 Draw + Beowulf [Bonus])</b></p>",
    "necroD": "<p><h2>D. Necro, Keplar, Ragnarok</h2><ol><li>NS Keplar => Search Gate via Keplar => Search Swirl via Gate</li><li>Pend Zone Ragnarok</li><li>Fusion Genghis (Swirl + Necro)</li><li>fusion Genghis (Swirl in Grave + NEcro in Grave)</li><li>Xyz Beatricce (2 Gennghis) => Mill Lamia</li><li>Destroy Gate via SS Lamia (Grave) => SS Genghis (Grave) via Ragnarok [Pend Zone]</li><li>Synchro Formula (Lamia + Keplar) => Synchro Omega (Formula + Ragnarok)</li></ol><b>Final (Beatrice + Omega + Ragnarok [Pend Zone] + 1 Draw)</b></p>",
    "necroE": "<p><h2>E. Necro, Keplar, Gate</h2><ol><li>Search Swirl Via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>SS Keplar via Swirl (Grave) => Chain!!![SS Necro (Grave) Via Genghis/Search Swamp via Keplar]</li><li>Fusion Genghis via Swamp (Keplar [Field] + Necro [Field])</li><li>Xyz Beatrice (2 Genghis) => Mill Lamia</li><li>Destroy Swamp via SS Lamia (Grave) => Fusion d'Arc (Necro + Genghis) => Synchro Omega (Lamia + d'ARc)</li></ol><b>Final (Omega + Beatrice + Gate)</b></p>",
    "necroF": "<p><h2>F. Necro, Copper, Gate</h2><ol><li>Search Swirl via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>NS Copper => Mill Keplar</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => SS Keplar (Grave) Via Genghis => Search Swamp via Keplar</li><li>Fusion d'Arc via Swamp (Keplar [Field] + Copper [Field])</li><li>Xyz Beatrice (2 Genghis) => Mill Lamia</li><li>Destroy Swamp via SS Lamia (Grave) => Synchro Omega (d'ARc + Lamia)</li></ol><b>Final (Omega + Beatrice + Gate)</b></p>",
    "necroG": "<p><h2>G. Swirl, Ragnar, Gate</h2><ol><li>Search Necro via Gate</li><li>Fusion Genghis (Swirl + Necro)</li><li>Fusion Genghis (NEcro in Grave + Swirl in Grave)</li><li>Beatrice (2 Genghis) => Mill Swirl</li><li>SS Ragnarok via Swirl (Grave) => SS Genghis (Grave) Via Ragnarok</li></ol><b>Final (Ragnarok + Beatrice + Genghis + Gate)</b></p>",
    "lamiaA": "<p><h2>A. Lamia, Keplar, Copper</h2><ol><li>NS Keplar => Search Gate via Keplar => Search Swirl via Gate</li><li>Fusion Genghis (Copper + Swirl)</li><li>SS Lamia via Swirl (Grave) => SS Copper (Grave) Via Genghis => Mill Necro</li><li>Synchro Alex (Genghis + Lamia)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro formula (Lamia + Keplar) => Synchro Siegfried (Formula + Genghis)</li><li>Destroy Gate via SS Lamia (Grave) => Synchro Crystal (Alex + Lamia)</li></ol><b>Final (Crystal + Siegfried + Copper + 1 Draw)</b></p>",
    "lamiaB": "<p><h2>B. Lamia, Keplar, Ragnarok</h2><ol><li>NS Keplar => Search Gate Via Keplar => Search Swirl via Gate</li><li>Fusion Genghis (Swirl + Ragnarok)</li><li>SS Lamia via Swirl (Grave) => SS Ragnarok (Grave) Via Genghis</li><li>Synchro Formula (Lamia + Keplar) => Synchro Omega (Genghis + Formula)</li></ol><b>Final (Omega + Ragnarok + 1 Draw + Gate)</b></p>",
    "lamiaC": "<p><h2>C. Lamia, Keplar, Gate</h2><ol><li>Search Swirl Via Gate</li><li>Fusion Genghis (Keplar + Swirl)</li><li>SS Lamia via Swirl (Grave) => SS Keplar (Grave) Via Genghis => Search Swamp Via Keplar</li><li>Synchro Alex (Genghis + Lamia)</li><li>Fusion d'Arc Via Swamp (Keplar [Field] + Genghis [Grave]) => SS Lamia (Grave) Via Alex</li><li>Sycnrho Crystal (Lamia + Alex) => Destroy Swamp Via SS Lamia (Grave) => Synchro Siegfried (d'ARc + Lamia)</li></ol><b>Final (Crystal Wing + Siegfried + Gate)</b></p>",
    "lamiaD": "<p><h2>D. Lamia, Copper, Ragnarok</h2><ol><li>NS Copper => Mill Necro</li><li>Destroy Ragnarok (Hand) Via SS Lamia (Hand)</li><li>Fusion d'Arc (Necro in Grave + Ragnarok in Grave)</li><li>Synchro Omega (Lamia + d'Arc)</li></ol><b>Final (Copper [ATK] + Omega)</b></p>",
    "lamiaE": "<p><h2>E. Lamia, Copper, Gate</h2><ol><li>Search Swirl via Gate</li><li>Fusion Genghis (Copper + Swirl)</li><li>SS Lamia via Swirl (Grave) => SS Copper (Grave) Via Genghis => Mill Necro</li><li>Synchro Alex (Lamia + Genghis)</li><li>Fusion d'Arc (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro Crystal (Alex + Lamia) => Destroy Gate via SS Lamia =>  Synchro Sieg (Lamia + d'Arc)</li></ol><b>Final (Sieg + Crystal + Copper)</b></p>",
    "lamiaF": "<p><h2>F. Lamia, Ragnarok, Gate</h2><ol><li>Search Swirl via Gate</li><li>Pend Zone Ragnarok</li><li>Fusion Genghis (Lamia + Swirl) => SS Swirl (Grave) Via Ragnarok => SS Lamia (Grave) Via Genghis</li><li>Synchro Alex (Genghis + Lamia) => Destroy Swirl Via SS Lamia (Grave) => SS Swirl (Grave) Via Alex</li><li>Sycnrho Siegfried (Alex + Lamia)</li></ol><b>Final (Ragnarok [Pend Zone] + Siegfried + Gate + Swirl)</b></p>"
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
    "swirlO": [swirl, ragna, gate],
    "necroA": [necro, lamia, kepler],
    "necroB": [necro, lamia, coper],
    "necroC": [necro, kepler, coper],
    "necroD": [necro, kepler, ragna],
    "necroE": [necro, kepler, gate],
    "necroF": [necro, coper, gate],
    "necroG": [swirl, ragna, gate],
    "lamiaA": [lamia, kepler, coper],
    "lamiaB": [lamia, kepler, ragna],
    "lamiaC": [lamia, kepler, gate],
    "lamiaD": [lamia, coper, ragna],
    "lamiaE": [lamia, coper, gate],
    "lamiaF": [lamia, ragna, gate]
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
