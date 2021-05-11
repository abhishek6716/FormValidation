// 'use strict'

let forms = getSavedForms()

let f1
let f2
let f3
let f4
let f5

document.getElementById('firstname').addEventListener('change', (e) => {
    f1 = e.target.value
})

document.getElementById('lastname').addEventListener('change', (e) => {
    f2 = e.target.value
})

document.getElementById('email').addEventListener('change', (e) => {
    f3 = e.target.value
})

document.getElementById('mobileno').addEventListener('change', (e) => {
    f4 = e.target.value
})

document.getElementById('address').addEventListener('change', (e) => {
    f5 = e.target.value
})



document.getElementById('submit').addEventListener('click', () => {

    forms.push({
        id: uuidv4(),
        firstName: f1,
        lastName: f2,
        email: f3,
        mobileNo: f4,
        address: f5
    })

    saveForms(forms)
    alert('Form submitted successfully :-)')
})