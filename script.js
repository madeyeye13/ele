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
  
    // Highlight the current active page
    const path = window.location.pathname;
    const page = path.split("/").pop();
  
    $('.nav-link').each(function () {
        const href = $(this).attr('href');
  
        if (href === page || (page === '' && href === 'index.html')) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
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


////CONTROL FOR CHANGING IMAGE LEFT AND RIGHT

const photoContainer = document.querySelector('.photo2');
const rightArrow = document.getElementById('right-arrow');
const leftArrow = document.getElementById('left-arrow');

const imageWidth = photoContainer.querySelector('img').clientWidth + 10;

rightArrow.addEventListener('click', () => {
    photoContainer.scrollBy({
        left: imageWidth,
        behavior: 'smooth'
    });
});

leftArrow.addEventListener('click', () => {
    photoContainer.scrollBy({
        left: -imageWidth,
        behavior: 'smooth'
    });
});
  

/////////EXPERIENCE

document.addEventListener('DOMContentLoaded', function() {
    const clientCount = document.getElementById('client-count');
    const satisfactionCount = document.getElementById('satisfaction-count');
    const satisfy = document.getElementById('satisfaction-coun');
    const clientTarget = 12;
    const satisfactionTarget = 420;
    const satisfyTarget = 100;
    let hasAnimated = false;

    function animateCount(element, target, suffix = '') {
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 60);

        function updateCount() {
            count += increment;
            if (count > target) count = target;
            element.textContent = Math.floor(count) + suffix;
            if (count < target) {
                requestAnimationFrame(updateCount);
            }
        }

        requestAnimationFrame(updateCount);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCount(clientCount, clientTarget, '+');
                animateCount(satisfactionCount, satisfactionTarget, '+');
                animateCount(satisfy, satisfyTarget, '%');
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the section is in view
    });

    observer.observe(document.getElementById('satis'));
});



// JAVASCRIPT FOR TESTIMONIAL

const testimonialWrapper = document.querySelector('.testimonial-wrapper');
let testimonials = document.querySelectorAll('.box');
let index = 0;
let totalTestimonials = testimonials.length;

function getBoxWidth() {
    return window.innerWidth >= 1024 ? 50 : 100;
}

// Clone the first two testimonials and append them to the end for screens 728px and above
if (window.innerWidth >= 728) {
    testimonialWrapper.appendChild(testimonials[0].cloneNode(true));
    testimonialWrapper.appendChild(testimonials[1].cloneNode(true));
    // Re-query the testimonials to include the newly added clones
    testimonials = document.querySelectorAll('.box');
    totalTestimonials = testimonials.length;
}

// Clone the first two testimonials and append them to the end again for screens 1024px and above
if (window.innerWidth >= 1024) {
    testimonialWrapper.appendChild(testimonials[0].cloneNode(true));
    testimonialWrapper.appendChild(testimonials[1].cloneNode(true));
    // Re-query the testimonials to include the newly added clones
    testimonials = document.querySelectorAll('.box');
    totalTestimonials = testimonials.length;
}

function showTestimonial(index) {
    testimonialWrapper.style.transition = 'transform 0.5s ease-in-out';
    testimonialWrapper.style.transform = `translateX(-${index * getBoxWidth()}%)`;
}

function nextTestimonial() {
    index++;
    showTestimonial(index);

    // Instantly reset to the first testimonial without visible transition
    if (index === totalTestimonials) {
        setTimeout(() => {
            testimonialWrapper.style.transition = 'none';
            testimonialWrapper.style.transform = `translateX(0)`;
            index = 0;
        }, 500); // 500ms matches the transition duration
    }
}

// Auto-slide functionality
let autoSlide = setInterval(nextTestimonial, 5000);

// Swipe functionality
let startX = 0;
testimonialWrapper.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

testimonialWrapper.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
        clearInterval(autoSlide);
        nextTestimonial();
        autoSlide = setInterval(nextTestimonial, 5000);
    }
    if (startX < endX - 50) {
        clearInterval(autoSlide);
        prevTestimonial();
        autoSlide = setInterval(nextTestimonial, 5000);
    }
});

function prevTestimonial() {
    if (index === 0) {
        testimonialWrapper.style.transition = 'none';
        index = totalTestimonials - 1;
        testimonialWrapper.style.transform = `translateX(-${index * getBoxWidth()}%)`;
        setTimeout(() => {
            index--;
            testimonialWrapper.style.transition = 'transform 0.5s ease-in-out';
            showTestimonial(index);
        }, 0);
    } else {
        index--;
        showTestimonial(index);
    }
}
