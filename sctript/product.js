import {storeProducts} from "./data.js"

const  lists = document.querySelector(".product__container ul")

//상품 화면 구현
 function List (){
    
    const productAll = storeProducts.map(product=>product)
    const productName = storeProducts.map(product=>product.title)
    const productImg = storeProducts.map(product=>product.img)
    const productPrice = storeProducts.map(product=>product.price)
    const productId = storeProducts.map(product=>product.id)
    
   

    for( let i = 0;  i < productName.length; i++){
         const item = document.createElement("li")
        const name = document.createElement("div")
        const price = document.createElement("span")
        const imgBox = document.createElement("div")
        const img = document.createElement("img")
        const btn = document.createElement("button")

        imgBox.setAttribute("class", "imgBox");
        btn.setAttribute("id",`${productId[i]}` )

        //sessionstorage에 선택된 데이터 저장
        
         btn.onclick=(event)=>{
        
             const tab = event.target.getAttribute("id")
           sessionStorage.setItem(tab, JSON.stringify(productAll[tab]));
            console.log(sessionStorage.getItem(tab))
            console.log(typeof tab)

            
        }
        

        btn.innerHTML = 'cart'
        name.innerHTML=`${productName[i]}`
        price.innerHTML=`€${productPrice[i]}`
        img.src=`${productImg[i]}`

        imgBox.appendChild(img)
        imgBox.appendChild(btn)
        item.appendChild(imgBox)
        item.appendChild(name)
        item.appendChild(price)
        
        lists.appendChild(item) 

        
    }

}



List();




