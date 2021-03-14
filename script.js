import { palindrome } from './modules/palindrome.mjs'

// Hämta input och knapp från DOMen
const input = document.getElementById('input');
const inputBtn = document.getElementById('input-btn');
inputBtn.addEventListener('click', checkPalindome);

//------------ Allows user to complete input with Enter key ------------
input.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        e.preventDefault();
        inputBtn.click();
    }
});
//------------ Allows user to complete input with Enter key ------------



const palindromesUl = document.getElementById('palindromes');
const notPalindromesUl = document.getElementById('not-palindromes');

function checkPalindome() {

    if (input.value != "") {
        const inputIsPalindrome = palindrome(input.value);

        if (inputIsPalindrome) {
            palindromesUl.insertAdjacentHTML('afterbegin', `<li>${input.value}</li>`);
        }
        else {
            notPalindromesUl.insertAdjacentHTML('afterbegin', `<li>${input.value}</li>`);
        }
        // Clear input field
        input.value = '';
    }
}
