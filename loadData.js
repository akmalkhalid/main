$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "pubData.xml",
		datatype: "xml",
		success: function(xmlData){

			var html_data = '<h2>Publication</h2><hr><table class="pub_table">';

			$("paper", xmlData).each(function(){

				var image_data = $(this).find("image").text();
				var title_data = $(this).find("title").text();
				var author_data = $(this).find("author").text();
				var publisher_data = $(this).find("publisher").text();
				var year_data = $(this).find("year").text();
				var link_data = $(this).find("link").text();

				html_data += '<tr><td class="pub_td1"><div class="teaser_img_div">';
				html_data += '<img class="teaser_img" src="images/papers/' + image_data;
				html_data += '"></div></td><td class="pub_td2">';
				html_data += title_data + '<br>';
				html_data += author_data + '<br><i>';
				html_data += publisher_data + '</i> ('+ year_data +').<br>';
				html_data += '[<a href="' + link_data + '">Link</a>]<br>';
				html_data += '</td></tr>';
			});

			html_data += '</table>';
			$('#loader').fadeOut();
			$("#p_tab").append(html_data);
			$('.pub_table').fadeIn(1000);
		}

	});
});
