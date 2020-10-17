let getCart = [];
let i = 0

function Cart(){
    if(sessionStorage){
        //세션스토리지에 정보가 있다면 그내용을 getcart[]에 넣기
        for(i = 0; i < sessionStorage.length ;i ++ ){
       const cartItem =  sessionStorage.getItem(sessionStorage.key(i))
        getCart.push(cartItem)

       }
       //get cart[]의 내용을 루프돌려서 꺼내기
       for(let n =0; n < getCart.length; n++){
       const cartShow =  getCart.map(item=>item)
       paintCart(cartShow[n])
    }
    }

     function paintCart(items){
        const item = JSON.parse(items)
        
        console.log(item)

            const list = document.createElement("li")
            const img = document.createElement("img")
            const name = document.createElement("span")
            const price = document.createElement("span")
            const num = document.createElement("span")
            const numUp = document.createElement("span")
            const numDown = document.createElement("span")
            const sum = document.createElement("span")
            const del = document.createElement("span")

            img.src=`${item.img}`
            name.innerHTML=`${item.title}`
            price.innerHTML=`${item.price}`
            num.innerHTML=`${item.count}`
            numUp.innerHTML=`🔼`
            numDown.innerHTML=`🔽`
            sum.innerHTML=`${item.price * item.count}`
            del.innerHTML=`🗑`

            const imgBox = document.createElement("div")
            const nameBox = document.createElement("div")
            const priceBox = document.createElement("div")
            const numBox = document.createElement("div")
            const sumBox = document.createElement("div")
            const delBox = document.createElement("div")

            imgBox.setAttribute("class", "imgBox");
            nameBox.setAttribute("class", "nameBox");
            priceBox.setAttribute("class", "priceBox");
            numBox.setAttribute("class", "numBox");
            sumBox.setAttribute("class", "sumBox");
            delBox.setAttribute("class", "delBox");


            imgBox.appendChild(img)
            nameBox .appendChild(name)
            priceBox.appendChild(price)
            numBox.appendChild(numUp)
            numBox.appendChild(num)
            numBox.appendChild(numDown)
            sumBox.appendChild(sum)
            delBox.appendChild(del)


            const basketData = document.querySelector(".basket__data")
            
            list.appendChild(imgBox)
            list.appendChild(nameBox)
            list.appendChild(priceBox)
            list.appendChild(numBox)
            list.appendChild(sumBox)
            list.appendChild(delBox)

            basketData.appendChild(list)
            
      }
         }





Cart()
