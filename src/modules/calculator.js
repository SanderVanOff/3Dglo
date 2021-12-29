const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.querySelector('#total');

    const calcInputs = document.querySelectorAll('.calc-block > input');



    const increaseTotalNum =({num, time = 5000, step = 1, elem}) => {
        let count = 0;
        let t = Math.round(time / (num / step));
        let interval = setInterval(() => {
            count = count + step;
            if (count == num) {
                clearInterval(interval);    
            }
            elem.textContent = count;
        }, t);
    };


    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
            increaseTotalNum({
                num: totalValue,
                elem: total,
                step: 20,
                time: 10
            });
        } else {
            totalValue = 0;
        }
    };

    calcInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/gi, '');
        });
    });

    calcBlock.addEventListener('change', (e) => {
        countCalc();
    });



};

export default calc;