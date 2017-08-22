function format(text){
	var lines = text.split("\n");
	var name = lines[lines.length - 1];
	var name2 = "\"" + name + "\"";
	lines[0] = "<p><h2>" + lines[0] + "</h2>";
	lines[1] = "<h3>" + lines[1] + "</h3><input type='button' value='Show' onclick='unhide(" + name2 + ")' id='" + name + "' /><ol>";
	var i;
	for (i = 2; i < lines.length - 2; i++) {
		lines[i] = "<li>" + lines[i].slice(5) + "</li>";
	}
	lines[lines.length - 2] = "</ol><b>" + lines[lines.length - 2].slice(2) + "</b></p>";
	var out = "";
	for (var line of lines){
		if (line !== lines[lines.length - 1]){
			out += line;
		}
	}
	console.log(out);
}

console.log("loaded 10.7am");
