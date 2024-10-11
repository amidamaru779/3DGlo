const sendForm = ({
    formId,
    someElem = []
}) => {
    const form = document.getElementById(formId);


    const loadText = "Загрузка...";
    const errorText = "Ошибка...";
    const successText = "Спасибо! Наш менеджер с Вами свяжется";

    const getBlock = () => {
        return form.querySelector(".status");
    };

    const getstatusBlock = (statusText) => {
        const statusBlock = getBlock();
        statusBlock.textContent = statusText;
    };

    const createStatusBlock = (form) => {
        const statusBlock = document.createElement("div");
        statusBlock.classList.add("status");
        statusBlock.style.color = "red";
        form.append(statusBlock);
    };

    const validate = (list) => {
        let success = true;
        list.forEach((input) => {

            if (!input.classList.contains("success")) {
                success = false;
            }
        });
        return success;
    };

    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json());
    };

    const submitForm = () => {
        const formData = new FormData(form);
        const formBody = {};

        createStatusBlock(form);
        getstatusBlock(loadText);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach((element) => {
            const elem = document.getElementById(element.id);
            if (element.type === "block") {
                formBody[element.id] = elem.textContent;
            } else if (element.type === "input") {
                formBody[element.id] = elem.value;
            }
        });

        const formElements = form.querySelectorAll("input");

        if (validate(formElements)) {
            sendData(formBody)
                .then((data) => {
                    getstatusBlock(successText);

                    formElements.forEach((input) => {
                        input.value = "";
                    });
                    setTimeout(() => {
                        getBlock().remove();
                    }, 2000);
                })
                .catch((error) => {
                    getstatusBlock(errorText);
                });
        } else {
            getstatusBlock(errorText);
            setTimeout(() => {
                getBlock().remove();
            }, 2000);
        }
    };

    try {
        if (!form) {
            throw new Error("Вверни форму на место, пожалуйста");
        }
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;