function selectLine(text){
	var lines = text.split("\n");
	document.getElementById("output").innerHTML = lines[getRandomIntInclusive(0,lines.length - 1)];
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

console.log("loaded 12/9 11:15");
