const shopBox = document.querySelector(".shop")
const foodBox = document.querySelector(".food")
const login = document.querySelector("#show")
const logout = document.querySelector("#hide")
const wrap = document.querySelector("#wrap")
const loading  = document.querySelector("#loading")

window.addEventListener('scroll', handleScroll );
window.addEventListener("DOMContentLoaded", handleLoad)
window.addEventListener("load", handleLoading)
login.addEventListener("click", handleIn)
logout.addEventListener("click", handleOut)

function handleLoading(){
    wrap.style.display="block"
    loading.style.display="none"
}

function handleLoad(){
    wrap.style.display="none"
}

function handleIn(){
    document.querySelector(".form").style.display="block"
}

function handleOut(){
    document.querySelector(".form").style.display="none"
}
function handleScroll(){
    if( window.pageYOffset >= 0){
        shopBox.classList.add("show")
    } if (window.pageYOffset >= innerHeight){
         foodBox.classList.add("show") 
    }
}

