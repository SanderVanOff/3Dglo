import {animate} from './helper.js';

const modal = () => {
    const popupBtns = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');


    const animateModal = () => {
        modal.style.transform = 'scale(0)';
        modal.style.transition = 'all 0.3s ease-in-out';
        modal.style.opacity = '0';

        if (modal.style.display !== 'block') {
            modal.style.display = 'block';
            animate({
                duration: 100,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.opacity = `${progress}`;
                    modal.style.transform = `scale(${progress})`;
                }
            });
        } else {
            animate({
                duration: 100,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.transform = 'scale(0)';
                    modal.style.opacity = '0';
                    setTimeout(() => {
                            modal.style.display = 'none';
                        }, 200);
                }
            });
        }
    };

    popupBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (document.documentElement.clientWidth > 768) {
                animateModal();
            } else {
                modal.style.transform = 'scale(1)';
                modal.style.opacity = '1';
                modal.style.display = 'block';
            }
        });
    });


    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            if (document.documentElement.clientWidth > 768) {
                animateModal();
            } else {
                modal.style.display = 'none';
            }
        }
    });

};

export default modal;