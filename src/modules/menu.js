const menu = () => {
    const menu = document.querySelector('menu');

    const toggleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    const goToAncor = (e) => {
        document.querySelector(e.hash).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    document.addEventListener('click', (e) => {
        if(e.target.closest('.close-btn') || e.target.closest('.menu')) {
            e.preventDefault();
            toggleMenu();
        } else if(e.target.matches('ul > li > a')) {
            e.preventDefault();
            goToAncor(e.target.closest('a'));
            toggleMenu();
        } else if(e.target !== menu && menu.classList.contains('active-menu')) {
            toggleMenu();
        }
    });
        
};

export default menu;