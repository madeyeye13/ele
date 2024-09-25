// Preloader
$("#preloader").fadeOut(700);
$(".preloader-bg").delay(700).fadeOut(700);
var wind = $(window);


///////////NAV BAR

$(document).ready(function () {
  const wind = $(window);

  // Navbar dropdown toggle for mobile
  $('.menu-icon').on('click', function () {
      $('.nav-menu').toggleClass('open');
  });

  // Navbar scrolling background
  wind.on("scroll", function () {
      var bodyScroll = wind.scrollTop();

      if (bodyScroll > 100) {
          $(".navbar").css("background", "black");
      } else {
          $(".navbar").css("background", "transparent");
      }
  });
});



///////////////HERO SECTION


document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
      const previousSlide = slides[currentSlide];
      const nextSlide = slides[index];

      // Prepare the next slide
      nextSlide.style.opacity = '';
      nextSlide.classList.add('active', 'sliding-down');
      previousSlide.classList.add('previous');

      // Start the transition
      setTimeout(() => {
          nextSlide.style.opacity = '1';
          previousSlide.style.opacity = '0';
      }, 50);

      // Clean up after transition
      setTimeout(() => {
          previousSlide.classList.remove('active', 'previous');
          nextSlide.classList.remove('sliding-down');

          // Trigger content animations after slide transition
          const content = nextSlide.querySelector('.content');
          content.style.opacity = '1'; // Ensure content opacity is set to 1
          
          // Resetting the content visibility for animations
          const h1 = content.querySelector('h1');
          const p = content.querySelector('p');
          const button = content.querySelector('.cta-button');

          // Reset classes to allow for re-animation
          h1.classList.remove('fade-up');
          p.classList.remove('fade-in');
          button.classList.remove('zoom-in');

          // Trigger fade-in effect
          h1.classList.add('fade-up');
          setTimeout(() => p.classList.add('fade-in'), 200);
          setTimeout(() => button.classList.add('zoom-in'), 400);
      }, 750);

      currentSlide = index;
  }

  function nextSlide() {
      const nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
  }

  setInterval(nextSlide, 7000); // Change slide every 7 seconds

  // Reset animations when slide changes
  slides.forEach(slide => {
      slide.addEventListener('transitionend', function(e) {
          if (e.propertyName === 'opacity' && !this.classList.contains('active')) {
              const content = this.querySelector('.content');
              const h1 = content.querySelector('h1');
              const p = content.querySelector('p');
              const button = content.querySelector('.cta-button');

              // Reset classes to allow for re-animation
              h1.classList.remove('fade-up');
              p.classList.remove('fade-in');
              button.classList.remove('zoom-in');
          }
      });
  });
});

  