// Combined JavaScript for essential functionality

// Theme preference detection and setting
(function() {
    let localStorageValue = localStorage.getItem("pref-theme");
    let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)").matches;

    switch (localStorageValue) {
        case "dark":
            document.body.classList.add("dark");
            break;
        case "light":
            document.body.classList.remove("dark");
            break;
        default:
            if (mediaQuery) {
                document.body.classList.add("dark");
            }
            break;
    }
})();

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            if (document.body.className.includes("dark")) {
                document.body.classList.remove('dark');
                localStorage.setItem("pref-theme", 'light');
            } else {
                document.body.classList.add('dark');
                localStorage.setItem("pref-theme", 'dark');
            }
        });
    }

    // Simple navbar collapse functionality (replaces Bootstrap JS)
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            const isExpanded = navbarCollapse.classList.contains('show');
            if (isExpanded) {
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', 'false');
            } else {
                navbarCollapse.classList.add('show');
                navbarToggler.setAttribute('aria-expanded', 'true');
            }
        });
    }
});

// CSS for navbar collapse
const style = document.createElement('style');
style.textContent = `
    .navbar-collapse {
        transition: all 0.35s ease;
        max-height: 0;
        overflow: hidden;
    }
    .navbar-collapse.show {
        max-height: 500px;
    }
    @media (min-width: 992px) {
        .navbar-collapse {
            max-height: none !important;
            overflow: visible !important;
        }
    }
`;
document.head.appendChild(style);