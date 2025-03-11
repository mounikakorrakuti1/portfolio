// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission Animation
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Message sent successfully!');
});
