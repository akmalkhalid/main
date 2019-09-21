$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "p_data.xml",
		datatype: "xml",
		success: function(xmlData){

			var count = 0;
			$("paper", xmlData).each(function(){
					count += 1;
			});

			$(".filter-count").append(count);
			//$('.pub_list').fadeIn(1000);
		}

	});
});
