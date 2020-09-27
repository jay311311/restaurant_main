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

function initMap(){
    const myLatLong={
        lat : 53.343825,
        lng : -6.266305 
    }
    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            center: myLatLong, 
            scrollwheel: false,
            zoom:18
        }
    )
    const marker = new google.maps.Marker({
        position:myLatLong,
        map:map,
        title:"chez-max"
    })
}