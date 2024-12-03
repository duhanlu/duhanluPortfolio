// script.js
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".typing-text");
    const text = "Your animated subtitle goes here!";
    let index = 0;
  
    function type() {
      if (index < text.length) {
        textElement.textContent += text[index];
        index++;
        setTimeout(type, 100); // Adjust typing speed
      } else {
        textElement.style.borderRight = "none"; // Remove cursor after typing
      }
    }
  
    setTimeout(type, 500); // Start typing after a short delay
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = link.getAttribute('href').slice(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
