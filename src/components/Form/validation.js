export default function validate(string, input) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

    if(input === "username") {
        return regexEmail.test(string)
    } 
    if(input === "password") {
        return regexPassword.test(string)
    }
}