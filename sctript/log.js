const title = document.querySelector(".title")
const tabs = document.querySelectorAll(".title h2")
const form =  document.querySelectorAll(".form")

const name = document.getElementById('name');
const pw = document.getElementById('pw');
const number = document.getElementById('number');
const mail = document.getElementById('mail');
const register = document.querySelector(".register")
const login = document.querySelector(".check")

title.addEventListener("click", handleIn)
register.addEventListener("click", store)
login.addEventListener("click", check)


function handleIn(event){
    event.preventDefault();

    let tabNum = event.target.getAttribute("data-tab");

    tabs.forEach((e)=>{e.classList.remove("current")});
    event.target.classList.add("current");
    form.forEach((e)=>{e.classList.remove("current")});
    document.querySelector("#"+tabNum).classList.add("current");  

}


function store(event){
    console.log("aa")
    event.preventDefault()

    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in name');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(number.value.length == 0){
        alert('Please fill in phone-number');

    }else if(mail.value.length == 0){
        alert('Please fill in e-mail');

    }
    else if(pw.value.length > 20){
        alert(' passwards is Max of 20');
    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('id', mail.value);
        localStorage.setItem('phone-number', number.value);
        alert('Your account has been created');
    }
}

//checking
function check(event){
    event.preventDefault()

    let storedName = localStorage.getItem('id');
    let storedPw = localStorage.getItem('pw');

    let userName = document.getElementById('userId');
    let userPw = document.getElementById('userPw');
   /*  let userRemember = document.getElementById("rememberMe"); */

    if(userName.value == storedName && userPw.value == storedPw){
        location.href="index.html";
        
    }else{
        alert('아이디 또는 비밀번호를 다시 확인해주세요');
    }
}
