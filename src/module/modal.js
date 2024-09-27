const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    const modalContent = modal.querySelector('.popup-content')

    const openAnimatePopup = () => {
        const mobile = window.innerWidth < 768
        if (!mobile) {
            modalContent.style.opacity = 0
            modalContent.style.transform = 'scale(0.8)'
            modal.style.display = 'block'
            requestAnimationFrame(() => {
                modalContent.style.transition = 'opacity 0.3s, transform 0.3s';
                modalContent.style.opacity = 1
                modalContent.style.transform = 'scale(1)'
            });
        } else {
            modal.style.display = 'block'
        }
    }
    const closeAnimationPopup = () => {
        modalContent.style.transition = 'opacity 0.5s, transform 0.5s'
        modalContent.style.opacity = 0
        modalContent.style.transform = 'scale(0.8)'
        setTimeout(() => {
            modal.style.display = 'none'
        }, 500)
    }
    buttons.forEach(btn => {
        btn.addEventListener('click', openAnimatePopup);
    })
    closeBtn.addEventListener('click', closeAnimationPopup)
}
export default modal