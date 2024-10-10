const sendForm = ({
    formId,
    someElem = []
}) => {
    const form = document.getElementById(formId);
    console.log(form);

    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с Вами свяжется!'

    const validateInput = (input) => {
        const name = input.name
        const value = input.value

        if (name === 'user_phone') {
            // Разрешаются только цифры, "+", "(", ")", "-"
            return /^[0-9+\-\(\) ]*$/.test(value)
        } else if (name === 'user_name') {
            // Разрешаются только кириллица и пробелы
            return /^[А-Яа-яЁё\s]*$/.test(value)
        } else if (name === 'user_message') {
            return /^[А-Яа-яЁё0-9\.,!?;:\s]*$/.test(value)
        }
        return true
    }

    const validate = (inputs) => {
        let isValid = true
        inputs.forEach((input) => {
            if (!validateInput(input)) {
                isValid = false;
                input.classList.remove('success')
                input.classList.add('error')
            } else {
                input.classList.remove('error')
                input.classList.add('success')
            }
        })
        return isValid
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            console.log(element)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = elem.value
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;
                    formElements.forEach(input => {
                        input.value = ''
                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                });
        } else {
            alert('Данные не валидны!!')
        }
    }

    try {
        if (!form) {
            throw new Error("Вверни форму на место, пожалуйста")
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            submitForm()
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default sendForm;