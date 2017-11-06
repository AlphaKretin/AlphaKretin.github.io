var sql = window.SQL;
var loaded = false;
//open database
var xhr = new XMLHttpRequest();
xhr.open('GET', '../images/cards.cdb', true);
xhr.responseType = 'arraybuffer';

var contents;
var names;
var ids = [];

xhr.onload = function(e) {
  var uInt8Array = new Uint8Array(this.response);
  var db = new SQL.Database(uInt8Array);
  contents = db.exec("SELECT * FROM datas");
  names = db.exec("SELECT * FROM texts");
  for (var card of contents[0]["values"]) {
	  ids.push(card[0]);
  }
  loaded = true;
  // contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
};
xhr.send();

function convert() {
	if (!loaded) {
		alert("Card database still loading, please wait a few seconds and try again.");
		return;
	}
	var rand = ids[Math.floor(Math.random() * ids.length)];
	var index = ids.indexOf(rand);
	var out = "<h1>" + names[0]["values"][index][1] + "</h1>";
	out += rand + "<br/>";
	out += names[0]["values"][index][2];
	document.getElementById("output").innerHTML = out;
}
