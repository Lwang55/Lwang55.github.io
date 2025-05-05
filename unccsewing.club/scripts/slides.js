const buttons = document.querySelectorAll("[data-carousel-button]");

//Loops through each button adding an event listener
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        //Checks if carousel value in html is next, if so adds one, otherwise subtracts 1.
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");
    
        //Adds active slide offset to the Index of the array. Compares new index to check wether to move to the next image or
        //previous image
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        //Resets the Index when it reaches the end
        if (newIndex >= slides.children.length) newIndex = 0;

        //Sets new slide to active and deletes previous slides active status
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});