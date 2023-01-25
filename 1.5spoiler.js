let button = document.querySelectorAll('.slider__hide-text');
let arrow = document.querySelectorAll('.slider__arrow-hide');
let hideCompany = document.querySelectorAll('.slider__hide-elem');
let hideCompanyTablet = document.querySelectorAll ('.slider__hide-tablet-elem');
let hideTechnics = document.querySelector('.slider__hideTechnics');


window.addEventListener('resize', (e) => {
    if (window.innerWidth < 1120 && window.innerWidth > 767){
        for(let i = 0;i<hideCompanyTablet.length;i++){
            hideCompanyTablet[i].style.display='none';
        }
    }
    if (window.innerWidth > 1119){
        for(let i = 0;i<hideCompanyTablet.length;i++){
            hideCompanyTablet[i].style.display='flex';
        }
    }
  });

button[0].addEventListener('click', function(){
    if (button[0].textContent == 'Показать все'){
        arrow[0].style.transform = 'rotate(180deg)';
        button[0].textContent = 'Скрыть';
        for(let i = 0;i<hideCompany.length;i++){
            hideCompany[i].style.display='flex';
        }
        for(let i = 0;i<hideCompanyTablet.length;i++){
            hideCompanyTablet[i].style.display='flex';
        }

    } else {
        arrow[0].style.transform = 'rotate(0)';
        button[0].textContent = 'Показать все';
        for(let i = 0;i<hideCompany.length;i++){
            hideCompany[i].style.display='none';
        }
        if(window.innerWidth < 1120){
            for(let i = 0;i<hideCompanyTablet.length;i++){
                hideCompanyTablet[i].style.display='none';
            }
        }
    }
});

button[1].addEventListener('click', function(){
    if (button[1].textContent == 'Показать все'){
        arrow[1].style.transform = 'rotate(180deg)';
        button[1].textContent = 'Скрыть';
        hideTechnics.style.display = 'flex';

    } else {
        arrow[1].style.transform = 'rotate(0)';
        button[1].textContent = 'Показать все';
        if(window.innerWidth < 1120){
            hideTechnics.style.display = 'none';
        }
    }
});

window.addEventListener('resize', (e) => {
    if (window.innerWidth < 1120 && window.innerWidth > 767){
        for(let i = 0;i<hideCompanyTablet.length;i++){
            hideTechnics.style.display='none';
        }
    }
    if (window.innerWidth > 1119){
        for(let i = 0;i<hideCompanyTablet.length;i++){
            hideTechnics.style.display='flex';
        }
    }
  });


