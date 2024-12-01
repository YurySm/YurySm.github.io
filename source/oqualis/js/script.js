document.addEventListener('DOMContentLoaded', () => {
        //popup
        try {
            const popup = document.querySelector('.popup'),
            popupTrigger = document.querySelector('.popup__btn'),
            popupClose = document.querySelector('.popup__close'),
            overlay = popup.querySelector('.overlay'),
            scroll = calcScroll();
            popupTrigger.addEventListener('click', () => {
                popup.style.display = 'block';
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${scroll}px`;
            });
    
            popupClose.addEventListener('click', () => {
                document.body.style.overflow = "";
                document.body.style.paddingRight = 0; 
                popup.style.display = 'none';
            });
    
            overlay.addEventListener('click', (e) => {
                if(e.target === overlay) {
                    document.body.style.overflow = "";
                    document.body.style.paddingRight = 0; 
                    popup.style.display = 'none';
                }
            });
    
            function calcScroll() {
                let div = document.createElement('div');
                div.style.width = '50px';
                div.style.height = '50px';
                div.style.overflowY = 'scroll';
                div.style.visibility = 'hidden';
    
                document.body.appendChild(div);
                let scrollWidth = div.offsetWidth - div.clientWidth;
                div.remove();
                return scrollWidth;
            }    
            calcScroll();
        } catch(e) {}

        //tabs 
        
        try {
            function tabs(tabSelector, contentSelector, activeClass) {
                const tabs = document.querySelectorAll(tabSelector),
                      contents = document.querySelectorAll(contentSelector);
                
                contents.forEach(content => {
                    content.style.display = 'none';
                }); 
                contents[0].style.display = 'block';
                tabs.forEach(tab => {
                    tab.classList.remove(activeClass);
                });
                tabs[0].classList.add(activeClass);
    
                
                tabs.forEach((tab, i) => {
                    tab.addEventListener('click', e =>  {
                        tabs.forEach(tab => {
                            tab.classList.remove(activeClass);
                        });
                        contents.forEach(content => {
                            content.style.display = 'none';
                        }); 
                        if(e.target = tabs[i]) {
                            tab.classList.add(activeClass);
                            contents[i].style.display = 'block';
                        }
                    });
                });
            }
            tabs('.do__tab', '.do__content', 'do__tab_active');
            tabs('.books__tab', '.books__content', 'books__tab_active');
        } catch(e) {}

        //mob menu 
        const humburger = document.querySelector('.humburger'),
                logo = document.querySelector('.header__logo'),
                logoMob = document.querySelector('.header__logo_mob'),
                mobMenu = document.querySelector('.nav_mob');

        humburger.addEventListener('click', () => {
            if(humburger.classList.contains('humburger_active')) {
                humburger.classList.remove('humburger_active');
                mobMenu.classList.remove('nav_mob_active');
                document.body.style.overflow = "";
                logo.style.display = "block";
                logoMob.style.display = "none";
            } else {
                humburger.classList.add('humburger_active');
                mobMenu.classList.add('nav_mob_active');
                document.body.style.overflow = "hidden";
                logo.style.display = "none";
                logoMob.style.display = "block";
            }
        });

        // online cards
        const doCards = document.querySelectorAll('.do__content_card'),
                doActive = document.querySelectorAll('.do__content_card_active');
                doActive.forEach(item => {
                    item.style.display = "none";
                })

                doCards.forEach((item, i) => {
                    item.addEventListener('mouseover', e => {
                        console.dir(e.target.parentElement);
                        if(e.target.parentElement == doCards[i] || e.target.parentElement == doActive[i] ) {
                            doActive[i].style.display = 'flex';
                        }
                    });
                    item.addEventListener('mouseout', e => {
                        console.dir(e.target.parentElement);
                        if(e.target.parentElement == doCards[i]) {
                            doActive[i].style.display = 'none';
                        }
                    });
                });

        // mailer
        $(document).ready(function(){
            $('.contacts__form').submit(function(e) {
                e.preventDefault();
                $.ajax({
                    type: "POST",
                    url: "mailer/smart.php",
                    data: $('.contacts__form').serialize()
                }).done(function() {
                    $('.contacts__form').find("input").val("");
                    $('.popup__ansver').fadeIn('slow').delay(2000).fadeOut(1000);
                    $('.contacts__form').trigger('reset');
                });
                console.log(FormData);
                return false;
            });
        });                

});