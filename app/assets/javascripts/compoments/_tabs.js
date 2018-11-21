$(document).ready(function() {
  // Init du tab
  $('.category-todo').hide();
  $('.tab-link:first').addClass('active');
  $(".category-todo:first").fadeIn();

  // Activation du tab
  $('.tab-link').on('click',function(e) {
    e.preventDefault();
    $('.active').removeClass('active');
    $('.category-todo').hide();
    $(this).addClass('active');
    $("#category-todo-"+e.target.id).fadeIn();
  })
})
