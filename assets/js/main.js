// NAV BAR

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
  document.getElementById("message").textContent = "Un Instant";
  document.getElementById("message").style.display = "block";
  document.getElementById("submit-button").disabled = true;

  // Collect the form data
  var formData = new FormData(this);
  var keyValuePairs = [];
  for (var pair of formData.entries()) {
    keyValuePairs.push(pair[0] + "=" + pair[1]);
  }

  var formDataString = keyValuePairs.join("&");

  // Send a POST request to your Google Apps Script
  fetch(
    "https://script.google.com/macros/s/AKfycbzmYxsp6xCkrnKxtlfXF79Lbyc41fEkCiCXh6nKa-xbF1FFu303oAyvfE3Kd0LODqQ/exec",
    {
      redirect: "follow",
      method: "POST",
      body: formDataString,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  )
    .then(function (response) {
      // Check if the request was successful
      if (response) {
        return response; // Assuming your script returns JSON response
      } else {
        throw new Error("Failed to submit the form.");
      }
    })
    .then(function (data) {
      // Display a success message
      document.getElementById("message").textContent =
        "Merci, Nous vous contacterons";
      document.getElementById("message").style.display = "block";
      document.getElementById("message").style.backgroundColor = "blue";
      document.getElementById("message").style.color = "beige";
      document.getElementById("submit-button").disabled = false;
      document.getElementById("form").reset();

      setTimeout(function () {
        document.getElementById("message").textContent = "";
        document.getElementById("message").style.display = "none";
      }, 2600);
    })
    .catch(function (error) {
      // Handle errors, you can display an error message here
      console.error(error);
      document.getElementById("message").textContent =
        "Un Instant";
      document.getElementById("message").style.display = "block";
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const navbarHeight = document.querySelector(".navbar").offsetHeight;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - navbarHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // סגירה אוטומטית של המגירה בלחיצה על קישור
  document.querySelectorAll(".navbar-collapse .nav-link").forEach(link => {
      link.addEventListener("click", () => {
          if (navbarCollapse.classList.contains("show")) {
              navbarToggler.click(); // מחקה לחיצה כדי לסגור את המגירה
          }
      });
  });
});
// MENU MOBILE

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.close-btn');
  const mobileMenuClick = document.querySelector('.mobile-menu ul');

  menuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
    mobileMenu.style.animation = 'showMenu 1s forwards';
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.style.animation = 'hideMenu 1s forwards';
  });

  mobileMenuClick.addEventListener('click', () => {
    mobileMenu.style.animation = 'hideMenu 1s forwards';
  });
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
  document.getElementById("message").textContent = "Submitting..";
  document.getElementById("message").style.display = "block";
  document.getElementById("submit-button").disabled = true;

  // Collect the form data
  var formData = new FormData(this);
  var keyValuePairs = [];
  for (var pair of formData.entries()) {
    keyValuePairs.push(pair[0] + "=" + pair[1]);
  }

  var formDataString = keyValuePairs.join("&");

  // Send a POST request to your Google Apps Script
  fetch(
    "https://script.google.com/macros/s/AKfycbyrih5dz14Xmwdoj-TzY7YPRyb6g9T-8YnOKWDdobOkOLiIQYVkR7Hxg3AQ1HOb5nik/exec",
    {
      redirect: "follow",
      method: "POST",
      body: formDataString,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  )
    .then(function (response) {
      // Check if the request was successful
      if (response) {
        return response; // Assuming your script returns JSON response
      } else {
        throw new Error("Failed to submit the form.");
      }
    })
    .then(function (data) {
      window.location.href = "/merci.html";
    })
    .catch(function (error) {
      // Handle errors, you can display an error message here
      console.error(error);
      document.getElementById("message").textContent =
        "An error occurred while submitting the form.";
      document.getElementById("message").style.display = "block";
    });
});
// קבלת התאריך של היום
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0'); // חודשים הם מ-0 ל-11
const dd = String(today.getDate()).padStart(2, '0');

// פורמט תאריך yyyy-mm-dd
const minDate = `${yyyy}-${mm}-${dd}`;

// הגדרת המאפיין 'min' לשדה התאריך
document.getElementById('date').setAttribute('min', minDate);

 document.addEventListener("DOMContentLoaded", function () {
        var navbar = document.querySelector(".navbar");
        var body = document.querySelector("body");

        window.addEventListener("scroll", function () {
          if (window.scrollY > 50) {
            navbar.classList.add("fixed", "shrink"); // Fix the navbar and shrink it
            body.style.paddingTop = navbar.offsetHeight + "px"; // Prevent content shift
          } else {
            navbar.classList.remove("fixed", "shrink"); // Remove fixed position at the top
            body.style.paddingTop = "0px"; // Reset padding
          }
        });
      });

      document.addEventListener("DOMContentLoaded", function () {
        var navbar = document.querySelector(".navbar");
        var body = document.querySelector("body");

        window.addEventListener("scroll", function () {
          if (window.scrollY > 50) {
            navbar.classList.add("fixed", "shrink"); // Fix the navbar and shrink it
            body.style.paddingTop = navbar.offsetHeight + "px"; // Prevent content shift
          } else {
            navbar.classList.remove("fixed", "shrink"); // Remove fixed position at the top
            body.style.paddingTop = "0px"; // Reset padding
          }
        });
      });


