// Show big/main slides section

var slideIndex = 0;
showSlides();

function showSlides() {
    const slideShow = document.getElementsByClassName("slides");

    for (var i = 0; i < slideShow.length; i++) {
        slideShow[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slideShow.length) {
        slideIndex = 1;
    }
    slideShow[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

// Recomended section

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

rightBtn.addEventListener('click', () => {
    window.scrollTo(0, 680);
});