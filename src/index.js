import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calculator from './modules/calculator';
import forms from './modules/forms';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sendForm from './modules/sendForm';

timer('14 january 2022');
menu();
modal();
calculator(100);
forms();
tabs();
slider({
    sliderContent: 'portfolio-content',
    sliderItemClass: 'portfolio-item',
    sliderBtnsClass: 'portfolio-btn',
    nextSlideBtn: '#arrow-right',
    prevSlideBtn: '#arrow-left',
    slideActiveClass: 'portfolio-item-active',
    dotsContentClass: 'portfolio-dots',
    dotClass: 'dot',
    dotActiveClass: 'dot-active',
    timer: 3000
});
sendForm({
    idForm: '#form1',
    someElem: [{
        type: 'block',
        id: '#total'
    }]
});
sendForm({
    idForm: '#form2',
    someElem: [{
        type: 'block',
        id: '#total'
    }]
});
sendForm({
    idForm: '#form3',
    someElem: [{
        type: 'block',
        id: '#total'
    }]
});