const forms = () => {
    const regExpName = /^[-?!,.а-яА-ЯёЁ]{2,}$/
    const regExpEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
    const regExpPhone = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g
    const reExpMessage = /^[-?!,.а-яА-ЯёЁ\s]/

    const userName = document.querySelectorAll('.form-name')
    const userEmail = document.querySelectorAll('.form-email')
    const userPhone = document.querySelectorAll('.form-phone')
    const userMessage = document.querySelector(".mess")


    const isUserDataValid = (regExp, data) => {
        return regExp.test(data)
    }
    const userValid = () => {

        userName.forEach(item => {
            item.addEventListener('input', (e) => {
                e.preventDefault()
                if (isUserDataValid(regExpName, item.value)) {
                    item.classList.add('success')
                } else {
                    item.classList.remove('success')
                }
            })
        })

        userEmail.forEach(item => {
            item.addEventListener('input', (e) => {
                e.preventDefault()
                if (item.value.trim() === '') {
                    item.setCustomValidity('Заполните это поле');
                    item.classList.remove('success');
                } else if (isUserDataValid(regExpEmail, item.value)) {
                    item.setCustomValidity('');
                    item.classList.add('success');
                } else {
                    item.classList.remove('success');
                }
            })
        })

        userPhone.forEach(item => {
            item.addEventListener('input', (e) => {
                e.preventDefault()
                if (isUserDataValid(regExpPhone, item.value)) {
                    item.classList.add('success')
                } else {
                    item.classList.remove('success')
                }
            })
        })
        userMessage.addEventListener('input', (e) => {
            e.preventDefault()
            if (isUserDataValid(reExpMessage, userMessage.value)) {
                userMessage.classList.add('success')
            } else {
                userMessage.classList.remove('success')
            }
        })
    }
    userValid()
}



export default forms;