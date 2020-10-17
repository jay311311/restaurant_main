const  closeBtns = document.querySelector(".modal__btn")
const  modal = document.querySelector(".modal")
const container =document.querySelector(".product__container ul")


closeBtns.addEventListener("click",hideClick)
container.addEventListener("click",showClick )


function hideClick(event){
    if(event.target){
        modal.classList.remove("hide")
    }
}

function showClick(event){
     const target =event.target.getAttribute("class")
    if(target === "show"){
        modal.classList.add("hide")
    }
}



