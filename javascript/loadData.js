$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "pubData.xml",
		datatype: "xml",
		success: xmlParseData
	});
});

function xmlParseData(xml){
	
	var html_data = '';
	var html_sub_data = '';
	var html_sub2_data = '';
	
	html_data += '<div class="p_tab"><h2>Publication</h2><hr><table class="pub_table"><tbody>';
	
	$(xml).find("paper").each(function(){
		
		var image_data = $(this).find("image").text();
		var title_data = $(this).find("title").text();
		var author_data = $(this).find("author").text();
		var publisher_data = $(this).find("publisher").text();
		
		html_data += '<tr><td class="pub_td1"><div class="teaser_img_div">';
		html_data += '<img class="teaser_img" src="images/papers/' + image_data +  '" ';
		html_data += 'alt="images/papers/empty-img.png"></div></td><td class="pub_td2">';
		html_data += title_data + '<br>';
		html_data += author_data + '<br><i>';
		html_data += publisher_data + '</i>.<br>';
		html_data += '</td></tr>';
	});
	
	html_data += '</tbody></table></div>'
	
		
	$('#loader').fadeOut();
	$("#tab_list").append(html_data);
	$('.p_tab').fadeIn(1000);
}