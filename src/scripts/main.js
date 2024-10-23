document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const quest = document.querySelectorAll('[data-faq-quest]');

    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const currentPosition = window.scrollY;

        if(currentPosition > heightHero){
            displaysHeaderElements();
        }else{
            hideHeaderElements();
        }

    })


    // Progamacao das abas em weapons
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click' , function(botao){
            const tabTarget = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
            omitAllTab();
            tab.classList.add('weapons__list--is--active')
            omitAllButton();
            botao.target.classList.add('weapons__tabs__button--is--active')
        })
    }

    // Accordion do FAQ
    for (let i = 0; i < quest.length; i++){
        quest[i].addEventListener('click', openOrClose);
    }
})

function openOrClose(elemento){
    const classe = 'faq__quest__iten--is-open';
    const elementoFather = elemento.target.parentNode;

    elementoFather.classList.toggle(classe);
}

function omitAllTab(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('weapons__list--is--active')
    }
}

function omitAllButton(){
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('weapons__tabs__button--is--active')
    }
}

function hideHeaderElements(){
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function displaysHeaderElements(){
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}