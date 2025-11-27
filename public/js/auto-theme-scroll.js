// Auto-toggle theme based on section background
function autoToggleTheme() {
    const sections = [
        { id: 'hero', theme: 'light' },
        { id: 'about', theme: 'light' },
        { id: 'lab-highlights', theme: 'dark' },
        { id: 'experience', theme: 'light' }
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                const section = sections.find(s => s.id === entry.target.id);
                if (section) {
                    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';

                    if (currentTheme !== section.theme) {
                        document.body.classList.remove('dark', 'light');
                        document.body.classList.add(section.theme);
                        // Don't save to localStorage - this is auto-switching
                    }
                }
            }
        });
    }, {
        threshold: [0.5],
        rootMargin: '-10% 0px -10% 0px'
    });

    sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
            observer.observe(element);
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoToggleTheme);
} else {
    autoToggleTheme();
}
