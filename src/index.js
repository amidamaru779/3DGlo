import timer from './module/timer'
import menu from './module/menu'
import modal from './module/modal'
import calculator from './module/calculator'
import forms from './module/forms'
import tabs from './module/tabs'
import slider from './module/slider'
import calc from './module/calc'
import sendForm from './module/sendForm'

timer('26 september 2024 12:45:00')
menu()
modal()
calculator()
forms()
tabs()
slider()
calc(100)
sendForm({
    formId: 'form1',
    someElem: [{
        type: 'block',
        id: 'total'
    }],
})
sendForm({
    formId: "form2",
    someElem: [{
        type: "input",
        id: "total",
    }]
});
sendForm({
    formId: "form3",
    someElem: [{
        type: 'block',
        id: 'total'
    }]
});