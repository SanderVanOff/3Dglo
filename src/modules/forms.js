const forms = () => {
    const allForms = document.querySelectorAll('form');
    allForms.forEach(form => {
        const inputs = form.querySelectorAll('input');

        inputs.forEach(input => {
            if(input.type === 'text' || input.placeholder === 'Ваше сообщение') {
                input.addEventListener('blur', (e) => {
                    e.target.value= e.target.value.replace(/[^а-яА-ЯёЁ0-9 -]/ig, '');
                });
            } else if(input.type === 'email') {
                input.addEventListener('blur', (e) => {
                    const arr = [];
                    e.target.value.replace(/([^(a-z0-9) \.\@\-\_])/gi, (match )=> {
                        arr.push(match)
                        if(arr.length){
                            e.target.value = arr.join('');
                        }
                    });
                }); 
            } else if(input.type === 'tel') {
                input.addEventListener('blur', (e) => {
                    const arr = [];
                    e.target.value.replace(/([7-8]{1})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/gi, (match, p1, p2, p3, p4, p5)=> {
                        e.target.value = `+7 (${p2})-${p3}-${p4}-${p5}`;
                    });
                }); 
            }
        });
    });

};

export default forms;