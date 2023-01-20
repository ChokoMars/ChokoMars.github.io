let button = document.querySelector('.slider__hide-text');
let arrow = document.querySelector('.slider__arrow-hide');
let hideCompany = document.querySelectorAll('.slider__hide-elem');
let hideCompanyTablet = document.querySelectorAll ('.slider__hide-tablet-elem');

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

button.addEventListener('click', function(){
    if (button.textContent == 'Показать все'){
        arrow.style.transform = 'rotate(180deg)';
        button.textContent = 'Скрыть';
        for(let i = 0;i<hideCompany.length;i++){
            hideCompany[i].style.display='flex';
        }
        for(let i = 0;i<hideCompanyTablet.length;i++){
            hideCompanyTablet[i].style.display='flex';
        }

    } else {
        arrow.style.transform = 'rotate(0)';
        button.textContent = 'Показать все';
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
