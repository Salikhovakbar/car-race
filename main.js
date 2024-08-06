const boxs = document.querySelectorAll('.box')
const box = document.querySelector(".count-number")
const speed = ['ease', 'ease-in', 'linear', 'easein-out', 'ease-out']
const btn = document.getElementById('btn')
let number = 3
box.innerHTML = number
setInterval(() => {
    if(number > 1) {  
        number = --number
        box.innerHTML = number;
    }
    else{
        box.style.display = 'none';
    }
}, 1000)
boxs.forEach(e => {
    let digit = Math.random() * 10 -5
    digit = Math.ceil(Math.abs(digit))
    e.style.animationTimingFunction= speed[digit]
    console.log(digit);
})