const REGEX_EMAIL = /^\w+@[a-z]+.(com|org|net)$/i;
const REGEX_USERNAME = /^\w{2,12}$/;
const REGEX_NAME = /^[a-zA-Z]{2,12}$/;
const REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

function checkName(value) {
    return REGEX_NAME.test(value);
}

function checkUsername(value) {
    return REGEX_USERNAME.test(value);
}

function checkPassword(value) {
    return REGEX_PASSWORD.test(value);
}

function checkEmail(value) {
    return REGEX_EMAIL.test(value);
}