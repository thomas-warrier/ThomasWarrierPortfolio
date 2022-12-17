/*project */

var itemWrap = document.querySelectorAll(".item-wrap");

itemWrap.forEach(element=>{
    element.addEventListener("mouseover", () => {
        let image = element.querySelector(".item-wrap img")
        image.classList.add("active");
        let textContainer = element.querySelector(".project-item-text-container");
        textContainer.classList.add("active");
    });

    element.addEventListener("mouseout", () => {
        let image = element.querySelector(".item-wrap img")
        image.classList.remove("active");
        let textContainer = element.querySelector(".project-item-text-container");
        textContainer.classList.remove("active");
    });
})

