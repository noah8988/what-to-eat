
// item selection
$('.option').click(function () {
  $(this).toggleClass('selected');
  if ($('.option.selected').length == 0)
    $('.select').removeClass('selected');
  else
    $('.select').addClass('selected');
  counter();
  return False;
});

// all item selection
$('.select').click(function () {
  console.log($('.option.selected').length)
  if ($('.option.selected').length == 0) {
    $('.option').addClass('selected');
    $('.select').addClass('selected');
    console.log("select all//unselect btn pressed and no item selected.")
  } else {
    $('.option').removeClass('selected');
    $('.select').removeClass('selected');
    console.log("select all//unselect btn pressed and at least 1 item was selected.")
  }
  counter();
  return False;
});

// number of selected items
function counter() {
  if ($('.option, .selected').length > 0)
    $('.send').addClass('selected');
  else
    $('.send').removeClass('selected');
  $('.send').attr('data-counter',$('.option.selected').length);
}
