var xmlHttp = new XMLHttpRequest();
var numberOfColumns = 4;
var htmlCode = "";
var response;
$(document).ready(function() {
	var send = "thehook.php";
	xmlHttp.open("GET", send, true);
	xmlHttp.send(null);
	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState == 4) {
			alert(xmlHttp.responseText);
			response = xmlHttp.responseText.split("~");
			htmlCode += '<tr>';
			for (var i=0;i<response.length;i++) {
				htmlCode +='<a href="assets/images/gallery'+ response[i] +' ">';
				htmlCode +='<img class="card-img-top img-thumbnail" src="assets/images/gallery' + response[i] +'"/>';
				htmlCode +='</a>';
			}
			document.getElementById('gallery_coke').innerHTML = htmlCode;
			document.getElementById('gallery_sprite').innerHTML = htmlCode;
			document.getElementById('gallery_pepper').innerHTML = htmlCode;
		}
	}
});