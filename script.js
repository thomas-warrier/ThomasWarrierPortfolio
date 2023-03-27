/*call the function */
setProjectHoverListener();
setModalEventListener();
setCarouselListener();
setModalSkillEventListener();


/*project hover animation */



function setProjectHoverListener() {
    const itemWrap = document.querySelectorAll(".item-wrap");
    itemWrap.forEach(element => {
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
}



/*modal window*/
function setModalEventListener() {

    const itemWrap = document.querySelectorAll(".item-wrap");
    itemWrap.forEach(element => {
        element.addEventListener("click", () => {
            const modal = element.querySelector(".modal");
            modal.style.display = "block";

            modal.querySelector(".close").addEventListener("click", (event) => {
                event.stopPropagation();
                modal.style.display = "none";
            })
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

        });
    });
}




/*project carousel*/

function setCarouselListener() {
    const itemWrap = document.querySelectorAll(".carousel");
    itemWrap.forEach(element => {
        const slidesContainer = element.querySelector("#slides-container");
        const slide = element.querySelector(".slide");
        const prevButton = element.querySelector("#slide-arrow-prev");
        const nextButton = element.querySelector("#slide-arrow-next");

        nextButton.addEventListener("click", () => {
            const slideWidth = slide.clientWidth;
            slidesContainer.scrollLeft += slideWidth;
        });

        prevButton.addEventListener("click", () => {
            const slideWidth = slide.clientWidth;
            slidesContainer.scrollLeft -= slideWidth;
        });
    })

}

/*modal window*/
// function setModalSkillEventListener() {

//     const itemWrap = document.querySelectorAll(".skill-item");
//     itemWrap.forEach(element => {
//         element.addEventListener("click", () => {
//             const modal = element.querySelector(".modal");
//             modal.style.display = "block";

//             modal.querySelector(".close").addEventListener("click", (event) => {
//                 event.stopPropagation();
//                 modal.style.display = "none";
//             })
//             // When the user clicks anywhere outside of the modal, close it
//             window.onclick = function (event) {
//                 if (event.target == modal) {
//                     modal.style.display = "none";
//                 }
//             }

//         });
//     });
// }

/*modal window*/
function setModalSkillEventListener() {

    const itemWrap = document.querySelectorAll(".skill-item");
    itemWrap.forEach(element => {
        element.addEventListener("click", () => {
            const modal = element.querySelector(".modal");
            const modalClone = modal.cloneNode(true)
            $("body").append(modalClone);

            modalClone.style.display = "block";
            modalClone.querySelector(".close").addEventListener("click", (event) => {
                event.stopPropagation();
                modalClone.style.display = "none";
            })
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modalClone) {
                    modalClone.style.display = "none";
                }
            }

        });
    });
}





