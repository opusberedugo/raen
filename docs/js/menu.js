  // Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the toggle button and menu
    const toggleButton = document.getElementById('hs-navbar-royalty-access-collapse');
    const menu = document.getElementById('hs-navbar-royalty-access');
    
    if (toggleButton && menu) {
        toggleButton.addEventListener('click', function() {
            // Toggle the menu visibility
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                // Hide menu
                menu.classList.add('hidden');
                toggleButton.setAttribute('aria-expanded', 'false');
                toggleButton.classList.remove('hs-collapse-open');
            } else {
                // Show menu
                menu.classList.remove('hidden');
                toggleButton.setAttribute('aria-expanded', 'true');
                toggleButton.classList.add('hs-collapse-open');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = toggleButton.contains(event.target) || menu.contains(event.target);
            
            if (!isClickInsideNav && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
                toggleButton.setAttribute('aria-expanded', 'false');
                toggleButton.classList.remove('hs-collapse-open');
            }
        });
        
        // Close menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) { // md breakpoint
                menu.classList.remove('hidden');
                toggleButton.setAttribute('aria-expanded', 'false');
                toggleButton.classList.remove('hs-collapse-open');
            } else {
                // On mobile, start with menu hidden
                menu.classList.add('hidden');
            }
        });
        
        // Initialize menu state based on screen size
        if (window.innerWidth < 768) {
            menu.classList.add('hidden');
        }
    }
});

