// Initialize dark mode as default if no preference exists
if (!localStorage.getItem("pref-theme")) {
  localStorage.setItem("pref-theme", "dark");
}
