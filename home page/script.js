// Simple JS (you can expand later)

// Example: Highlight active menu
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});