// Dra. Danielly Vitorino - Main JavaScript
document.addEventListener("DOMContentLoaded", () => {
    // 1. Dark Mode Toggle Setup
    initDarkMode();

    // 2. Mobile Menu Controller
    initMobileMenu();

    // 3. Testimonial Carousel Controller
    initTestimonialCarousel();

    // 4. FAQ Accordion Controller
    initFaqAccordion();

    // 5. Contact Form Handler (WhatsApp Generator)
    initContactForms();
});

/**
 * Initializes and manages Dark Mode theme switching
 */
function initDarkMode() {
    const htmlElement = document.documentElement;
    const toggleButtons = document.querySelectorAll(".dark-mode-toggle");

    // Check saved theme or user system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
        htmlElement.classList.add("dark");
        updateToggleButtonsIcons(true);
    } else {
        htmlElement.classList.remove("dark");
        updateToggleButtonsIcons(false);
    }

    // Bind event listeners to all toggle buttons (desktop & mobile)
    toggleButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const isDark = htmlElement.classList.toggle("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            updateToggleButtonsIcons(isDark);
        });
    });

    function updateToggleButtonsIcons(isDark) {
        toggleButtons.forEach(btn => {
            const iconSpan = btn.querySelector(".material-symbols-outlined");
            if (iconSpan) {
                iconSpan.textContent = isDark ? "light_mode" : "dark_mode";
            }
        });
    }
}

/**
 * Handles opening and closing of the mobile navigation menu
 */
function initMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    
    if (!menuBtn || !mobileMenu) return;

    const menuIcon = menuBtn.querySelector(".material-symbols-outlined");

    menuBtn.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("hidden");
        if (menuIcon) {
            menuIcon.textContent = isOpen ? "menu" : "close";
        }
    });

    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            if (menuIcon) menuIcon.textContent = "menu";
        });
    });
}

/**
 * Controls the testimonial slides (if present)
 */
function initTestimonialCarousel() {
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.getElementById("testimonial-prev");
    const nextBtn = document.getElementById("testimonial-next");

    if (slides.length === 0) return;

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.remove("hidden");
                slide.classList.add("flex");
            } else {
                slide.classList.add("hidden");
                slide.classList.remove("flex");
            }
        });
    }

    // Show first slide initially
    showSlide(currentIndex);

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });
    }

    // Auto-advance every 7 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 7000);
}

/**
 * Manages the FAQ expandable sections (Accordion)
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const button = item.querySelector(".faq-trigger");
        const content = item.querySelector(".faq-content");
        const icon = item.querySelector(".faq-icon");

        if (!button || !content) return;

        button.addEventListener("click", () => {
            const isExpanded = button.getAttribute("aria-expanded") === "true";
            
            // Close other items if desired (accordion behavior)
            faqItems.forEach(otherItem => {
                const otherBtn = otherItem.querySelector(".faq-trigger");
                const otherContent = otherItem.querySelector(".faq-content");
                const otherIcon = otherItem.querySelector(".faq-icon");
                if (otherBtn && otherContent && otherItem !== item) {
                    otherBtn.setAttribute("aria-expanded", "false");
                    otherContent.classList.add("hidden");
                    if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
                }
            });

            // Toggle current item
            button.setAttribute("aria-expanded", !isExpanded);
            content.classList.toggle("hidden");
            if (icon) {
                icon.style.transform = isDark => !isExpanded ? "rotate(180deg)" : "rotate(0deg)";
                // Let's make it simpler and reliable:
                icon.style.transform = !isExpanded ? "rotate(180deg)" : "rotate(0deg)";
            }
        });
    });
}

/**
 * Captures form inputs and formats a WhatsApp message
 */
function initContactForms() {
    const contactForm = document.getElementById("booking-form");
    const corporateForm = document.getElementById("corp-booking-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("form-name").value.trim();
            const phone = document.getElementById("form-phone").value.trim();
            const service = document.getElementById("form-service").value;
            const message = document.getElementById("form-message").value.trim();

            if (!name || !phone) {
                alert("Por favor, preencha seu nome e telefone.");
                return;
            }

            const baseText = `Olá, Dra. Danielly. Gostaria de agendar uma consulta.`;
            const detailsText = `\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*Serviço:* ${service}\n*Mensagem:* ${message}`;
            const fullText = encodeURIComponent(baseText + detailsText);

            // Open WhatsApp link in new window
            window.open(`https://wa.me/5561993949965?text=${fullText}`, "_blank");
        });
    }

    if (corporateForm) {
        corporateForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("corp-name").value.trim();
            const company = document.getElementById("corp-company").value.trim();
            const email = document.getElementById("corp-email").value.trim();
            const phone = document.getElementById("corp-phone").value.trim();
            const interest = document.getElementById("corp-interest").value;
            const message = document.getElementById("corp-message").value.trim();

            if (!name || !company || !phone || !email) {
                alert("Por favor, preencha os campos obrigatórios (Nome, Empresa, Email e Telefone).");
                return;
            }

            const baseText = `Olá, Dra. Danielly. Tenho interesse em serviços odontológicos para empresas.`;
            const detailsText = `\n\n*Contato:* ${name}\n*Empresa:* ${company}\n*E-mail:* ${email}\n*Telefone:* ${phone}\n*Interesse:* ${interest}\n*Mensagem:* ${message}`;
            const fullText = encodeURIComponent(baseText + detailsText);

            // Open WhatsApp link in new window
            window.open(`https://wa.me/5561993949965?text=${fullText}`, "_blank");
        });
    }
}
