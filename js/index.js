var doc = $('html, body');

$('a').click(function () {
  doc.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  return false;
});

$('#hmenu').click(function () {
  var menu = $('#nav-menu');
  if (menu.is(":hidden")) {
    menu.show();
  } else {
    menu.hide();
  }
});

$('header nav a').click(function () {
  if ($(window).width() <= 540) {
    $('#nav-menu').hide();
  }
});

$(document).ready(function() {
  $(window).trigger('resize');
});

$(window).resize(function() {
  if ($(window).width() <= 540) {
    $('#nav-menu').hide();
    $('#hmenu').show();
  } else {
    $('#hmenu').hide();
    $('#nav-menu').show();
  }
});
