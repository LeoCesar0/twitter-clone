import validateEmail from "./validateEmail"

export default function validateLoginFields(email: string, password: string){
    if(email === "" || password === ""){
        return "Por favor, preencha todos os campos."
    }

    if(!validateEmail(email)){
        return "Insira um e-mail válido."
    }

    if(password.length < 8){
        return `A senha precisa ter pelo menos 8 caracteres. Atualmente: ${password.length}`
    }

    return true
}


