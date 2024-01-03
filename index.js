var center = document.querySelector(".center");
center.addEventListener("mousemove", function(details) {
    var centerLocation = center.getBoundingClientRect();
    var insideCenterVal = details.clientX - centerLocation.left;
    if (insideCenterVal < centerLocation.width / 2) {
        var redcolor = gsap.utils.mapRange(0, centerLocation.width / 2, 255, 0, insideCenterVal);
        gsap.to(center, {
            backgroundColor: `rgb( ${redcolor} 0, 0,)`,
            ease: Power4,
        });
    } else {
        var bluecolor = gsap.utils.mapRange(centerLocation / 2, centerLocation.width, 255, 0, insideCenterVal);
        gsap.to(center, {
            backgroundColor: `rgb( 0, 0, ${bluecolor})`,
            ease: Power4,
        });

    }

})
center.addEventListener("mouseleave", function() {
    // center.style.backgroundColor = "white"
    gsap.to(center, {
        backgroundColor: "white"
    })
})