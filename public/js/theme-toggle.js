 // js/theme-toggle.js

document.getElementById("theme-toggle").addEventListener("click", () => {
    if (document.body.className.includes("dark")) {
        document.body.classList.remove('dark');
        localStorage.setItem("pref-theme", 'light');
    } else {
        document.body.classList.add('dark');
        localStorage.setItem("pref-theme", 'dark');
    }
});

 let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
 let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});