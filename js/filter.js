$(document).ready(function() {

  /** Search Box **/
  $(".search").on("keyup", function() {
    $('.category-filter').removeClass('active');
    $('.category-container #all').addClass('active');

    var value = $(this).val().toLowerCase();
    $(".posts a").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


  var $btns = $('.category-filter').click(function() {

    $(".search").val('');

    if (this.id == 'all') {
      $('.posts > a').fadeIn(450);
    } else {
      var $el = $('.' + this.id).fadeIn(450);
      $('.posts > a').not($el).hide();
    }

    $btns.removeClass('active');
    $(this).addClass('active');
  });


});
