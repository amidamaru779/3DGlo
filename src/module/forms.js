const forms = () => {
    const regExpName = /[^а-я -]+/gi
    const regExpEmail = /[^a-z@0-9-_.!~*']+/gi
    const regExpPhone = /[^0-9()-]/

    const userName = document.querySelectorAll('.form-name')
    const userEmail = document.querySelectorAll('.form-email')
    const userPhone = document.querySelectorAll('.form-phone')

    const userValid = () => {

        userName.forEach(item => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(regExpName, '')
            })
        })

        userEmail.forEach(item => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(regExpEmail, '')
            })
        })

        userPhone.forEach(item => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(regExpPhone, '')
            })
        })

    }
    userValid()
};

export default forms;