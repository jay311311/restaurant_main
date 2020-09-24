const shopBox = document.querySelector(".shop")
const foodBox = document.querySelector(".food")
window.addEventListener('scroll', handleScroll );


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