$(document).ready(function () {
  
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
    
    $(".fadein").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass("showme");
      }
      if (bottom_of_window < bottom_of_element) {
        $(this).removeClass("showme");
      }
    });
    
  });

  
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  
  const animationScript = ["Full Stack Developer", "MERN Stack", "Web Developer", "Competitive Programmer", "DSA Enthusiast", "Tech Enthusiast", "Problem Solver"];

  
  new Typed(".typing", {
    strings: animationScript,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  new Typed(".typing2", {
    strings: animationScript,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  $(".carousel").owlCarousel({
    margin: 20, 
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  

// ================== Form submit handler ==================
$("#contact-form").submit(function (e) {
  e.preventDefault(); // Prevent default form submission

  // Serialize form data
  const formData = $(this).serialize();

  // Send form data using fetch (you can also use $.ajax here if needed)
  fetch("https://formsubmit.co/ajax/n2004niteshsingh4@gmail.com", {
    method: "POST",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData
  })
    .then(response => {
      if (response.ok) {
        // Show the popup message
        $(".thank-you-popup").fadeIn();

        // Scroll to top
        $("html, body").animate({ scrollTop: 0 }, "slow");

        // Hide popup after 3 seconds
        setTimeout(() => {
          $(".thank-you-popup").fadeOut();
          $("#contact-form")[0].reset(); // Reset the form
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
});
// ================== End Form submit handler ==================

 });

const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;
