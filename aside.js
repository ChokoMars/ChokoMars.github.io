let burger = document.querySelector('.burgerIcon');
let message = document.querySelector('.message');
let asideMenu = document.querySelector('.aside');
let asideCallBack = document.querySelector('.asideCallBack');
let hidden = document.querySelector('.close');
let bubble = document.querySelector('.bubble')

// burger.addEventListener('click', function(){
//     if (asideMenu.style.display == 'none'){
//         console.log('Привет');
//         asideMenu.style.display == 'flex';
//     } else (asideMenu.style.display == 'none');
// });



burger.addEventListener('click', function(){
    asideMenu.classList.remove('hidden');
    bubble.style.opacity = "0.5";
});

hidden.addEventListener('click',function(){
    asideMenu.classList.add('hidden');
    bubble.style.opacity = "0";
});

bubble.addEventListener('click',function(){
    asideMenu.classList.add('hidden');
    bubble.style.opacity = "0";
});





