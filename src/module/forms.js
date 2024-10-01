const forms = () => {
    const regExpName = /[^а-я -]+/gi
    const regExpEmail = /[^a-z@0-9-_.!~*']+/gi
    const regExpPhone = /[^0-9()-]/

    const isValidatName = (inputElement) => {
        inputElement.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(regExpName, '')
        });
    };

    const isValidateEmail = (inputElement) => {
        inputElement.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(regExpEmail, '')
        });
    };

    const isValidatePhone = (inputElement) => {
        inputElement.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(regExpPhone, '')
        })
    }
    const form1 = () => {
        const name = document.querySelector('.form-name')
        const email = document.querySelector('.form-email')
        const phoneNumber = document.querySelector('.form-phone')

        isValidatName(name);
        isValidateEmail(email);
        isValidatePhone(phoneNumber)
    };
    form1();

    const form2 = () => {
        const name = document.querySelector('.top-form')
        const email = document.querySelector('.top-form.form-email')
        const phoneNumber = document.querySelector('.top-form.form-phone')
        const message = document.querySelector('.mess')

        isValidatName(name)
        isValidatName(message)
        isValidateEmail(email)
        isValidatePhone(phoneNumber)
    }
    form2()

    const modalForm3 = () => {
        const modal = document.querySelector('.popup')
        const name = modal.querySelector('.form-name')
        const phoneNumber = modal.querySelector('.form-phone')
        const email = modal.querySelector('.form-email')

        isValidatName(name)
        isValidateEmail(email)
        isValidatePhone(phoneNumber)
    };
    modalForm3();
};

export default forms;