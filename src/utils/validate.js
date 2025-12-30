export const checkValidation = (email, password) => {
    const isEmailValid =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/.test(password);
    if(!isEmailValid && !isPasswordValid) return "Email and Password are not valid"
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
}
