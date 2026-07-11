document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Scroll Reveal Animation Setup ---
    // Uses Intersection Observer to fade elements in as they scroll into view
    const revealElements = document.querySelectorAll(".reveal");

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Stop observing once revealed to improve performance
                observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15, // Triggers when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- 2. FAQ Accordion Logic ---
    // Handles the open/close state for the Frequently Asked Questions
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq-question");
        
        questionBtn.addEventListener("click", () => {
            // Check if the clicked item is already active
            const isActive = item.classList.contains("active");

            // Close all items
            faqItems.forEach(faq => {
                faq.classList.remove("active");
            });

            // If it wasn't active, open it (toggle behavior)
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    // --- 3. Mobile Navigation Toggle (Visual Only) ---
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    if (mobileToggle) {
        mobileToggle.addEventListener("click", () => {
            // A simple visual toggle for mobile layout structure
            if (navLinks.style.display === "flex") {
                navLinks.style.display = "none";
            } else {
                navLinks.style.display = "flex";
                navLinks.style.flexDirection = "column";
                navLinks.style.position = "absolute";
                navLinks.style.top = "70px";
                navLinks.style.left = "0";
                navLinks.style.width = "100%";
                navLinks.style.background = "rgba(15, 23, 42, 0.95)";
                navLinks.style.padding = "20px";
                navLinks.style.borderRadius = "20px";
                navLinks.style.border = "1px solid rgba(255, 255, 255, 0.1)";
            }
        });
    }
});
