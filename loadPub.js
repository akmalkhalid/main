$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "p_data.xml",
		datatype: "xml",
		success: function(xmlData){

			var html_main_data = '<h2>Publication</h2><table class="pub_table"><tbody>';
			var html_sub_data = '';

			$("year", xmlData).each(function(i, el){

				var year_data = $(this).find("number").text();

				html_sub_data += '<tr><td class="year_heading">' + year_data + '<hr></td></tr>';

				$("paper", this).each(function(){

					var image_data = $(this).find("image").text();
					var title_data = $(this).find("title").text();
					var author_data = $(this).find("author").text();
					var publisher_data = $(this).find("publisher").text();
					var link_data = $(this).find("link").text();

					html_sub_data += '<tr><td class="pub_td1"><div class="teaser_img_div">';
					html_sub_data += '<img class="teaser_img" src="images/papers/' + image_data;
					html_sub_data += '"></div></td><td class="pub_td2">';
					html_sub_data += title_data + '<br>';
					html_sub_data += author_data + '<br><i>';
					html_sub_data += publisher_data + '</i>.<br>';
					html_sub_data += '[<a href="' + link_data + '">Link</a>]<br>';
					html_sub_data += '</td></tr>';
				});
			});

			html_main_data += html_sub_data + '</tbody></table>';
			$('#loader').fadeOut();
			$("#p_tab").append(html_main_data);
			$('.pub_table').fadeIn(1000);
		}
	});
});
