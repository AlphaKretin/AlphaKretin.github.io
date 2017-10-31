var sql = window.SQL;

//open database
var xhr = new XMLHttpRequest();
xhr.open('GET', '../images/cards.cdb', true);
xhr.responseType = 'arraybuffer';

xhr.onload = function(e) {
  var uInt8Array = new Uint8Array(this.response);
  var db = new SQL.Database(uInt8Array);
  var contents = db.exec("SELECT * FROM texts");
  // contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
};
xhr.send();

var inBox = document.getElementById("inputArea");
var outBox = document.getElementById("outputArea");

function convert() {
	var input = inBox.value;
	var lines = input.split("\n")
	var outLines = [];
	for (var line of lines) {
		var idIndex = contents[values][0].indexOf(line);
		var nameIndex = lowerArray(contents[values][1]).indexOf(line.toLowerCase());
		if (idIndex > -1) { //line is an ID
			outLines.push(contents[values][1][idIndex]);
		} else if (nameIndex > -1){ //line is a card name
			outLines.push(contents[values][0][nameIndex]);
		} else { //line is not a card
			outLines.push(line);
		}
	}
	var output = "";
	for (var outLine of outLines) {
		output += outLine + "\n";
	}
	outBox.value = output;
}

function lowerArray(arr) {
	var newArr = [];
	for (var entry of arr) {
		if (typeof entry === "string") {
			newArr.push(entry.toLowerCase());
		} else {
			newArr.push(entry);
		}
	}
	return newArr;
}
