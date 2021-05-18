// Assignment Code
var generatePasscodeBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateEl.addEventListener('click', function() {
  
});
const characterAmountRange = document.getElementById
('charaterAmountRange')
const characterAmountNumber = document.getElementById
('charaterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeLowercaseElement = document.getElementById 
('includeLowercase')
const includeNumbers = document.getElementById 
('includeNumbers')
const includeSpecialCharacters = document.getElementById 
('includeSpecialCharacters')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33,47).concat(
  arrayFromLowToHigh(58,64)
  ).concat(
    arrayFromLowToHigh(91,96)
  ).concat(
    arrayFromLowToHigh(123,126)
  )

characterAmountNumber.addEventListener('input', synCharacterAmount)
characterAmountRange.addEventListener('input', synCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercase.checked
  const includeLowercase = includeLowercase.checked
  const includeNumbers = includeNumbers.checked
  const includeSpecialCharacters = includeSpecialCharacters.checked
  const password = generatePassword(characterAmountRange, includeUppercase,includeLowercase,
    includeNumbers,includeSpecialCharacters)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeLowercase, 
  includeNumbers, includeSpecialCharacters) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
    
    const getPasswordCharacter = []
    for (let i = 0; i < characterAmount; i++) {
      const characterCode = charCodes[Math.floor(Math.random() *
        charCodes.length)]
        PasswordCharacter.push(String.fromCharCode(characterCode))
    }
    return PasswordCharacters.join('')
  }
  
  function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }
    
function synCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}