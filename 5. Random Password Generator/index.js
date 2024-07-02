
function generatePasword(length,includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-="

    let allowedChars = "";
    let password = "";
    allowedChars += includeLowercase ? lowercaseChars: "";
    allowedChars += includeUppercase ? uppercaseChars: "";
    allowedChars += includeNumbers ? numberChars: "";
    allowedChars += includeSymbols ? symbolChars: "";

    if (length <=0) {
        return console.log("The password must include atleast one character")
    }
    else {
        for (let i = 0; i < length; i++){
            let randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = false;
const includeUppercase = false;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePasword(passwordLength,includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated Password: ${password}`);