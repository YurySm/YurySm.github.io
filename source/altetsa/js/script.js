document.addEventListener('DOMContentLoaded', () => {
    //menu
    
    const humburger = document.querySelector('.header__humburger'),
          close = document.querySelector('.header__close'),
          menu = document.querySelector('.header__menu'),
          menuItems = document.querySelectorAll('.header__nav-item');

    let source = document.querySelectorAll('.header__logo > picture > source')[1].getAttribute('srcset');
    
    humburger.addEventListener('click', () => {
        if(menu.classList.contains('fadeOut')) {
            menu.classList.remove('fadeOut');
        }
        menu.classList.add('fade');
        menu.style.display = 'block';
        close.style.display = 'block';
        humburger.style.display = 'none';
        sourceNew = source.replace('temp', 'mob');
        document.querySelectorAll('.header__logo > picture > source')[1].setAttribute('srcset', sourceNew);
    });
    close.addEventListener('click', () => {
        menu.classList.remove('fade');
        menu.classList.add('fadeOut');
        humburger.style.display = 'block';
        close.style.display = 'none';
        document.querySelectorAll('.header__logo > picture > source')[1].setAttribute('srcset', source);
        setTimeout(() => {
            menu.style.display = 'none';
        },600);
        
    });
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('fade');
            menu.classList.add('fadeOut');
            humburger.style.display = 'block';
            close.style.display = 'none';
            document.querySelectorAll('.header__logo > picture > source')[1].setAttribute('srcset', source);
            setTimeout(() => {
                menu.style.display = 'none';
            },600);
        });
    });

    try{
        const element = document.querySelector('#services');
        const choices = new Choices(element, {
            searchEnabled: false,
            shouldSort: false,
            itemSelectText: '',
            placeholder: false,
        });
    }catch(e){}



    // tabs
    try{
        const tabs__btns = document.querySelectorAll('.tabs__btn'),
          tabs__content = document.querySelectorAll('.tabs__content');

        tabs__content.forEach(content => {
            content.classList.add('fadeOut');
            content.classList.remove('fade');
            content.style.display = 'none';
        });

        tabs__content[0].classList.remove('fadeOut');
        tabs__content[0].classList.add('fade');
        tabs__content[0].style.display = 'flex';

        tabs__btns.forEach((btn, i )=> {
            btn.addEventListener('click', e => {
                e.preventDefault();
                tabs__btns.forEach( btn => {
                    btn.classList.remove('tabs__btn_active');
                })
                // if(btn === e.target) {
                    btn.classList.add('tabs__btn_active');
                    tabs__content.forEach(content => {
                        content.classList.add('fadeOut');
                        content.classList.remove('fade');
                        content.style.display = 'none';     
                    });
                // }
                tabs__content[i].classList.remove('fadeOut');
                tabs__content[i].classList.add('fade');
                tabs__content[i].style.display = 'flex';
            })
        })
    } catch(e){}
    
    // tabs selects
    const model1 = document.querySelector('.model1'),
          model2 = document.querySelector('.model2')
    function initialSelect(selector){
        try{
            const element = selector;
            const choices = new Choices(element, {
                searchEnabled: false,
                shouldSort: false,
                itemSelectText: '',
                placeholder: false,
            });
        }catch(e){}
    }
    initialSelect(model1);
    initialSelect(model2);

    //faq
    const btnsFaq = document.querySelectorAll('.price__faq_item_btn'),
          textFaqItem = document.querySelectorAll('.price__faq_item_text');

    btnsFaq.forEach((btn, i)=> {
        btn.addEventListener('click', () => {
            textFaqItem.forEach(text => {
                text.classList.add('fadeOut');
                btn.parentNode.querySelector('.trigger').style.transform = 'rotate(0deg)';
                text.classList.remove('fade');
                text.style.display = 'none';
            });
            btnsFaq.forEach(btn=> {
                btn.parentNode.querySelector('.trigger').style.transform = 'rotate(0deg)';
            });

            
            textFaqItem[i].classList.add('fade');
            textFaqItem[i].style.display = 'block';
            
            if(btn.hasAttribute('data-active')){
                btn.removeAttribute('data-active', '');
                textFaqItem[i].classList.remove('fade');
                textFaqItem[i].classList.add('fadeOut');
                btn.parentNode.querySelector('.trigger').style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    textFaqItem[i].style.display = 'none';
                }, 500);
            } else {
                btnsFaq.forEach(btn=> {
                    btn.removeAttribute('data-active', '');
                    btn.parentNode.querySelector('.trigger').style.transform = 'rotate(0deg)';
                });
                btn.setAttribute('data-active', '');
                textFaqItem[i].classList.remove('fadeOut');
                textFaqItem[i].classList.add('fade');
                textFaqItem[i].style.display = 'block';
                btn.parentNode.querySelector('.trigger').style.transform = 'rotate(45deg)';
            }

        })
    })

    function showModal() {
        const modal = document.querySelector('.tabs__content_ok'),
              close = modal.querySelector('.ok__close');
        
        modal.classList.remove('fadeOut');
        modal.classList.add('fade');
        modal.style.display = 'block';
        close.addEventListener('click', () => {
                modal.classList.remove('fade');
                modal.classList.add('fadeOut');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500);
        })
    }
});