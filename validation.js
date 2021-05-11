console.log('App is running')

console.log('App is running')

const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const mobileNo = document.getElementById('mobileno')
const address = document.getElementById('address')
const submit = document.getElementById('submit')



let validFirstName = false
let validLastName = false
let validEmail = false
let validMobileNo = false

firstName.addEventListener('blur', () => {
    // console.log('first name is blurred')

    let regex = /^[a-zA-Z]{2,12}$/
    let str = firstName.value
    // console.log(regex, str);
    if (regex.test(str)) {
        firstName.classList.remove('is-invalid')
        validFirstName = true
    } else {
        validFirstName = false
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
        validLastName = false
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
        validEmail = false
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
        validMobileNo = false
    }
})

submit.addEventListener('click', (e) => {
    e.preventDefault()

    if (!validFirstName) {
        $("#firstname").focus();
        alert("Enter your first name");
    } else if (!validLastName) {
        $("#lastname").focus();
        alert("Enter your last name");
    } else if (!validEmail) {
        $("#email").focus();
        alert("Enter your Email");
    } else if (!validMobileNo) {
        $("#mobileno").focus();
        alert("Enter your Mobile No");
    } else if (address == "") {
        $("#address").focus();
        alert("Enter your Address");
    } else {
        alert("data submiteed");
    }
})