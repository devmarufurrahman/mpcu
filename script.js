document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
            slide.style.zIndex = i === index ? "1" : "-1";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlider() {
        if (slides.length > 0) {
            showSlide(currentSlide);
            setInterval(nextSlide, 3000);
        }
    }

    startSlider();
    const navLinks = document.querySelectorAll(".menu a");
    const toggleMenu = document.querySelector(".toggle-menu");
    const menu = document.querySelector(".menu");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            const href = link.getAttribute("href");
            if (!href.startsWith("#")) return;  // Skip external links
    
            event.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

     // Toggle Menu on Click
     toggleMenu.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Close Menu on Window Resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            menu.classList.remove("active");
        }
    });
});
