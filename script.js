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



const palindormesUl = document.getElementById('palindromes');
const notPalindormesUl = document.getElementById('not-palindromes');

function checkPalindome() {

    if (input.value != "") {
        const inputIsPalindome = palindrome(input.value);

        if (inputIsPalindome) {
            palindormesUl.insertAdjacentHTML('afterbegin', `<li>${input.value}</li>`);
        }
        else {
            notPalindormesUl.insertAdjacentHTML('afterbegin', `<li>${input.value}</li>`);
        }
        // Clear input field
        input.value = '';
    }
}
