var sql = window.SQL;
var loaded = false;
//open database
var xhr = new XMLHttpRequest();
xhr.open('GET', '../images/cards.cdb', true);
xhr.responseType = 'arraybuffer';

var contents;

xhr.onload = function(e) {
  var uInt8Array = new Uint8Array(this.response);
  var db = new SQL.Database(uInt8Array);
  contents = db.exec("SELECT * FROM texts");
  loaded = true;
  // contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
};
xhr.send();

var inBox = document.getElementById("inputArea");
var outBox = document.getElementById("outputArea");

function convert() {
	if (!loaded) {
		alert("Card database still loading, please wait a few seconds and try again.");
		return;
	}
	var input = inBox.value;
	var lines = input.split("\n")
	var outLines = [];
	for (var line of lines) {
		var idIndex = idCheck(line);
		var nameIndex = nameCheck(line);
		if (idIndex > -1) { //line is an ID
			outLines.push(contents[0]["values"][idIndex][1]);
		} else if (nameIndex > -1){ //line is a card name
			outLines.push(contents[0]["values"][nameIndex][0]);
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

function idCheck(line) {
	var index = -1;
	for (var i = 0; i < contents[0]["values"].length; i++) {
		if (contents[0]["values"][i][0].toString() === line) {
			index = i;
		} 
	}
	return index;
}

function nameCheck(line) {
	var index = -1;
	for (var i = 0; i < contents[0]["values"].length; i++) {
		if (contents[0]["values"][i][1].toLowerCase() === line.toLowerCase()) {
			index = i;
		} 
	}
	return index;
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
