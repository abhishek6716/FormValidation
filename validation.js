console.log('App is running')

const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const mobileNo = document.getElementById('mobileno')
const submit = document.getElementById('submit')



let validFirstName = false
let validLastName = false
let validEmail = false
let validMobileNo = false
let isEnable = false

firstName.addEventListener('blur', () => {
    // console.log('first name is blurred')

    let regex = /^[a-zA-Z]{2,12}$/
    let str = firstName.value 
    // console.log(regex, str);
    if(regex.test(str)){
        firstName.classList.remove('is-invalid')
        validFirstName = true
    } else{
        firstName.classList.add('is-invalid')
        alert('Your first name is invalid!')
        throw Error('Your first name is invalid!')
    }
})

lastName.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]{2,12}$/
    let str = lastName.value
    // console.log(regex, str);
    if (regex.test(str)) {
        lastName.classList.remove('is-invalid')
        validLastName = true
    } else {
        lastName.classList.add('is-invalid')
        alert('Your last name is invalid!')
        throw Error('Your last name is invalid!')
    }
})

email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value
    // console.log(regex, str);
    if (regex.test(str)) {
        email.classList.remove('is-invalid')
        validEmail = true
    } else {
        email.classList.add('is-invalid')
        alert('Your email is invalid!')
        throw Error('Your email is invalid!')
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
        mobileNo.classList.add('is-invalid')
        console.log('Your mobile number is not valid!')
        throw Error('Your mobile number is not valid!')
    }
})

submit.addEventListener('click', (e) => {
    e.preventDefault()

    // console.log('you clicked on submit')
    if(validFirstName && validLastName && validEmail && validMobileNo){
        console.log('Everything is valid!')

    } else{
        console.log('Something is wrong please check again!')
    }
})