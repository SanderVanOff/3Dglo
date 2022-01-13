const forms = () => {
    const allForms = document.querySelectorAll('form');

    const getValidMessage = (elem, status) => {

        if (status === 'success' && elem.value !== '') {
            elem.classList.add(status);
            elem.style.outline = '2px solid #28a745';
        } else if (status !== 'success' && elem.value !== '') {
            elem.classList.remove('success');
            elem.style.outline = '2px solid #dc3545';
        } else {
            elem.classList.remove('success');
            elem.style.outline = '';
        }

    };

    allForms.forEach(form => {
        const inputs = form.querySelectorAll('input');

        inputs.forEach(input => {
            if (input.type === 'text' || input.placeholder === 'Ваше сообщение') {
                input.addEventListener('blur', (e) => {
                   
                    if (!/[^а-яА-ЯёЁ0-9 -]/ig.test(e.target.value) && e.target.value.length > 2) {
                        getValidMessage(e.target, 'success');
                        input.setCustomValidity('');
                    } else if(e.target.value.length <= 2) {
                        getValidMessage(e.target, 'error');
                        input.setCustomValidity('допустимо не меньше 2 символов');
                    }else {
                        getValidMessage(e.target, 'error');
                        input.setCustomValidity('допустима только кириллица');
                        
                    }
                    // e.target.value= e.target.value.replace(/[^а-яА-ЯёЁ0-9 -]/ig, '');
                });
            } else if (input.type === 'email') {
                input.addEventListener('blur', (e) => {
                    if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(e.target.value)) {
                        getValidMessage(e.target, 'success');
                        const arr = [];
                        e.target.value.replace(/([^(a-z0-9) \.\@\-\_])/gi, (match) => {
                            arr.push(match);
                            if (arr.length) {
                                e.target.value = arr.join('');
                            }
                        });
                    } else {
                        getValidMessage(e.target, 'error');
                    }

                });
            } else if (input.type === 'tel') {
                input.addEventListener('blur', (e) => {

                    if (!/[^0-9\+ \-\(\)]/ig.test(e.target.value) && e.target.value.length >= 6 && e.target.value.length <= 12) {
                        getValidMessage(e.target, 'success');
                        input.setCustomValidity('');
                        const arr = [];
                        e.target.value.replace(/([7-8]{1})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/gi, (match, p1, p2, p3, p4, p5) => {
                            e.target.value = `+7 (${p2})-${p3}-${p4}-${p5}`;
                        });
                    } else if(e.target.value.length < 6 || e.target.value.length > 12){
                        getValidMessage(e.target, 'error');
                        input.setCustomValidity('длина номера телефона должна быть не менее 6 символов и не более 12 символов');
                    }else {
                        getValidMessage(e.target, 'error');
                        input.setCustomValidity('разрешены цифры, знак “+”, круглые скобки и дефис');
                    }
                });
            }
        });
    });

};

export default forms;