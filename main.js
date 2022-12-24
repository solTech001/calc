const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const equal = document.querySelector("#equal");
const p2 = document.querySelector("#p2");
const sin = document.querySelector("#sin");
const cos = document.querySelector("#cos");
const Sqrt = document.querySelector("#Sqrt");

const btns = document.querySelectorAll(".btn-outline-dark");

btns.forEach(
    (btn)=>{
        btn.addEventListener(
            "click",()=>{
                if (btn.innerText == '.') {
                    display.innerText += btn.innerText 
                }
                else if(display.innerText == '0'){
                    display.innerText = btn.innerText 
                }
                else{
                    display.innerText += btn.innerText 
                }
            }
        )
    }
)
clear.addEventListener(
    'click', ()=>{
        display.innerText = '0'
    }
)

backspace.addEventListener(
    'click',()=>{
        display.innerText = display.innerText.slice(0 , -1)
        if (display.innerText == '') {
            display.innerText = 0
        }
    }
)

equal.addEventListener(
    'click',()=>{
        try {
            display.innerText = eval(display.innerText)
        } catch (error) {
            display.innerText = "Error"
        }
    }
)
per.addEventListener(
    'click', ()=>{
        try {
            let num = Number(display.innerText)
            display.innerText = num/100
        } catch (error) {
            display.innerText = "Error"
        }
    }
)
tan .addEventListener(
    'click', ()=>{
        try {
            let num = Number(display.innerText)
            display.innerText = Math.tan(num)
        } catch (error) {
            display.innerText = "Error" 
        }
    }
)
pie.addEventListener(
    'click', ()=>{
        try {
            display.innerText = Math.PI
        } catch (error) {
            display.innerText = "Error"
        }
    }
)
pow.addEventListener(
    'click', ()=>{      
        try {
            let num = Number(display.innerText)
            display.innerText = Math.pow(num, 3)
        } catch (error) {
            display.innerText = "Error"
        }
    }
)
p2.addEventListener(
    'click', ()=>{
        try {
            let num = Number(display.innerText)
            display.innerText = Math.pow(num, 2)
        } catch (error) {
            display.innerText = "Error"
        }
    }
)
sin.addEventListener(
    'click', ()=>{
        try {
            let num = Number(display.innerText)
            display.innerText = Math.sin(num)
        } catch (error) {
            display.innerText = "Error"
        }
    }
)
cos.addEventListener(
    'click', ()=>{
        try {
            let num = Number(display.innerText)
            display.innerText = Math.cos(num)
        } catch (error) {
            display.innerText = "Error"
        }
    }
)
Sqrt.addEventListener(
    'click', ()=>{      
        try {
            let num = Number(display.innerText)
            display.innerText = Math.sqrt(num)
        } catch (error) {
            display.innerText = "Error"
        }
    }
)


const allowedKeys = ["0","1","2","3","4","5","6","7","8","9","-","+","*","/","(",")","."];

const body = document.querySelector('body');
body.addEventListener('keyup',(e)=>{
    if (allowedKeys.includes(e.key)) {
        if(e.key == "."){
            display.innerText += e.key
        }
        else if (display.innerText  == "0") {
            display.innerText = e.key;
        } else{
            display.innerText += e.key;
        }
    }
    else if (e.key == "Enter") {
        try {
            display.innerText = eval(display.innerText)
        } catch (error) {
          display.innerText = "Error";
        }
    }
    else if (e.key == "Backspace"){
        display.innerText = display.innerText.slice(0,-1);
        if (display.innerText == "") {
            display.innerText = "0";
        }
    }

})