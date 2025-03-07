// LOGIN BUTTON :
const loginButton = document.querySelector("#loginButton");

const check = () => {
    const userName = document.querySelector("#userNameInput").value;
    const password = document.querySelector("#passwordInput").value;

    if(userName === 'shanikumar' && password === '321456'){
        window.location.href = "home.html";
       // alert("Successfully Login..");
    }else{
        alert("Wrong Information, try again...");
    };
};
loginButton.addEventListener("click", check);


//CREATE BUTTON :

const createButton = document.querySelector("#createButton");
const openCreate = () => {
    window.location.href = "createNewAcount.html";
};
createButton.addEventListener("click",openCreate);


const body = document.querySelector("body");
const page1 = document.querySelector(".page1");
const inputs = document.querySelector("#inputs");
const input1 = document.querySelector("#userNameInput");
const input2 = document.querySelector("#passwordInput");
// const innerCircle = document.querySelector(".innerCircle");
const login = document.querySelector("#loginButton");
const forgot = document.querySelector("#forgotButton");
const create = document.querySelector("#createButton");

let elements = [page1, inputs, input1, input2, login, forgot, create];


const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");
const btn4 = document.querySelector("#button4");
const btn5 = document.querySelector("#button5");
const btn6 = document.querySelector("#button6");
const btn7 = document.querySelector("#button7");
const btn8 = document.querySelector("#button8");
const btn9 = document.querySelector("#button9");
const btn10 = document.querySelector("#button10");

   
btn1.addEventListener("click", color = () => {
    elements.forEach(element => {
        element.style.background = "linear-gradient(#838383 0%, #4e4e4e 10%, #343434 50%, #1e1e1e 100%)";
    });    
    body.style.backgroundColor = "#393939";
});

btn2.addEventListener("click", color = () =>{
    elements.forEach(element => {
        element.style.background = "linear-gradient(#2503cd 0%, #0b0193 10%, #010158 50%, #050137 100%)";
    });    
    body.style.backgroundColor = "#06066e";
})

btn3.addEventListener("click", color = () =>{
    elements.forEach(element => {
        element.style.background = "linear-gradient(#bbd003 0%, #8e9803 10%, #515e01 50%, #2c3000 100%)";
    });    
    body.style.backgroundColor = "#6d6c03";
})

btn4.addEventListener("click", color = () =>{
    elements.forEach(element => {
        element.style.background = "linear-gradient(#d003c6 0%, #980395 10%, #5e0137 50%, #2b0030 100%)";
    });    
    body.style.backgroundColor = "#610364";
})

btn5.addEventListener("click", color = () =>{
    elements.forEach(element => {
        element.style.background = "linear-gradient(#d0035c 0%, #98035f 10%, #550220 50%, #300016 100%)";
    });    
    body.style.backgroundColor = "#640330";
})

"linear-gradient(#d0035c 0%, #610364 )"

btn6.addEventListener("click", color = () =>{
    elements.forEach(element => {
        element.style.background = "linear-gradient(#d05c03 0%, #983a03 10%, #551e02 50%, #300d00 100%)";
    });    
    body.style.backgroundColor = "#641e03";
})

btn7.addEventListener("click", color = () =>{
    elements.forEach(element => {
        element.style.background = "linear-gradient(#03aad0 0%, #037d98 10%, #024b55 50%, #002c30 100%)";
    });    
    body.style.backgroundColor = "#035964";
})

btn8.addEventListener("click", color = () =>{
    elements.forEach(element => {
        element.style.background = "linear-gradient(#03981e 0%,#03981e 10%,#025511 50%,#003001 100%)";
    });    
    body.style.backgroundColor = "#166403";
})

btn9.addEventListener("click", color = () =>{
    elements.forEach(element => {
        element.style.background = "linear-gradient(#d00303 0%, #980303 10%, #550202 50%, #300000 100%)";
    });    
    body.style.backgroundColor = "#640303";
})

btn10.addEventListener("click", color = () =>{
    elements.forEach(element => {
        element.style.background = "linear-gradient(#7e03d0 0%, #700398 10%, #3f0255 50%, #230030 100%)";
    });    
    body.style.backgroundColor = "#480364";
})

const ofBtn = document.querySelector("#off");
const btnContainer = document.querySelector(".btnContainer");

ofBtn.addEventListener("click", on = () => {
    if(ofBtn.innerHTML === "off"){
        ofBtn.innerHTML = "on";
        btnContainer.style.display = "block";
        ofBtn.style.backgroundColor = "#adff2f";
    }else{
        ofBtn.innerHTML = "off";
        btnContainer.style.display = "none";
        ofBtn.style.backgroundColor = "#ff0000";
    }
});