const smoothScroll = () => {

    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul >li > a');
    const scrollBtn = document.querySelector('a[href="#service-block"]');

    const goToAncor = (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector(e.currentTarget.hash).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => (goToAncor(e)));
    });
    scrollBtn.addEventListener('click', (e) => (goToAncor(e)));
    
};

export default smoothScroll;