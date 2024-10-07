const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const modalContent = modal.querySelector('.popup-content')

    let count = 0
    let idInterval

    const openAnimatePopup = () => {
        const mobile = window.innerWidth < 768
        if (!mobile) {

            if (count <= 1) {
                idInterval = requestAnimationFrame(openAnimatePopup)
                count += 0.05
                modalContent.style.opacity = count
            } else {
                cancelAnimationFrame(idInterval)
                count = 0
            }
        }
    }
    const closeAnimationPopup = () => {
        modal.style.display = 'none'
    }
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            openAnimatePopup()
        });

    })
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            closeAnimationPopup()
        }

    })
}
export default modal