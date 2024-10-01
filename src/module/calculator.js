const calculator = () => {
    const area = document.querySelector('.calc-item.calc-square')
    const countRooms = document.querySelector('.calc-item.calc-count')
    const dueDate = document.querySelector('.calc-item.calc-day')

    const regExpCals = /\D+/
    const eventInputs = () => {


        area.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(regExpCals, "")
        })

        countRooms.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(regExpCals, "")
        })

        dueDate.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(regExpCals, "")
        })
    }
    eventInputs()
}
export default calculator