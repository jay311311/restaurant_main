const shopBox = document.querySelector(".shop")
const foodBox = document.querySelector(".food")
const login = document.querySelector("#show")
const logout = document.querySelector("#hide")

window.addEventListener('scroll', handleScroll );
login.addEventListener("click", handleIn)
logout.addEventListener("click", handleOut)

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

