import {loader} from './helper';
const sendForm = ({idForm, someElem = []}) => {
    const form = document.querySelector(idForm);
    const formElements = form.querySelectorAll('input');

    const statusBlock = document.createElement('div');
    statusBlock.style.color = '#fff';
    const loadText = `
    <div class="spinner-border text-primary mt-3" role="status">
        <span class="sr-only">Loading...</span>
    </div>`;
    const errorText = 'Oшибка';
    const successText = 'Спасибо. Наш менеджер свяжется с вами!';

    const validate = (list) => {
        let success = true;

        list.forEach(input => {
            if(!input.classList.contains('success')) {
                success = false;
            }
        });
        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.querySelector(elem.id);
            
            if(elem.type === 'block' && +element.textContent !== 0) {
                formBody.calculator = element.textContent;
            } else if(elem.type === 'input' && +element.value !== 0) {
                formBody.calculator = element.value;
            }
        });

        if(validate(formElements)) {

            statusBlock.innerHTML = loadText;
            form.append(statusBlock);

            formElements.forEach(input => {
                input.disabled = true;
                input.style.background = 'rgba(255,255,255,0.9)';
            });

            sendData(formBody)
            .then(() => {
                statusBlock.innerHTML = '';
                statusBlock.textContent = successText;
                formElements.forEach(input => {
                    input.disabled = false;
                    input.style.background = '';
                    input.value = '';
                    input.classList.remove('success');
                    input.style.outline = '';
                });
                setTimeout(()=>{
                    statusBlock.remove();
                }, 5000);
            }).catch((e)=> {
                console.log(e);
                statusBlock.innerHTML = '';
                statusBlock.textContent = errorText;
            });
        } else {
            alert('Данные не валидны, либо не заполнены все поля');
            
        }
    };

    try {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        });
    }catch(e) {
        console.log(e.message);
    }

};

export default sendForm;