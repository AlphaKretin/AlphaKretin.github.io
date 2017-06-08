const guides = {
	"swirlA": "<p><h2>A. Swirl, Necro, Lamia</h2><ol><li>Fusion Genghis (Necro + Swirl)</li><li>NS Lamia</li><li>Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro Siegfried (Lamia + Alexander) => SS Alexander(Grave) Via Genghis </li><li>Destroy Genghis to SS Lamia (Grave)</li><li>Synchro Crystal Wing (Lamia + Alexander)</li></ol><b>Final. (Siegfried + Crystal Wing)</b></p>",
	"swirlB": "<p><h2>B. Swirl, Necro, Keplar</h2><ol><li>NS Keplar Search Gate => Search Lamia via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>SS Lamia Via Swirl (Grave)</li><li>Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Crystal Wing (Lamia + Alexander)</li><li>Destroy Gate to SS Lamia (Grave) => SS Alexander (Grave) via Genghis</li><li>Synchro Formula (Keplar + Lamia) => Synchro Siegfried (Genghis + Formula)</li></ol><b>Final (Crystal Wing + Alexander + Siegfried)</b></p>",
	"swirlC": "<p><h2>C. Swirl, Necro, Copper</h2><ol><li>Fusion Genghis (Necro + Swirl)</li><li>NS Copper => Mill Keplar</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => ss Keplar (Grave) via Genghis => Search Swamp Via Keplar</li><li>Fusion d'Arc via Swamp (Copper + Keplar in Field)</li><li>Xyz Beatrice (2 Genghis) => Mill Lamia (Via Detach Genghis)</li><li>Destroy Swamp to SS Lamia (Grave) => Synchro Omega (Lamia + d'Arc)</li></ol><b>Final (Omega + Beatrice)</b></p>",
	"swirlD": "<p><h2>D. Swirl, Necro, Ragnarok</h2><ol><li>Fusion Genghis (Necro + Swirl)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => Xyz Beatrice (2 Genghis) => Mill Swirl (Via Detach Genghis)</li><li>SS Ragnarok via Swirl (Grave) => SS Genghis (Grave) via Ragnarok</li></ol><b>Final (Beatrice + Genghis + Ragnarok)</b></p>",
	"swirlE": "<p><h2>E. Swirl, Lamia, Gate</h2><ol><li>Search Necro via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>NS Lamia => Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Siegfried (Lamia + Alexander) => SS Alexander (Grave) via Genghis</li><li>Destroy Gate to SS Lamia (Grave) => Synchro Crystal (Lamia + Alexander)</li></ol><b>Final (Genghis + Siegfried + Crystal)</b></p>"
};
const swirl = "D/D Swirl Slime";
const necro = "D/D Necro Slime";
const lamia = "D/D Lamia";
const kepler = "D/D Savant Kepler";
const coper = "D/D Savant Copernicus";
const ragna = "D/D/D Oblivion King Abyss Ragnarok";
const gate = "Dark Contract With The Gate";
const c1 = document.getElementById("card1");
const c2 = document.getElementById("card2");
const c3 = document.getElementById("card3");
const c4 = document.getElementById("card4");
const c5 = document.getElementById("card5");
const output = document.getElementById("out");
c1.addEventListener("change", function() { search(); });
c2.addEventListener("change", function() { search(); });
c3.addEventListener("change", function() { search(); });
c4.addEventListener("change", function() { search(); });
c5.addEventListener("change", function() { search(); });
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
	if (hand.includes(swirl) && hand.includes(necro) && hand.includes(lamia)){
		combos.push("swirlA");
	}
	if (hand.includes(swirl) && hand.includes(necro) && hand.includes(kepler)){
		combos.push("swirlB");
	}
	if (hand.includes(swirl) && hand.includes(necro) && hand.includes(coper)){
		combos.push("swirlC");
	}
	if (hand.includes(swirl) && hand.includes(necro) && hand.includes(ragna)){
		combos.push("swirlD");
	}
	if (hand.includes(swirl) && hand.includes(lamia) && hand.includes(gate)){
		combos.push("swirlE");
	}
	for (var com of combos){
		out += guides[com];
	}
	if (out.length === 0){
		out = "No combos found! Try again with another hand.";
	}
	output.innerHTML = out;
}