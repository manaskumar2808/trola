export const userNameValidator = (value) => {
    const userNameLengthMin = 2;

    if(value.length < userNameLengthMin){
        return `Username must be greater than ${userNameLengthMin} characters!`;
    } 
    return null;
}

export const emailValidator = (value) => {
    const emailLengthMin = 3;

    if(value.length < emailLengthMin){
        return `Please Enter a valid email!`;
    } else if(!value.containes('@')) {
        return 'Please Enter a valid email!';
    } else {
        return null;
    }
}

export const passwordValidator = (value) => {
    const passwordLengthMin = 7;
    if(value.length < passwordLengthMin){
        return `Password must be greater than ${passwordLengthMin} characters!`;
    } 
    return null;
}

export const passwordConfirmValidator = (value, compareValue) => {
    if(value !== compareValue){
        return "Password does'nt match!";
    } 
    return null;
}

