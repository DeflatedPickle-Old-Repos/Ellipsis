if (window.File && window.FileReader && window.FileList && window.Blob) {
	// Everything's good!
} else {
  alert("Your browser does not fully support the File APIs.");
}