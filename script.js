$('[lang="text-en"]').hide();
$('[lang="text-hu"]').hide();

$("#lang-ru").on('click', function() {
  $('[lang="text-ru"]').show();
  $('[lang="text-en"]').hide();
  $('[lang="text-hu"]').hide();
});

$("#lang-en").on('click', function() {
    $('[lang="text-ru"]').hide();
    $('[lang="text-en"]').show();
    $('[lang="text-hu"]').hide();
});
$("#lang-hu").on('click', function() {
    $('[lang="text-ru"]').hide();
    $('[lang="text-en"]').hide();
    $('[lang="text-hu"]').show();
});

$(".menu-element__link").click(function() {
  const thisElement = $(this);

  if (thisElement.hasClass('active')) {
      return;
  }

  const linkHref = thisElement.attr("href");
  const hrefElement = $(linkHref);

  const paddingTop = parseInt(hrefElement.css("padding-top"));
  const menuHeight = $(".header-top").height();

  $([document.documentElement, document.body]).animate({
      scrollTop: hrefElement.offset().top - paddingTop - menuHeight
  }, 1500);

  $(".menu-element__link.active").removeClass('active');
  thisElement.addClass('active');
});

const swiper = new Swiper('.achievements-list', {
  loop: true,
  
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  effect: 'slide',


  autoplay: {
      Delay: 2500,
      disableOnInteraction: false,
  },

  breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
  }
});

/*Image opening on the site as a galery*/

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

