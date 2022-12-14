const currentDay = document.querySelector('#day');
const date = document.querySelector('#date');
const clockHour = document.querySelector('#hour');
const clockMinutes = document.querySelector('#minutes');
const clockSeconds = document.querySelector('#seconds');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];

const putZero = (time) => {
    // return (time < 10) ? `0${time}` : `${time}`
    return `${time}`.padStart(2, '0');
}

setInterval(showDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const hours = putZero(currentDate.getHours());
    const minutes = putZero(currentDate.getMinutes());
    const seconds = putZero(currentDate.getSeconds());

    currentDay.textContent = days[currentDate.getDay()];
    date.textContent = `${day} ${months[month]} ${year}`;
    clockHour.textContent = hours;
    clockMinutes.textContent = minutes;
    clockSeconds.textContent = seconds;
}, 1000)

showDate();