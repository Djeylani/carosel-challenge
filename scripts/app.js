var imageSlide = document.getElementsByClassName("hero-image");
var image = document.getElementsByClassName("image");
let current = 0;

(function() {
    slideShow();

    function slideShow() {
        var i;
        for (i = 0; i < imageSlide.length; i++) {
            imageSlide[i].style.display = "none";
        }
        current++;
        if (current > imageSlide.length) { current = 1}
        imageSlide[current - 1].style.display = "block";
        setTimeout(slideShow, 3000);
    }
})();




