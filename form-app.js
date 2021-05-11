// 'use strict'

// let forms = getSavedForms()
let f1
// let lastName
// let email
// let mobileNo
// let address

document.getElementById('firstname').addEventListener('change', (e) => {
    f1 = e.target.value
    console.log(f1)
})



document.getElementById('submit').addEventListener('click', () => {
    

    

    // document.getElementById('lastname').addEventListener('input', (e) => {
    //     lastName = e.target.value
    // })

    // document.getElementById('email').addEventListener('input', (e) => {
    //     email = e.target.value
    //     e.target.value = ''
    // })

    // document.getElementById('mobileno').addEventListener('input', (e) => {
    //     mobileNo = e.target.value
    //     e.target.value = ''
    // })

    // document.getElementById('address').addEventListener('input', (e) => {
    //     address = e.target.value
    //     e.target.value = ''
    // })

    // forms.push({
    //     id: uuidv4(),
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     mobileNo: mobileNo,
    //     address: address
    // })

    // saveForms(forms)
})