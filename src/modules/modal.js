const modal = () => {
    const popupBtns = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalClose = modal.querySelector('.popup-close');


    const animateModal = () => {
        modal.style.transform = 'scale(0)';
        modal.style.transition = 'all 0.3s ease-in-out';
        modal.style.opacity = '0';

        if (modal.style.display !== 'block') {
            modal.style.display = 'block';
            setTimeout(() => {
                modal.style.opacity = '1';
                modal.style.transform = 'scale(1)';
            }, 100);
        } else {
            modal.style.transform = 'scale(0)';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 100);
        }
    };

    popupBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if(document.documentElement.clientWidth > 768) {
                animateModal();
            } else {
                modal.style.transform = 'scale(1)';
                modal.style.opacity = '1';
                modal.style.display = 'block';
            }
        });
    });

    modalClose.addEventListener('click', () => {
        if(document.documentElement.clientWidth > 768) {
            animateModal();
        } else {
            modal.style.display = 'none';
        }
    });



};

export default modal;