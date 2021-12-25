let btn = document.getElementById('btn');
let box = document.getElementById('hiddenbuton');
let menu = document.getElementById('menu');
let croix = document.getElementById('hiddencroix');
let btn2 = document.getElementById('btn2');

btn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    box.classList.toggle('unactive');
    croix.classList.toggle('active');

    btn2.addEventListener('click', () =>{
        menu.classList.toggle('unactive');
        box.classList.toggle('unactive');
    });
});