const mapContainer = document.querySelector("#map")

function initMap(){
    const myLatLong={
        lat : 53.343825,
        lng : -6.266305 
    }
    const map = new google.maps.Map(
        mapContainer,
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