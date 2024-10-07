import { animate } from "./helpers"

const modal = () => {
    const modal = document.querySelector(".popup")
    const popupButton = document.querySelectorAll(".popup-btn")
    const popupClose = modal.querySelector(".popup-close")

    const animatedModal = (toggle, opacity) => {
        modal.style.opacity = opacity
        animate({
            duration: 400,
            timing(timeFraction) {
                return timeFraction
            },
            draw(progress) {
                if (toggle === "block") {
                    modal.style.display = toggle
                    modal.style.opacity = opacity + progress
                } else {
                    modal.style.opacity = opacity - progress
                    if (modal.style.opacity <= 0) {
                        modal.style.display = toggle
                    }
                }
            },
        });
    };

    const eventAnimatedModal = (toggle) => {
        toggle == "block" ? animatedModal(toggle, 0) : animatedModal(toggle, 1)
    };

    const eventNoAnimatedModal = (toggle) => {
        modal.style.display = toggle
        toggle == "block" ? (modal.style.opacity = 1) : (modal.style.opacity = 0)
    };

    const eventModal = (toggle) => {
        window.outerWidth >= 768 ? eventAnimatedModal(toggle) : eventNoAnimatedModal(toggle)
    };

    popupButton.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault()
            eventModal("block")
        });
    });

    popupClose.addEventListener("click", (e) => {
        e.preventDefault()
        eventModal("none")
    });
};

export default modal