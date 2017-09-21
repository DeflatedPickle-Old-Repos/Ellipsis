function handleFilesSelected(argument) {
	var files = argument.target.files
}

function handleFilesDropped(argument) {
	argument.stopPropagation()
	argument.preventDefault()

	var files = argument.dataTransfer.files
}

function handleFilesDragged(argument) {
	argument.stopPropagation()
	argument.preventDefault()

	argument.dataTransfer.dropEffect = "copy"
}