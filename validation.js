console.log('App is running')

const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const mobileNo = document.getElementById('mobileno')

let validFirstName = false
let validLastName = false
let validEmail = false
let validMobileNo = false

firstName.addEventListener('blur', () => {
    // console.log('first name is blurred')

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,12}$/
    let str = firstName.value 
    // console.log(regex, str);
    if(regex.test(str)){
        // console.log('Your first name is valid')
        firstName.classList.remove('is-invalid')
        validFirstName = true
    } else{
        console.log('Your first name is not valid')
        firstName.classList.add('is-invalid')
    }
})

lastName.addEventListener('blur', () => {
    // console.log('last name is blurred')
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,12}$/
    let str = lastName.value
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your last name is valid')
        lastName.classList.remove('is-invalid')
        validLastName = true
    } else {
        console.log('Your last name is not valid')
        lastName.classList.add('is-invalid')
    }
})

email.addEventListener('blur', () => {
    // console.log('email is blurred')
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your email is valid')
        email.classList.remove('is-invalid')
        validEmail = true
    } else {
        console.log('Your email is not valid')
        email.classList.add('is-invalid')
    }
})

mobileNo.addEventListener('blur', () => {
    // console.log('mobile no is blurred')
    let regex = /^([0-9]{10}$)/
    let str = mobileNo.value
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your mobile number is valid')
        mobileNo.classList.remove('is-invalid')
        validMobileNo = true
    } else {
        console.log('Your mobile number is not valid')
        mobileNo.classList.add('is-invalid')
    }
})

let submit = document.getElementById('submit')

submit.addEventListener('click', (e) => {
    e.preventDefault()

    // console.log('you clicked on submit')
    if(validFirstName && validLastName && validEmail && validMobileNo){
        console.log('Everything is valid and form is submitted!')
        
    } else{
        alert('Something is wrong please check again!')
    }
})