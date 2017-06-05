$(() => {

  var imgList = $("#cont-img ul"),
      selector = $('.pointers i'),
      imgView = 0;

  setInterval(nextImg, 5000);
  $(".siguiente").on('click', function () {
    nextImg();
  });

  $(".anterior").on('click', function () {
    previousImg();
  });

  function nextImg() {
    imgView += 1;
    imgList.animate({'marginLeft': -800}, 500, firstSlide);
    moveSelector(true);
  }

  function previousImg() {
    imgView -= 1;
    firstImg().before(lastImg());
    imgList.css({marginLeft: -800});
    imgList.animate({'marginLeft': 0}, 500);
    moveSelector(false);
  }

  function firstImg() {
    return imgList.find('li:first');
  }

  function lastImg() {
    return imgList.find('li:last');
  }

  function firstSlide() {
    lastImg().after(firstImg());
    imgList.css({'marginLeft': 0});
  }

  function moveSelector(direction) {
      var active = $('.pointers .fa-circle'),
          arrow,
          status;
      if (direction) {
          arrow = active.nextImg();
      } else {
          arrow = active.previousImg();
      }
      if (direction) {
          status = "first";
      } else {
          status = "last";
      }
      if (arrow.length === 0) {
          arrow = $('.pointers i')[status]();
      }
      active.addClass('fa-circle').removeClass('fa-circle-o');
      active.removeClass('fa-circle').addClass('fa-circle-o');
  }

  selector.on('click', function () {
      var cambiar = parseInt($(this).attr('data-img-to')),
          step = cambiar - imgView,
          i;

      if (step === 0) {
          return false;
      } else if (step > 0) {
          for (i = 0; i < step; i += 1) {
            imgView += 1;
            imgList.animate({
                'marginLeft': -800
            }, 0, firstSlide);
            moveSelector(true);
          }
      } else {
          for (i = 0; i < Math.abs(step); i += 1) {
              previousImg(0);
          }
      }
  });

});
