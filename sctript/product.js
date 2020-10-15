import {storeProducts} from "./data.js"

const  lists = document.querySelector(".product__container ul")
const  slide = document.querySelector(".product__container .slide")

function List (){
    
    const productName = storeProducts.map(product=>product.title)
    const productImg = storeProducts.map(product=>product.img)
    const productPrice = storeProducts.map(product=>product.price)
    
   
    console.log(productName, productImg,productPrice)

    for( let i = 0;  i < productName.length; i++){
         const item = document.createElement("li")
        const name = document.createElement("div")
        const price = document.createElement("span")
        const imgBox = document.createElement("div")
        const img = document.createElement("img")

        imgBox.setAttribute("class", "imgBox")

        name.innerHTML=`${productName[i]}`
        price.innerHTML=`€${productPrice[i]}`
        img.src=`${productImg[i]}`

        imgBox.appendChild(img)
        item.appendChild(imgBox)
        item.appendChild(name)
        item.appendChild(price)
        
        lists.appendChild(item) 
    }

}



List();


