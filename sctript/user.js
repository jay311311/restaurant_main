const logOut = document.querySelector(".logout")

logOut.addEventListener("click", handleLogOut)

function handleLogOut(){

    localStorage.setItem("state","out")
    if(localStorage.getItem("state") === "out"){
       removeGreeting()
    } 
}

function paintGreeting(text){
    const user = document.querySelector(".person span")
    user.innerHTML= `${text}님,`
}


function userName(){
    if(localStorage.getItem("state") === "in"){
    const currentUser = localStorage.getItem("name")
    paintGreeting(currentUser)
    } 
}

userName()

