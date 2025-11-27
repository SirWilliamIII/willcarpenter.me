let localStorageValue = localStorage.getItem("pref-theme");

// Default to dark mode if no preference is set
if (!localStorageValue) {
  localStorage.setItem("pref-theme", "dark");
  localStorageValue = "dark";
}

switch (localStorageValue) {
  case "dark":
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    break;
  case "light":
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    break;
}
