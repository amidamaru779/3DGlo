const timer = (deadLine) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    const timerDays = document.getElementById('timer-days')

    const getTimeRemaining = () => {
        const dateStop = new Date(deadLine).getTime()
        const dateNow = new Date().getTime()

        let timeRemaining = (dateStop - dateNow) / 1000
        if (timeRemaining < 0) {
            timeRemaining = 0
        }
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor(((timeRemaining / 60 / 60) % 24))
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        days = days < 10 ? "0" + days : days
        hours = hours < 10 ? "0" + hours : hours
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds
        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        }
    }
    const updateClock = () => {
        let getTime = getTimeRemaining()

        timerDays.textContent = getTime.days
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds
        if (getTime.timeRemaining === 0) {
            clearInterval(updateClock)
        }
    }
    setInterval(updateClock, 1000)

}
export default timer