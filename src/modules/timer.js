const timer = (deadline) => {
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');
    let idInterval;

    const getTimeRemaining = () => {

        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hour = Math.floor((timeRemaining / 60 / 60));
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            hour,
            minutes,
            seconds,
            timeRemaining
        };
    };

    const updateClock = () => {
        const getTime = getTimeRemaining();
        const {
            hour,
            minutes,
            seconds,
            timeRemaining
        } = getTime;

        timerHours.textContent = hour < 10 ? `0${hour}` : hour;
        timerMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
        timerSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
        
        if (timeRemaining < 0) {
            clearInterval(idInterval);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }

    };
    idInterval = setInterval(updateClock, 1000);
};

export default timer;