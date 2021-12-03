$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "p_data.xml",
		datatype: "xml",
		success: function(xmlData){

			var html_data = '';
			var count = 0;
			$("paper", xmlData).each(function(){

					var year_data = $(this).find("year").text();
					var image_data = $(this).find("image").text();
					var title_data = $(this).find("title").text();
					var author_data = $(this).find("author").text();
					var publisher_data = $(this).find("publisher").text();
					var link_data = $(this).find("link").text();

          if (year_data.indexOf('2022') > -1 && count != 5) {

            html_data += '<a href="' + link_data + '" target="_blank"><div class="each">';
  					html_data += '<div class=" gatsby-image-wrapper" style="position: relative; overflow: hidden; display: inline-block; width: 150px; height: 150px;">';
  					html_data += '<picture><img src="images/papers/' + image_data + '" alt="' + image_data + '" ';
  					html_data += 'loading="lazy" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1; transition: none 0s ease 0s;" width="150" height="150">';
  					html_data += '</picture></div>';
  					html_data += '<div class="each-list-item"><h2>' + title_data + '</h2><div class="excerpt">' + author_data + '<br> (' + publisher_data + ')</div></div></div></a>';
          count++;
	  }
			});

			$(".posts.simple").append(html_data);
			//$('.pub_list').fadeIn(1000);
		}

	});
});
