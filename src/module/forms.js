const forms = () => {
    const regExpName = /^[а-яА-ЯёЁ\s]+$/
    const regExpEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
    const regExpPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
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
                    item.setCustomValidity('')
                } else if (item.value.trim() === "") {
                    item.classList.remove('success')
                    item.setCustomValidity('Заполните это поле')
                } else {
                    item.classList.remove('success')
                    item.setCustomValidity('Введите только кириллицу.')
                }
            })
        })

        userEmail.forEach(item => {
            item.addEventListener('input', (e) => {
                e.preventDefault()

                if (isUserDataValid(regExpEmail, item.value)) {
                    item.classList.add('success');
                    item.setCustomValidity('');
                } else if (item.value.trim() === "") {
                    item.classList.remove('success');
                    item.setCustomValidity('Заполните это поле')
                } else {
                    item.classList.remove('success')
                    item.setCustomValidity(`Адрес электронной почты должен содержать символ "@". В адресе "${item.value}" отсутствует символ "@"`)
                    item.setCustomValidity('')
                }
            })
        })

        userPhone.forEach(item => {
            item.addEventListener('input', (e) => {
                e.preventDefault()

                if (isUserDataValid(regExpPhone, item.value)) {
                    item.classList.add('success')
                    item.setCustomValidity('')
                } else if (item.value.trim() === "") {
                    item.classList.remove('success')
                    item.setCustomValidity('Заполните поле')
                } else {
                    item.setCustomValidity('Используйте цифры, "+","()","-"')
                    item.classList.remove('success')

                }
            })
        })
        userMessage.addEventListener('input', (e) => {
            e.preventDefault()

            if (isUserDataValid(reExpMessage, userMessage.value)) {
                userMessage.classList.add('success')
                userMessage.setCustomValidity('')
            } else if (userMessage.value.trim() === "") {
                userMessage.classList.remove('success')
                userMessage.setCustomValidity('Пожалуйста оставьте обратную связь =)')
            } else {
                userMessage.classList.remove('success')
                userMessage.setCustomValidity('Можно использовать кириллицу, цифры и знаки препинания.')
            }
        })
    }
    userValid()
}

export default forms;