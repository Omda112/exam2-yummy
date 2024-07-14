let firstName = document.getElementById("nameInput")
let useremail = document.getElementById("emailInput")
let phone = document.getElementById("phoneInput")
let userpassword = document.getElementById("passwordInput")
let rePassword = document.getElementById("repasswordInput")
let age = document.getElementById("ageInput")
let nameAlert = document.querySelector("#nameAlert")
let emailAlert = document.querySelector("#emailAlert")
let phoneAlert = document.querySelector("#phoneAlert")
let ageAlert = document.querySelector("#ageAlert")
let passwordAlert = document.querySelector("#passwordAlert")
let repasswordAlert = document.querySelector("#repasswordAlert")


var regex = {
    name: {
        value: /^[a-z0-9_-]{3,15}$/,
        status: false
    },
    email: {
        value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        status: false,
    },
    pass: {
        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        status: false
    },
    phoneN: {
        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        status: false
    }
}
// reg

$(firstName).on("input", function () {
    if (regex.name.value.test(firstName.value)) {
        localStorage.setItem("name", firstName.value)
        regex.name.status = true;
        firstName.classList.remove("is-invalid")
        firstName.classList.add("is-valid")
        nameAlert.classList.add("d-none")
        return true
    } else {
        regex.name.status = false;
        firstName.classList.remove("is-valid")
        firstName.classList.add("is-invalid")
        nameAlert.classList.remove("d-none")
        return false

    }
})

$(useremail).on("input", function () {
    if (regex.email.value.test(useremail.value)) {
        regex.email.status = true;
        useremail.classList.remove("is-invalid")
        useremail.classList.add("is-valid")
        emailAlert.classList.add("d-none")
        return true
    } else {
        regex.email.status = false;
        useremail.classList.remove("is-valid")
        useremail.classList.add("is-invalid")
        emailAlert.classList.remove("d-none")
        return false

    }
})

$(phone).on("input", function () {
    if (regex.phoneN.value.test(phone.value)) {
        regex.phoneN.status = true;
        phone.classList.remove("is-invalid")
        phone.classList.add("is-valid")
        phoneAlert.classList.add("d-none")
        return true
    } else {
        regex.email.status = false;
        phone.classList.remove("is-valid")
        phone.classList.add("is-invalid")
        phoneAlert.classList.remove("d-none")
        return false

    }
})


$(userpassword).on("input", function () {
    if (regex.pass.value.test(userpassword.value)) {
        regex.pass.status = true;
        userpassword.classList.add("is-valid")
        userpassword.classList.remove("is-invalid")
        passwordAlert.classList.add("d-none")
        return true
    } else {
        regex.pass.status = false;
        userpassword.classList.remove("is-valid")
        userpassword.classList.add("is-invalid")
        passwordAlert.classList.remove("d-none")
        return false
    }
})


$(rePassword).on("input", function () {
    if(userpassword.value == rePassword.value){
        regex.pass.status = true;
        rePassword.classList.add("is-valid")
        rePassword.classList.remove("is-invalid")
        repasswordAlert.classList.add("d-none")
        return true
    }
    else {
        regex.pass.status = false;
        rePassword.classList.remove("is-valid")
        rePassword.classList.add("is-invalid")
        repasswordAlert.classList.remove("d-none")
        return false
    }
})

$(age).on("input",function(){
    if(!age.value == "" & age.value>0){
        age.classList.add("is-valid")
        age.classList.remove("is-invalid")
        ageAlert.classList.add("d-none")
        return true
    }else{
        age.classList.remove("is-valid")
        age.classList.add("is-invalid")
        ageAlert.classList.remove("d-none")
        return false
    }
})
