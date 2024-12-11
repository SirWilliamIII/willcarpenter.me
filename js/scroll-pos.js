var prevScrollPos = window.pageYOffset;
    window.addEventListener("scroll", function showHeaderOnScroll() {
        let profileHeaderElem = document.getElementById("profileHeader");
        let currentScrollPos = window.pageYOffset;
        let resetHeaderStyle = false;
        let showNavBarOnScrollUp = true;
        let showNavBar = showNavBarOnScrollUp ? prevScrollPos > currentScrollPos : currentScrollPos > 0;
        if (showNavBar) {
            profileHeaderElem.classList.add("showHeaderOnTop");
        } else {
            resetHeaderStyle = true;
        }
        if (currentScrollPos === 0) {
            resetHeaderStyle = true;
        }
        if (resetHeaderStyle) {
            profileHeaderElem.classList.remove("showHeaderOnTop");
        }
        prevScrollPos = currentScrollPos;
    });