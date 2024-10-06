const generateButton = document.getElementById('generate-button');
const passwordLength = document.getElementById('password-length');
const includeUppercase = document.getElementById('include-uppercase');
const includeLowercase = document.getElementById('include-lowercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');
const passwordDisplay = document.getElementById('password-display');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-={}[]|;:,.<>?';

generateButton.addEventListener('click', () => {
  const length = parseInt(passwordLength.value);
  const uppercase = includeUppercase.checked;
  const lowercase = includeLowercase.checked;
  const numbers = includeNumbers.checked;
  const symbols = includeSymbols.checked;

  if (isNaN(length) || length < 8 || length > 128) {
    alert('Password length must be between 8 and 128 characters.');
    return;
  }

  if (!uppercase && !lowercase && !numbers && !symbols) {
    alert('Please select at least one character type.');
    return;
  }

  let chars = '';
  if (uppercase) chars += uppercaseChars;
  if (lowercase) chars += lowercaseChars;
  if (numbers) chars += numberChars;
  if (symbols) chars += symbolChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordDisplay.value = password;
});

passwordDisplay.addEventListener('click', () => {
  passwordDisplay.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
});
