//======================== for image animation====================================
document.querySelectorAll(".lightbox").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const lightboxTarget = document.getElementById(targetId);

    // Show the lightbox and add the fadeIn class
    lightboxTarget.classList.add("show", "fadeIn");

    // Add the scaleAndRotate class to the image inside the lightbox
    const lightboxImage = lightboxTarget.querySelector("img");
    lightboxImage.classList.add("scaleAndRotate");
  });
});

document.querySelectorAll(".lightbox-close").forEach((closeLink) => {
  closeLink.addEventListener("click", function (event) {
    event.preventDefault();

    const lightboxTarget = this.closest(".lightbox-target");

    // Hide the lightbox and remove the fadeIn class
    lightboxTarget.classList.remove("show", "fadeIn");

    // Remove the scaleAndRotate class from the image inside the lightbox
    const lightboxImage = lightboxTarget.querySelector("img");
    lightboxImage.classList.remove("scaleAndRotate");
  });
});

document.querySelectorAll(".lightbox-target").forEach((target) => {
  target.addEventListener("click", function (event) {
    if (event.target === this) {
      // If the background overlay is clicked, hide the lightbox
      this.classList.remove("show", "fadeIn");

      // Remove the scaleAndRotate class from the image inside the lightbox
      const lightboxImage = this.querySelector("img");
      lightboxImage.classList.remove("scaleAndRotate");
    }
  });
});
//======================== for randomly image rotation====================================
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".lightbox img").forEach((thumbnail) => {
    const randomRotationValue = Math.floor(Math.random() * 360);
    thumbnail.style.transform = `rotate(${randomRotationValue}deg)`;
  });
});
document.querySelectorAll(".interval-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove the active class from all buttons
    document.querySelectorAll(".interval-btn").forEach((b) => {
      b.classList.remove("active", "active-btn");
    });

    // Add the active class to the clicked button
    this.classList.add("active", "active-btn");

    // Get the target section ID from the data-target attribute
    const targetId = this.getAttribute("data-target");

    // Hide all sections
    document.querySelectorAll(".images").forEach((section) => {
      section.style.display = "none";
      // Remove the 'fade-in' class from all sections
      section.classList.remove("fade-in");
    });

    // Clear the content of the all-images-container
    const allImagesContainer = document.getElementById("all-images-container");
    allImagesContainer.style.display = "none";

    // Display the selected section with fade-in effect
    const targetSection = document.getElementById(targetId);
    targetSection.style.display = "flex";
    targetSection.classList.add("fade-in");

    // Copy images from the selected section to the main container
    copyImages(targetId, "all-images-container");
  });
});

// Initially hide all sections except the first one
document.querySelectorAll(".images").forEach((section) => {
  section.style.display = "none";
});

//======================== to show all images initially====================================
document.addEventListener("DOMContentLoaded", function () {
  // Function to copy images from different sections to the main container
  function copyImages(sectionId, containerId) {
    const section = document.getElementById(sectionId);
    const container = document.getElementById(containerId);

    const images = section.querySelectorAll(".lightbox");

    images.forEach((image) => {
      const clonedImage = image.cloneNode(true);
      container.appendChild(clonedImage);
    });
  }

  // Copy images from different sections to the main container
  copyImages("image-interval-1", "all-images-container");
  copyImages("image-interval-2", "all-images-container");
  copyImages("image-interval-3", "all-images-container");
  copyImages("image-interval-4", "all-images-container");
});
$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('#scrollToTopBtn').fadeIn();
      } else {
          $('#scrollToTopBtn').fadeOut();
      }
  });
  $('#scrollToTopBtn').click(function() {
      $('html, body').animate({scrollTop: 0}, 800);
      return false;
  });

  toggleBackButton();

  $(window).on('popstate', function () {
    toggleBackButton();
  });
  $('#goBackBtn').click(function () {
    window.history.back();
    return false;
  });
});
function toggleBackButton() {
  if (window.history.length > 1) {
      $('#goBackBtn').fadeIn();
  } else {
      $('#goBackBtn').fadeOut();
  }
}