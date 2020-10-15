const shopBox = document.querySelector(".shop")
const foodBox = document.querySelector(".food")

const wrap = document.querySelector("#wrap")
const loading  = document.querySelector("#loading")

window.addEventListener('scroll', handleScroll )
window.addEventListener("DOMContentLoaded", handleLoad)
window.addEventListener("load", handleLoading)


function handleLoading(){
    wrap.style.display="block"
    loading.style.display="none"
}

function handleLoad(){
    wrap.style.display="none"
}

function handleScroll(){
    if( window.pageYOffset >= 0){
        shopBox.classList.add("show")
    } if (window.pageYOffset >= innerHeight){
         foodBox.classList.add("show") 
    }
}

