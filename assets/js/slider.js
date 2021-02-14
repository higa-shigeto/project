/* スライドショー */
$('#nav_btn .next').click(function(){
  $('#slide:not(:animated)').animate({
    'margin-left' : -1*$('#slider li').width()
  },function(){
    $('#slide').append($('#slider li:first-child'));
    $('#slide').css('margin-left','0');
  });
});

$('#nav_btn .prev').click(function(){
  $('#slide:not(:animated)').prepend($('#slide li:last-child'))
  .css('margin-left', -1*$('#slider li').width())
  .animate({
    'margin-left' : 0
  });
});
