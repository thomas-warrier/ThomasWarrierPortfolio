/*call the function */
setProjectHoverListener();
setModalEventListener();


/*project hover animation */



function setProjectHoverListener(){
    const itemWrap = document.querySelectorAll(".item-wrap");
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
}


/*modal window*/
function setModalEventListener(){
    const itemWrap = document.querySelectorAll(".item-wrap");
    itemWrap.forEach(element=>{
        element.addEventListener("click",()=>{
            const modal = element.querySelector(".modal")
            modal.style.display = "block";
    
            modal.querySelector(".close").addEventListener("click",()=>{
                console.log("coucou");
                modal.style.display = "none";
            })
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              } 
    
        })
    })
}




/*project carousel*/ 





