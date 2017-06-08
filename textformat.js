function format(text){
	var lines = text.split("\n");
	lines[0] = "<p><h2>" + lines[0] + "</h2><ol>";
	var i;
	for (i = 1; i < lines.length - 1; i++) {
		lines[i] = "<li>" + lines[i].slice(5) + "</li>";
	}
	lines[lines.length - 1] = "</ol><b>" + lines[lines.length - 1] + "</b></p>";
	var out = "";
	for (var line of lines){
		out += line;
	}
	console.log(out);
}

console.log("loaded");