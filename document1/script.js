'use strict'
const message = () => {
    const date = new Date();
    const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const weekday = weekdays[date.getDay()]

    const greeting = document.getElementById('greeting')
    const dayNow = document.getElementById('day-now')
    const timeNow = document.getElementById('time-now')
    const timeToHappyNewYear = document.getElementById('time-to-happy-new-year')
    const getTime = () => {
        let dateStop = new Date('1 janury 2025').getTime()
        let dateNow = new Date().getTime()

        let timeRemaining = Math.floor((dateStop - dateNow) / 1000)
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()

        hours = hours < 10 ? "0" + hours : hours
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds
        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        }
    }
    const getTimeOfDay = () => {
        let timeOfDay
        if (3 < getTime.hours && getTime.hours < 9) {
            timeOfDay = "Доброе утро"
        } else if (10 < getTime.hours && getTime.hours < 15) {
            timeOfDay = "Добрый день"
        } else if (15 <= getTime.hours && getTime.hours < 21) {
            timeOfDay = "Добрый вечер"
        } else
            timeOfDay = "Доброй ночи"
        return timeOfDay
    }
    const roadToHny = () => {
        let days = Math.floor(getTime().timeRemaining / 60 / 60 / 24)

        return days
    }
    roadToHny()
    const wordDays = () => {
        const days = roadToHny();
        let word = 'дней';

        if (days % 10 === 1 && days !== 11) {
            word = 'день';
        } else if (days % 10 >= 2 && days % 10 <= 4 && (days < 10 || days > 20)) {
            word = 'дня';
        }
        return word;
    }
    const logMessage = () => {
        greeting.textContent = getTimeOfDay()
        dayNow.textContent = `Сегодня: ${weekday}`
        timeNow.textContent = `Текущее время: ${getTime().hours}:${getTime().minutes}:${getTime().seconds} PM`
        timeToHappyNewYear.textContent = `До нового года осталось ${roadToHny()} ${wordDays()}`
    }
    logMessage()
}
message()