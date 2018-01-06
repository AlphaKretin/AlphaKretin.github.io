var inBox = document.getElementById("inputArea");
var outBox = document.getElementById("outputArea");

function convert() {
	var input = inBox.value;
	var lines = input.split("\n")
	var outLines = [];
	for (var line of lines) {
		var arr = line.split(":");
		if (arr.length > 1) {
			line = arr[1].trim() + ": " + arr[0].trim()
		}
		outLines.push(line);
	}
	var output = "";
	for (var outLine of outLines) {
		output += outLine + "\n";
	}
	outBox.value = output;
}
