var getPage = function (url, callback) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var txt = xhr.responseText;
			txt = txt.split('<body>')[1].split('</body>')[0];
			var tag = url.split('#')[1];
			callback(txt, tag);
		}
	}

	xhr.open("GET", url, false );
	xhr.send();
}

var renderPage = function(url) {
	getPage(url, function (innerhtml, tag) {
		document.querySelector('#contentfield').innerHTML = innerhtml;
		if (tag) {
			var sel = "[name=\'" + tag + "\']";
			var t = $(sel).offset().top;
			$(window).scrollTop(t);
		}
	})
}

var chooseBlock = function (e) {
	e.preventDefault();
	if(this.href === this.baseURI)
	  return;
	renderPage(this.href);
}

renderPage("./homepage.html");

/*function dropdownOpen() {

		var $dropdownLi = $('li.dropdown');

		$dropdownLi.mouseover(function() {
				$(this).addClass('open');
		}).mouseout(function() {
				$(this).removeClass('open');
		});
}*/

$(document).ready(function(){
	//$(document).off('click.bs.dropdown.data-api');
	//dropdownOpen();

	var els = document.querySelectorAll('#urlrouter a');

	for (var i = 0; i < els.length; i++) {
		var el = els[i];

		el.addEventListener('click', chooseBlock);
	}
});
