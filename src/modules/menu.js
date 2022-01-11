import {goToAncor} from './helper';

const menu = () => {
    const menu = document.querySelector('menu');
    const mainAncor = document.querySelector('a[href="#service-block"]');

    const toggleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    // const goToAncor = (e) => {
    //     document.querySelector(e.hash).scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'start'
    //     });
    // };

    document.addEventListener('click', (e) => {
        try {
            if(e.target.closest('.close-btn') || e.target.closest('.menu')) {
                e.preventDefault();
                toggleMenu();
            } else if(e.target.matches('ul > li > a')) {
                e.preventDefault();
                goToAncor(e.target.closest('a'));
                toggleMenu();
            } else if (mainAncor === e.target.closest('a')) {
                e.preventDefault();
                goToAncor(mainAncor);
            } else if(e.target !== menu && menu.classList.contains('active-menu')) {
                toggleMenu();
            }
        }catch(err){
            console.log(err);
        }
        
    });
        
};

export default menu;