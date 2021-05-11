// 'use strict'

let forms = getSavedForms()

let f0
let f1
let f2
let f3
let f4
let f5

document.getElementById('select').addEventListener('change', (e) => {
    f0 = e.target.value
})

document.getElementById('firstname').addEventListener('change', (e) => {
    if(e.target.value === 'Mr.'){
        f0 = 'male'
    } else{
        f0 = 'female'
    }
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
        gender: f0,
        firstName: f1,
        lastName: f2,
        email: f3,
        mobileNo: f4,
        address: f5
    })

    saveForms(forms)
    console.log('Form submitted successfully!')
    alert('Your form is submitted successfully ;-)')
})