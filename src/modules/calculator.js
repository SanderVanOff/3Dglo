const calc = () => {
    const calcInputs = document.querySelectorAll('.calc-block > input');


    calcInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/gi, '');
        });
    });

};

export default calc;