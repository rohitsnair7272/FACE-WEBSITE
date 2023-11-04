// Function to hide the preloader and show the website content
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  // Hide the preloader with a smooth fade-out transition
  preloader.style.opacity = 0;
  setTimeout(function () {
    preloader.style.display = "none";
  }, 1000); // Adjust the delay to match your video duration (1 second in this example)

  // Show the website content
  content.style.display = "block";
}

// Event listener to trigger the hidePreloader function after a specified time
window.addEventListener("load", function () {
  // Trigger the hidePreloader function after a delay
  setTimeout(hidePreloader, 2750); // Adjust the delay (3 seconds in this example)
});
