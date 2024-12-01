window.addEventListener('DOMContentLoaded', () => {
    // mob menu
    const humburger = document.querySelector('.humburger'),
        header = document.querySelector('.header'),
        courses = document.getElementById('courses'),
        others = document.getElementById('others'),
        coursesBlock = document.querySelector('.courses_block'),
        otherBlock = document.querySelector('.other_block'),
        othersBlockItems = document.querySelectorAll('.others_block li'),
        coursesBlockItems = document.querySelectorAll('.courses_block li');
        
    
    humburger.addEventListener('click', () => {
        header.classList.toggle('header__active');
        document.body.classList.toggle('hidden');
        humburger.classList.toggle('humburger_close');
        coursesBlock.classList.remove('block');
        otherBlock.classList.remove('block');
    });

    try {
        others.addEventListener('click', () => {
            otherBlock.classList.add('fade');
            otherBlock.classList.toggle('block');
        });
        othersBlockItems.addEventListener('click', () => {
            othersBlock.classList.remove('block');
            header.classList.remove('header__active');
            document.body.classList.remove('hidden');
            humburger.classList.remove('humburger_close');
        });
    } catch(e) {}

    try {
        courses.addEventListener('click', () => {
            coursesBlock.classList.add('fade');
            coursesBlock.classList.toggle('block');
        });
        coursesBlockItems.addEventListener('click', () => {
            coursesBlock.classList.remove('block');
            header.classList.remove('header__active');
            document.body.classList.remove('hidden');
            humburger.classList.remove('humburger_close');
        });
    } catch(e) {}

    //promo
    //popup  
    const btnSing = document.querySelectorAll('.btn_sing'),
        popupWeek = document.querySelector('.popup_week'),
        overlayPopup = document.querySelector('.popup_overlay'),
        popupClose = document.querySelector('.popup_close'),
        btnRequest = document.querySelector('.questions__btn'),
        popupRequest = document.querySelector('.popup_request'),
        overlayRequest = document.querySelector('.overlay_request');
    
        
    try {
        btnSing.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                popupWeek.classList.remove('fadeOut');
                popupWeek.classList.add('fade');
                overlayPopup.classList.add('block');
                popupWeek.classList.add('block');
                document.body.classList.add('hidden');
            });
        });
        popupClose.addEventListener('click', (e) => {
            e.preventDefault();
            popupWeek.classList.remove('fade');
            popupWeek.classList.add('fadeOut');
            overlayPopup.classList.remove('block');
            popupWeek.classList.remove('block');
            document.body.classList.remove('hidden');
            popupRequest.classList.add('fadeOut');
            popupRequest.classList.remove('fade');
            overlayRequest.classList.remove('block');
            popupRequest.classList.remove('block');
        }); 
        overlayPopup.addEventListener('click', (e) => {
            
            if (e.target === overlayPopup) {
                popupWeek.classList.remove('fade');
                popupWeek.classList.add('fadeOut');
                overlayPopup.classList.remove('block');
                popupWeek.classList.remove('block');
                document.body.classList.remove('hidden');
            }
        }); 
        overlayRequest.addEventListener('click', (e) => {
            if (e.target === overlayRequest) {
                popupRequest.classList.add('fadeOut');
                popupRequest.classList.remove('fade');
                overlayRequest.classList.remove('block');
                popupRequest.classList.remove('block');
                document.body.classList.remove('hidden');
            }            
        }); 
    } catch(e) {}

    //sofrware 
    try {
        btnRequest.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(popupRequest);
            popupRequest.classList.remove('fadeOut');
            popupRequest.classList.add('fade');
            overlayRequest.classList.add('block');
            popupRequest.classList.add('block');
            document.body.classList.add('hidden');
        });
    } catch(e) {}

    //software program
    const modules = document.querySelectorAll('.software_program__module_name div.descr'),
    pluses = document.querySelectorAll('.software_program__module_plus');
    
    try {
        pluses.forEach((item, i ) => {
            item.addEventListener('click', () => {
                modules[i].classList.toggle('block');
                item.classList.toggle('active');
            });
        });
    } catch(e) {}

        //software return
    const itemsDescr = document.querySelectorAll('.return__item_group_item div.descr'),
            returnItems = document.querySelectorAll('.return__item_group_item');

    try {
        returnItems.forEach((item, i ) => {
            item.addEventListener('click', (e) => {   
                if (itemsDescr[i].classList[1] === 'block') {
                    item.classList.remove('border-color');
                    itemsDescr[i].classList.remove('block');
                    console.log('asdas');
                } else {
                    itemsDescr.forEach(item => {
                        item.classList.remove('block');
                    });
                    returnItems.forEach(item => {
                        item.classList.remove('border-color');
                    }); 
                    item.classList.add('border-color');
                    itemsDescr[i].classList.add('block');
                }       
            });

        });
    } catch(e) {}

    // timer engineer, automatic
        const timer = (id, deadline) => {
            const addZero = (num) => {
                if (num <= 9) {
                    return `0${num}`;
                } else {
                    return num;
                }
            };
            
            const getTimeRemaining = (endtime) => {
                const offset = new Date().getTimezoneOffset()*60*1000,
                    t = Date.parse(endtime) - Date.parse(new Date()) + offset,
                    seconds = Math.floor((t / 1000) % 60),
                    minutes = Math.floor((t / 1000 / 60) % 60),
                    hours = Math.floor((t/1000/60/60) % 24),
                    days = Math.floor((t/1000/60/60/24));
        
                return {
                    total: t,
                    seconds,
                    minutes,
                    hours,
                    days
                };
            };
            
            const setClock = (selector,endtime) => {
                const timer = document.querySelector(selector),
                        days = timer.querySelector('#days'),
                        hours = timer.querySelector('#hours'),
                        minutes = timer.querySelector('#minutes'),
                        seconds = timer.querySelector('#seconds'),
                        timeInterval = setInterval(updateClock, 1000);
                
                updateClock();
                
                function updateClock() {
                    const t = getTimeRemaining(endtime);
        
                    days.textContent = addZero(t.days);
                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);
        
                    if (t.total <= 0) {
                        days.textContent = "00";
                        hours.textContent = "00";
                        minutes.textContent = "00";
                        seconds.textContent = "00";
        
                        clearImmediate(timeInterval);
                    }
        
                }
            };
        
            setClock(id, deadline);
        };
        
  
    try {
        timer('.automation_counter', '2021-03-14');
    } catch(e) {}

    try {
        timer('.counter_engineer', '2021-03-14');
    } catch(e) {}

    //faq 
    const poligon = document.querySelectorAll('.faq__item_poligon'),
        question = document.querySelectorAll('.faq__item_question');
        ansver = document.querySelectorAll('.faq__item_ansver');

    question.forEach((item, i) => {
        item.addEventListener('click', () => {
            poligon[i].classList.toggle('active');
            ansver[i].classList.toggle('block');
        });
    });

    //mentership

    const btn = document.querySelectorAll('.name_btn'),
            descr = document.querySelectorAll('.read__item_descr');
    
    try {
        btn.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if (descr[i].classList[1] === 'block') {
                    descr[i].classList.remove('block');
                    console.log('asdas');
                } else {
                    descr.forEach(item => {
                        item.classList.remove('block');
                    });
                    descr[i].classList.add('block');
                } 
            });
        });
    } catch(e){}



});