function handleFilesSelected(argument) {
	var files = argument.target.files
	var read = new FileReader()

	for (var i = 0, numFiles = files.length; i < numFiles; i++) {
  		var file = files[i]
  		read.readAsBinaryString(file)

  		read.onloadend = function() {
  			document.getElementById("text").innerHTML = read.result
  		}
	}
}

function handleFilesDropped(argument) {
	argument.stopPropagation()
	argument.preventDefault()

	var files = argument.dataTransfer.files
	var read = new FileReader()

	for (var i = 0, numFiles = files.length; i < numFiles; i++) {
  		var file = files[i]
  		read.readAsBinaryString(file)

  		read.onloadend = function() {
  			document.getElementById("text").innerHTML = read.result
  		}
	}
}

function handleFilesDragged(argument) {
	argument.stopPropagation()
	argument.preventDefault()

	argument.dataTransfer.dropEffect = "copy"
}