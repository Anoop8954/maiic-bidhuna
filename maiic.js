// JavaScript code for handling form submission
document.getElementById('admission-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation and alert (you can send this data to a server if needed)
    if (name && email && message) {
        alert('Thank you for your inquiry, ' + name + '. We will get back to you soon.');
        // Reset form
        document.getElementById('admission-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
let slideIndex = 0;

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
    });
}

// Auto-slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// Initialize the first slide
showSlides(slideIndex);
