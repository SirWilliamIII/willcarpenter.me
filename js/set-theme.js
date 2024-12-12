
if (document.body.className.includes("light")) {
        document.body.classList.add('dark');
        localStorage.setItem("pref-theme", 'dark');
    }