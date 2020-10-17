let getCart = [];

let n =0;


let counter=1;

function Cart(){
    if(sessionStorage){
        //세션스토리지에 정보가 있다면 그내용을 getcart[]에 넣기
        for(let i = 0; i < sessionStorage.length ;i ++ ){
       const cartItem =  sessionStorage.getItem(sessionStorage.key(i))
        getCart.push(cartItem)
       }
       //get cart[]의 내용을 루프돌려서 꺼내기
       for(n =0; n < getCart.length; n++){
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

            //이벤트 추가
            del.onclick =(event)=>{
                const trash = event.target.getAttribute("id")
                getCart.splice(trash-1,1)
                sessionStorage.removeItem(list.getAttribute("id"))
                console.log(getCart,sessionStorage)
                window.location.reload()
            }

            function removal(){
                const listId = list.getAttribute("id")
                const check = getCart.indexOf(sessionStorage.getItem(listId))
                sessionStorage.removeItem(listId)
                
                    console.log(check,getCart,remover)
              /*   sessionStorage.removeItem(listId)

                const remover = getCart.splice(check,1)
                getCart.push(remover)
                console.log(check,getCart,remover) */
              

            }
            numUp.onclick=(event)=>{
                console.log("aa")
                event.preventDefault();
                counter++;
                num.innerHTML=`${item.count * counter}`
                sum.innerHTML=`€${item.price * counter}`
            }
            numDown.onclick=(event)=>{
                if(counter < 1 ){ removal()}
                event.preventDefault();
                counter--;
                num.innerHTML=`${item.count * counter}`
                sum.innerHTML=`€${item.price * counter}`
            }

            img.src=`${item.img}`
            name.innerHTML=`${item.title}`
            price.innerHTML=`${item.price}`
            num.innerHTML=`${item.count * counter}`
            numUp.innerHTML=`➕`
            num.innerHTML=`${item.count * counter}`
            numDown.innerHTML=`➖`
            sum.innerHTML=`€${item.price * item.count}`
            del.innerHTML=`🗑`

        
           

            const imgBox = document.createElement("div")
            const nameBox = document.createElement("div")
            const priceBox = document.createElement("div")
            const numBox = document.createElement("div")
            const sumBox = document.createElement("div")
            const delBox = document.createElement("div")

            list.setAttribute("id",`${item.id}`)
            imgBox.setAttribute("class", "imgBox");
            nameBox.setAttribute("class", "nameBox");
            priceBox.setAttribute("class", "priceBox");
            numBox.setAttribute("class", "numBox");
            sumBox.setAttribute("class", "sumBox");
            delBox.setAttribute("class", "delBox");
            num.setAttribute("class","s__num")
            del.setAttribute("id",n)
           

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
