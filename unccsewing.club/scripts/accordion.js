const tabs = document.querySelectorAll("[data-collapsible-tab]");

tabs.forEach(function (button) {
    //Sets up an event listener for each collapsible button to check for interaction
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        //Adjusts content height in order to display it
        if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          } 
    });
});