// This tells the script to wait until the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Listen for any click on the entire document
    document.addEventListener('click', function(event) {
        
        // Find if the clicked element (or its parent) has the 'scroll-link' class
        const link = event.target.closest('.scroll-link');

        // If it wasn't a scroll link, do nothing
        if (!link) return;

        // 1. Stop the browser from changing the URL
        event.preventDefault();

        // 2. Get the target ID and the element
        const targetId = link.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        // 3. Scroll smoothly
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        } else {
            console.warn(`Target section "${targetId}" not found!`);
        }
    });
});
// This tells the script to wait until the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Listen for any click on the entire document
    document.addEventListener('click', function(event) {
        
        // Find if the clicked element (or its parent) has the 'scroll-link' class
        const link = event.target.closest('.learn-but');

        // If it wasn't a scroll link, do nothing
        if (!link) return;

        // 1. Stop the browser from changing the URL
        event.preventDefault();

        // 2. Get the target ID and the element
        const targetId = link.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        // 3. Scroll smoothly
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        } else {
            console.warn(`Target section "${targetId}" not found!`);
        }
    });
});
