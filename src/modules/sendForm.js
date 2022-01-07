const sendForm = ({idForm}) => {
    const form = document.querySelector(idForm);
    const formElements = form.querySelectorAll('input');

    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Oшибка';
    const successText = 'Спасибо. Наш менеджер свяжется с вами!';

    const validate = (list) => {
        let success = true;

        list.forEach(input => {
            if(!input.classList.contains('success')) {
                success = false;
            }
        })
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

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });
        if(validate(formElements)) {
            sendData(formBody)
            .then(() => {
                statusBlock.textContent = successText;
                formElements.forEach(input => {
                    input.value = '';
                    input.classList.remove('success');
                    input.style.outline = '';
                });
            }).catch((e)=> {
                console.log(e);
                statusBlock.textContent = errorText;
            });
        } else {
            alert('Данные не валидны');
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