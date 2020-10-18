const container = document.querySelector(".cartContainer")
const result = document.querySelector(".result")
const containerParents = document.querySelector(".basket")
const allSumPrice = document.querySelector(".sum__price span")

let getCart = []
let n =0

let subTotal = 0


function Cart(){
    //장바구니가 비어있을때
    if(sessionStorage.length < 1){
        
        container.style.display="none"
        result.style.display="none"

        const title = document.createElement("span")
        title.setAttribute("class","emptytitle")
        title.innerHTML="your cart is currently empty" 
        containerParents.appendChild(title)
    }

    //장바구니가 채워있을때
    if(sessionStorage){
        container.style.display="block";
 
        //전체 장바구니 비우기
        const emptyAllBtn = document.querySelector(".emptybutton button")

        emptyAllBtn.addEventListener("click", emptyAll)

        function emptyAll(event){
            event.preventDefault()

           for(let i = getCart.length; i> 0; i--){
               getCart.pop()
            }
           
           sessionStorage.clear()
           window.location.reload()
           subTotal = 0
         
           allSumPrice.innerHTML=`€${subTotal}`
        }
        console.log(getCart)

        //세션스토리지에 정보가 있다면 그내용을 getcart[]에 넣기(json.parse)
        for(let i = 0; i < sessionStorage.length ;i ++ ){
       const cartItem =  sessionStorage.getItem(sessionStorage.key(i))
       const jsonItem = JSON.parse(cartItem)
        getCart.push(jsonItem)
       }
       
       //get cart[]의 내용을 루프돌려서 꺼내기
       for(n = 0; n < getCart.length; n++){
       const cartShow =  getCart.map(item=>item)
       paintCart(cartShow[n])
    }
    }

     function paintCart(item){
        const getCartItem = getCart[n] 

        const list = document.createElement("li")
        const img = document.createElement("img")
        const name = document.createElement("span")
        const price = document.createElement("span")
        const num = document.createElement("span")
        const numUp = document.createElement("span")
        const numDown = document.createElement("span")
        const sum = document.createElement("span")
        const del = document.createElement("span")
        


        //이벤트 
        //휴지통 버튼으로 지우기
        del.onclick =(event)=>{
            event.preventDefault()

            const trash = event.target.getAttribute("id")
            getCart.splice(trash-1,1)
            sessionStorage.removeItem(list.getAttribute("id"))
            console.log(getCart,sessionStorage)
            window.location.reload()
        }
        //수량감소이후, 0 일때 지우기
        function removal(event){
            const minus = event.target.getAttribute("id")
            getCart.splice(minus-1,1)
            sessionStorage.removeItem(list.getAttribute("id"))
            console.log(getCart,sessionStorage)
            window.location.reload()
        }

        //수량 증가
        numUp.onclick=(event)=>{
            event.preventDefault()

            item.count++

            const numUpResult =  item.count
            const sumUpResult = getCartItem.price * item.count

            getCartItem.count = numUpResult
            getCartItem.total = sumUpResult
            subTotal+=getCartItem.price
            
            num.innerHTML=`${numUpResult}`
            sum.innerHTML=`€${sumUpResult}`
            allSumPrice.innerHTML=`€${subTotal}`
            
        }
        //수량 감소
        numDown.onclick=(event)=>{
            event.preventDefault()

            if(item.count < 2 ){ removal(event)}
            
            item.count--

            const numDownResult =  item.count
            const sumDownResult = getCartItem.price * item.count

            getCartItem.count = numDownResult
            getCartItem.total = sumDownResult
            subTotal-=getCartItem.price

            num.innerHTML=`${numDownResult}`
            sum.innerHTML=`€${sumDownResult}`
            allSumPrice.innerHTML=`€${subTotal}`
            
        }
        
        
        subTotal+=getCartItem.price
        img.src=`${item.img}`
        name.innerHTML=`${item.title}`
        price.innerHTML=`€${getCartItem.price}`
        num.innerHTML=`${item.count  }`
        numUp.innerHTML=`➕`
        num.innerHTML=`${item.count }`
        numDown.innerHTML=`➖`
        sum.innerHTML=`€${getCartItem.price * item.count}`
        del.innerHTML=`🗑`


        const imgBox = document.createElement("div")
        const nameBox = document.createElement("div")
        const priceBox = document.createElement("div")
        const numBox = document.createElement("div")
        const sumBox = document.createElement("div")
        const delBox = document.createElement("div")

        list.setAttribute("id",`${item.id}`)
        imgBox.setAttribute("class", "imgBox")
        nameBox.setAttribute("class", "nameBox")
        priceBox.setAttribute("class", "priceBox")
        numBox.setAttribute("class", "numBox")
        sumBox.setAttribute("class", "sumBox")
        delBox.setAttribute("class", "delBox")
        num.setAttribute("class","s__num")
        del.setAttribute("id",n)
        numDown.setAttribute("id",n)

        imgBox.appendChild(img)
        nameBox .appendChild(name)
        priceBox.appendChild(price)
        numBox.appendChild(numUp)
        numBox.appendChild(num)
        numBox.appendChild(numDown)
        sumBox.appendChild(sum)
        delBox.appendChild(del)


        const basketData = document.querySelector(".basket__data ul")

        list.appendChild(imgBox)
        list.appendChild(nameBox)
        list.appendChild(priceBox)
        list.appendChild(numBox)
        list.appendChild(sumBox)
        list.appendChild(delBox)

        basketData.appendChild(list)
    }

    allSumPrice.innerHTML=`€${subTotal}`
}

Cart()
