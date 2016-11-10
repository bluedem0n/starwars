var template = '<div class="row">' + '<div class="col-sm-12 col-md-12">' +
	'<div class="thumbnail">' +
	'<div class="caption">' +
	'<h3> Hi, my name is __name__</h3>' +
	'<p><a data-show-url="__url__" class="about btn btn-primary" role="button">Ver más</a><a href="#" class="btn btn-default" role="button">Button</a></p>' +

	'</div>' +
	'</div>' +
	'</div>' + '</div>';

$(document).ready(function () {

	var formatResponse = function (response) {
		$("#total").text(response.results.length);
		var personajes = "";
		$.each(response.results, function (i, personaje) {
			personajes += template
				.replace("__name__", personaje.name)
				.replace("__url__", personaje.url);

		});
		$("#people").html(personajes);
		$("#next").attr("data-url", response.next);
		$("#previous").attr("data-url",response.previous);

		if (!response.next) {
			$("#next").fadeOut();
		}else{
			$("#next").fadeIn();
		}
		if(!response.previous){
			$("#previous").fadeOut();
		}else{
			$("#previous").fadeIn();
		}
	};

	$.getJSON("http://swapi.co/api/people/", formatResponse);

	$("#next").click(function (e) {
		e.preventDefault();
		var url = $(this).attr("data-url");
		$.getJSON(url, formatResponse);
	});
	$("#previous").click(function(e){
		e.preventDefault();
		var url = $(this).attr("data-url");
		$.getJSON(url, formatResponse);
	});
	$("#people").on("click",".about",function(e){
		e.preventDefault();
		alert("Hola");
	});
});