
function paintGreeting(text){
    const user = document.querySelector(".person span");
    user.innerHTML= `${text}님,`
/*  newSpan.appendChild(person)  */
}


function userName(){
    const currentUser = localStorage.getItem("name");
    if (currentUser){
        paintGreeting(currentUser)
    }
}

function init(){
    userName();
}
init();