const slider = ({
    sliderContent,
    sliderBtnsClass,
    nextSlideBtn,
    prevSlideBtn,
    sliderItemClass,
    dotsContentClass,
    dotClass,
    dotActiveClass = 'dot-active',
    slideActiveClass = 'portfolio-item-active',
    timer
}) => {

    if(!sliderContent || !sliderItemClass) {
        return;
    }
    const sliderBlock = document.querySelector(`.${sliderContent}`);
    const sliders = document.querySelectorAll(`.${sliderItemClass}`);
    const portfolioDots = document.querySelector(`.${dotsContentClass}`);

    let currentSlide = 0;
    let dots;
    let interval;

    const createDots = () => {
        sliders.forEach(() => {
            const dot = document.createElement('li');
            dot.classList.add(dotClass);
            portfolioDots.append(dot);
        });
        dots = document.querySelectorAll(`.${dotClass}`);
        dots[currentSlide].classList.add(dotActiveClass);
    };

    const prevSlide = (elems, idx, className) => {
        elems[idx].classList.remove(className);
    };

    const nextSlide = (elems, idx, className) => {
        elems[idx].classList.add(className);
    };

    const autoSlide = () => {
        prevSlide(sliders, currentSlide, slideActiveClass);
        prevSlide(dots, currentSlide, dotActiveClass);
        currentSlide++;
        if (currentSlide >= sliders.length) {
            currentSlide = 0;
        }
        nextSlide(sliders, currentSlide, slideActiveClass);
        nextSlide(dots, currentSlide, dotActiveClass);
    };

    const startSlide = (timer = 2000) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches(`.${dotClass}, .${sliderBtnsClass}`)) {
            return;
        }

        prevSlide(sliders, currentSlide, slideActiveClass);
        prevSlide(dots, currentSlide, dotActiveClass);

        if (e.target.matches(nextSlideBtn)) {
            currentSlide++;
        } else if (e.target.matches(prevSlideBtn)) {
            currentSlide--;
        } else if (e.target.classList.contains(dotClass)) {
            dots.forEach((dot, idx) => {
                if (e.target === dot) {
                    currentSlide = idx;
                }
            });
        }

        if (currentSlide >= sliders.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = sliders.length - 1;
        }

        nextSlide(sliders, currentSlide, slideActiveClass);
        nextSlide(dots, currentSlide, dotActiveClass);
    });


    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches(`.${dotClass}, .${sliderBtnsClass}`)) {
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches(`.${dotClass}, .${sliderBtnsClass}`)) {
            startSlide(timer);
        }
    }, true);

    createDots();
    startSlide(timer);

};

export default slider;