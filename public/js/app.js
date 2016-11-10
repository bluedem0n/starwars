/*document.getElementById("boton").addEventListener("click", function () {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange =
		function () {

		};
	var callback = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.getElementById("ajax").innerHTML = xhr.responseText;
		}
	};

	xhr.addEventListener('readystatechange', callback);
	var url = "http://localhost:8080/demo.html"
	xhr.open("GET", url);
	xhr.send();
});*/