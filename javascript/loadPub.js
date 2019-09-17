function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      PublicationParseData(this);
    }
  };
  
  xmlhttp.open("GET", "data/pubData.xml", true);
  xmlhttp.send();
}

function PublicationParseData(xml){
	
	var i;
	var xmlDoc = xml.responseXML;
	var html_data = '';
	
	//var elem = document.getElementById("loader");
	//elem.parentElement.removeChild(elem);
	
	var x = xmlDoc.getElementsByTagName("paper");
	
	for (i = 0; i < x.length; i++) { 
		
		var image_data = x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
		var title_data = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
		var author_data = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
		var publisher_data = x[i].getElementsByTagName("publisher")[0].childNodes[0].nodeValue;
		var year_data = x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue;
			
		html_data += '<tr><td class="pub_td1"><div class="teaser_img_div">';
		html_data += '<img class="teaser_img" src="images/papers/' + image_data +  '" ';
		html_data += 'alt="images/papers/empty-img.png"></div></td><td class="pub_td2">';
		html_data += title_data + '<br>';
		html_data += author_data + '<br><i>';
		html_data += publisher_data + ' (' + year_data +')</i>.<br>';
		html_data += '</td></tr>';
	}
	
	document.getElementById("p_tab").innerHTML = html_data;
}