// navbar

$(document).ready(function () {
  $('#nav-toggler').on('click', function () {
    $(this).toggleClass('fa-times');
    $('.main-nav .nav-items').toggleClass('show');
  });

  $(window).on('scroll load', function () {

    if ($(window).scrollTop() > 0) {
      $('.main-nav').addClass('bgchange');
    } else {
      $('.main-nav').removeClass('bgchange');
    }


  });

});
// footer -email validation
$(document).ready(function () {
  // Initialize jQuery Validation plugin on your form
  $('#footer-email').validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address."
      }
    },
    submitHandler: function (form) {
  $('#exampleModal').modal('show');
  form.reset();
  return false;
}
  });
});
// contact us form   validation// Custom method to check if the input contains only letters and spaces
$.validator.addMethod("noNumbers", function(value, element) {
  return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
}, "Please do not use numbers in your name");

$('#contactForm').validate({
  errorClass: 'error',
  rules: {
      firstName: {
          required: true,
          noNumbers: true
      },
      lastName: {
          required: true,
          noNumbers: true
      },
      email1: {
          required: true,
          email: true
      },
      phoneNumber: {
          required: true,
          digits: true
      },
      message: {
          required: true
      },
      privacyPolicy: {
          required: true
      }
  },
  messages: {
      firstName: {
          required: "Please enter your first name",
          noNumbers: "First name cannot contain numbers"
      },
      lastName: {
          required: "Please enter your last name",
          noNumbers: "Last name cannot contain numbers"
      },
      email1: {
          required: "Please enter your email",
          email: "Please enter a valid email address"
      },
      phoneNumber: {
          required: "Please enter your phone number",
          digits: "Please enter a valid phone number"
      },
      message: {
          required: "Please enter your message"
      },
      privacyPolicy: {
          required: "You must agree to the privacy policy"
      }
  },
  submitHandler: function(form) {
      $('#exampleModal').modal('show');
      form.reset();
     

      return false;
  }
});
function cartMessage() {
  document.getElementById('addProduct').style.display = "none";
  $('.wishlist').click(function (e) {
    e.preventDefault();
    let $counter = $('.counter');
    let currentCount = parseInt($counter.text(), 10);
    $counter.text(currentCount + 1);
    setTimeout(() => {
      let addProductElement = document.getElementById('addProduct');
      addProductElement.innerHTML = "Product added successfully";
      addProductElement.style.display = "block"
      setTimeout(() => {
        document.getElementById('addProduct').style.display = "none";
      }, 1000);
    }, 200);
  });
}
cartMessage()

//Team page code
$(document).ready(function () {
    // Modal pop-up
    $('.team-member').on('click', function () {
        const name = $(this).data('name');
        const role = $(this).data('role');
        const description = $(this).data('description');

        $('.modal-member-name').text(name);
        $('.modal-member-role').text(role);
        $('.modal-member-description').text(description);

        $('#memberModal').modal('show');
    });

    // Scroll to Top Button
    const scrollToTopBtn = $('#scrollToTopBtn');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            scrollToTopBtn.fadeIn();
        } else {
            scrollToTopBtn.fadeOut();
        }
    });

    scrollToTopBtn.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Lazy Loading
    lazyload();
});

