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
/**
   * Easy selector helper function
   */
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};

/**
 * Navbar links active state on scroll
 */
let navbarlinks = select("#navbar .scrollto", true);
const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = select(navbarlink.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      navbarlink.classList.add("active");
    } else {
      navbarlink.classList.remove("active");
    }
  });
};
window.addEventListener("load", navbarlinksActive);
onscroll(document, navbarlinksActive);

/**
 * Scrolls to an element with header offset
 */
const scrollto = (el) => {
  let header = select("#header");
  let offset = header.offsetHeight;

  if (!header.classList.contains("header-scrolled")) {
    offset -= 20;
  }

  let elementPos = select(el).offsetTop;
  window.scrollTo({
    top: elementPos - offset,
    behavior: "smooth",
  });
};

/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */
let selectHeader = select("#header");
if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 100) {
      selectHeader.classList.add("header-scrolled");
    } else {
      selectHeader.classList.remove("header-scrolled");
    }
  };
  window.addEventListener("load", headerScrolled);
  onscroll(document, headerScrolled);
}

/**
 * Back to top button
 */
let backtotop = select(".back-to-top");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };
  window.addEventListener("load", toggleBacktotop);
  onscroll(document, toggleBacktotop);
}

/**
 * Mobile nav toggle
 */
on("click", ".mobile-nav-toggle", function (e) {
  select("#navbar").classList.toggle("navbar-mobile");
  this.classList.toggle("bi-list");
  this.classList.toggle("bi-x");
});

/**
 * Mobile nav dropdowns activate
 */
on(
  "click",
  ".navbar .dropdown > a",
  function (e) {
    if (select("#navbar").classList.contains("navbar-mobile")) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle("dropdown-active");
    }
  },
  true
);

/**
 * Scrool with ofset on links with a class name .scrollto
 */
on(
  "click",
  ".scrollto",
  function (e) {
    if (select(this.hash)) {
      e.preventDefault();

      let navbar = select("#navbar");
      if (navbar.classList.contains("navbar-mobile")) {
        navbar.classList.remove("navbar-mobile");
        let navbarToggle = select(".mobile-nav-toggle");
        navbarToggle.classList.toggle("bi-list");
        navbarToggle.classList.toggle("bi-x");
      }
      scrollto(this.hash);
    }
  },
  true
);

/**
 * Scroll with ofset on page load with hash links in the url
 */
window.addEventListener("load", () => {
  if (window.location.hash) {
    if (select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  }
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrollToTopBtn").fadeIn();
    } else {
      $("#scrollToTopBtn").fadeOut();
    }
  });
  $("#scrollToTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scrollToTopBtn').fadeIn();
    } else {
      $('#scrollToTopBtn').fadeOut();
    }
  });
  $('#scrollToTopBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});