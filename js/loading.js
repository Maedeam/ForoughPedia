document.addEventListener("DOMContentLoaded", (event) => {
  // Initialize Vanta.js BIRDS effect
  VANTA.BIRDS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0x0, // Background color
    color1: 0xfffff, // Color of the birds
    color2: 0x111111, // Color of the birds
    wingSpan: 0.5, // Wing span of the birds
    separation: 10.0, // Separation between birds
    alignment: 10.0, // Alignment between birds
    cohesion: 190.0, // Cohesion in bird movement
    quantity: 5.0, // Quantity of birds
    // ... other parameters ...
  });

  // Add event listeners for mouseover and mouseout
  document
    .querySelector(".text-overlay")
    .addEventListener("mouseover", function () {
      this.style.color = "#aqua"; // Change to a different color
    });

  document
    .querySelector(".text-overlay")
    .addEventListener("mouseout", function () {
      this.style.color = "#4fd1b3"; // Change back to the original color
    });
});

/*------------------------------
Redirect automatically after 3 seconds
------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  // Simulate a delay using setTimeout
  setTimeout(function () {
    // Redirect to the 'index.html' page after 3 seconds
    window.location.href = "pages/en/home.html";
  }, 2000);
});
