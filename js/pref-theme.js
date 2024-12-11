    let localStorageValue = localStorage.getItem("pref-theme");
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)').matches;

    switch (localStorageValue) {
        case "dark":
            document.body.classList.add('dark');
            break;
        case "light":
            document.body.classList.remove('dark');
            break;
        default:
            if (mediaQuery) {
                document.body.classList.add('dark');
            }
            break;
    }