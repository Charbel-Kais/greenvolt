let slideIndex = 1;
showSlides(slideIndex);

// Function to move to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to display a specific slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    // Logic to loop back to the beginning or end
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
}
