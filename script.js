/*project */

var itemWrap = document.querySelector(".item-wrap");
itemWrap.addEventListener("mouseover", () => {
    let image = document.querySelector(".item-wrap img")
    image.classList.add("active");
    let textContainer = document.querySelector(".project-item-text-container");
    textContainer.classList.add("active");

});

itemWrap.addEventListener("mouseout", () => {
    let image = document.querySelector(".item-wrap img")
    image.classList.remove("active");
    let textContainer = document.querySelector(".project-item-text-container");
    textContainer.classList.remove("active");
});
