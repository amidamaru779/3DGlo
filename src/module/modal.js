const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    const modalContent = modal.querySelector('.popup-content')

    let count = 0
    let idInterval

    const openAnimatePopup = () => {
        const mobile = window.innerWidth < 768
        if (!mobile) {
            count++
            idInterval = requestAnimationFrame(openAnimatePopup)

            if (count < 200) {
                modalContent.style.opacity = count / 200
                modal.style.display = 'block'
            } else {
                cancelAnimationFrame(idInterval)
                count = 0
            }
        } else {
            modal.style.display = 'block'
        }
    }
    const closeAnimationPopup = () => {
        modal.style.display = 'none'
    }
    buttons.forEach(btn => {
        btn.addEventListener('click', openAnimatePopup);
    })
    closeBtn.addEventListener('click', closeAnimationPopup)
}
export default modal