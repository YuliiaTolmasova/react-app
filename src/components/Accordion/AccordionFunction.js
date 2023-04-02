
const accordionToggle = document.querySelectorAll('.accordion-toggle');

accordionToggle.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
    this.classList.toggle('active');
    const accordionContent = this.nextElementSibling;
    if (accordionContent.style.display === 'block') {
        accordionContent.style.display = 'none';
    } else {
        accordionContent.style.display = 'block';
    }
    });
});