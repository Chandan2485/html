let btn1 = document.querySelector(".b1")
btn1.addEventListener('click', add1);
function add1() {
    document.querySelector(".p1").style.display = "block"
    btn2.style.display = 'block'
}

let btn2 = document.querySelector(".b2")
btn2.addEventListener('click', remove1);
function remove1() {
    document.querySelector(".p1").style.display = "none"
    btn2.style.display = 'none'
}


// let div=document.querySelector(".p2")
let btn3=document.querySelector(".b3")
btn3.addEventListener('click', message);

function message(){
let input1 = document.querySelector("#i1")
let input2 = document.querySelector("#i2")
let input1_data = input1.value
let input2_data = input2.value
document.querySelector(".p2").innerText += `${input1_data} is a
 ${input2_data} boy 
`
document.querySelector(".p2").style.padding="10px"
}