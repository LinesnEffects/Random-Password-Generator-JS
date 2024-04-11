// Random password generator

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChar = "0123456789"
    const symbolChar = "!#$%&/()=¨*[]{}-.:,;°+"

    let allowedChars = ""
    let password = ""

    allowedChars += includeLowercase ? lowercaseChar : ""
    allowedChars += includeUppercase ? uppercaseChar : ""
    allowedChars += includeNumbers ? numberChar : ""
    allowedChars += includeSymbols ? symbolChar : ""

    if(length <= 0){
        return "Password lenght must be at least one character long"
    }
    if(allowedChars.length === 0){
        return "At least one set of characters must be selected"
    }
    for(let i = 0; i < length; i ++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }    
    return password
}
const passwordlength = 12
const includeLowercase = false
const includeUppercase = false
const includeNumbers = false
const includeSymbols = false

const password = generatePassword(
    passwordlength, 
    includeLowercase, 
    includeUppercase, 
    includeNumbers, 
    includeSymbols
)
console.log(`Generated password: ${password}`)