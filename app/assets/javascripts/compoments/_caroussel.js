$(document).ready(function() {

  // Init du caroussel
  var $carousel = $('#carousel'),
    $img = $('#carousel img'),
    indexImg = $img.length - 1,
    i = 0,
    $currentImg = $img.eq(i);

  $img.css('display', 'none');
  $currentImg.css('display', 'block');

  // Bouton précédent
  $('.prev').click(function() {
    i--;
    if (i >= 0) {
      $img.css('display', 'none');
      $currentImg = $img.eq(i);
      $currentImg.css('display', 'block');
    } else {
      i = 0;
    }
  });

  // Bouton suivant
  $('.next').click(function() {
    i++;
    if (i <= indexImg) {
      $img.css('display', 'none');
      $currentImg = $img.eq(i);
      $currentImg.css('display', 'block');
    } else {
      i = indexImg;
    }
  });

  // Tempo de 5s
  function slideImg() {
    setTimeout(function() {
      if (i < indexImg) {
        i++;
      } else {
        i = 0;
      }
      $img.css('display', 'none');

      $currentImg = $img.eq(i);
      $currentImg.css('display', 'block');

      slideImg();
    }, 5000);
  }
  slideImg();
});
