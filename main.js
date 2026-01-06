document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const reveals = document.querySelectorAll('.reveal, .reveal-right, .reveal-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // Start App Button
    const startAppBtn = document.getElementById('startAppBtn');
    if (startAppBtn) {
        startAppBtn.addEventListener('click', () => {
            alert('Opening GourmetGo App... (This would navigate to your app deep link or store page)');
        });
    }

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            console.log('Form Submitted:', data);

            // Simulation of data collection/API call
            contactForm.classList.add('hidden');
            formSuccess.classList.remove('hidden');
        });
    }
});
