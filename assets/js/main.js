// NAV BAR
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
      "https://script.google.com/macros/s/AKfycbykFFtGW0fSshR2wOQTUV8Mn5W5tvFe4JYkVarOV8xiLX6BVrRNJstJDPqgZPlkQADwCg/exec",
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
          "Data submitted successfully!";
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.backgroundColor = "green";
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
          "An error occurred while submitting the form.";
        document.getElementById("message").style.display = "block";
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
  
  // DURAÇÃO DO VÍDEO HEADER
  
  let heroVideo = document.getElementById('hero-video');
  
  heroVideo.currentTime = 20;
  
  heroVideo.addEventListener('timeupdate', () => {
    if (heroVideo.currentTime > 130) {
      heroVideo.currentTime = 0;
    }
  });
  
  heroVideo.play();
  
  
  