$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "p_data.xml",
		datatype: "xml",
		success: function(xmlData){

			var html_data = '';
			$("paper", xmlData).each(function(){

					var year_data = $(this).find("year").text();
					var type_data = $(this).find("type").text();
					var title_data = $(this).find("title").text();
					var author_data = $(this).find("author").text();
					var publisher_data = $(this).find("publisher").text();
					var link_data = $(this).find("link").text();

					html_data += '<a class="' + year_data + '" id="' + type_data + '" href="' + link_data + '" target="_blank">';
					html_data += '<div class="each">';
					html_data += '<div class="each-list-item"><h2>' + title_data + '</h2><div class="excerpt">' + author_data + '<br> (' + type_data + ' -- ' + publisher_data + ')</div></div>';
					html_data += '<div class="alert"><div class="popular">' + year_data + '</div></div></div></a>';
			});

			$(".posts").append(html_data);
			//$('.pub_list').fadeIn(1000);
		}

	});
});
