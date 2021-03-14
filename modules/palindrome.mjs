export function palindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '');
  str = str.toLowerCase();

  const len = str.length;
  const mid = str.length / 2;

  // Create variables for both halves of the string 
  let firstHalf = str.slice(0, mid);
  let secondHalf;
  
  // Check if length is odd
  if (len % 2 != 0) {
    secondHalf = str.slice(mid + 1, secondHalf);
  }
  else {
    secondHalf = str.slice(mid, secondHalf);
  }

  // Convert string to array
  secondHalf = secondHalf.split('');
  
  // Reverse array
  let secondHalfReversed = [];
  const secondHalfLen = secondHalf.length;
  for (let i = 0; i < secondHalfLen; i++) {
    secondHalfReversed.push(secondHalf.pop());
  }

  // Convert array to string
  secondHalfReversed = secondHalfReversed.join('');

  // Check if first half is equal to second half reversed
  if (firstHalf == secondHalfReversed) {
    return true;
  }
  else {
    return false
  }
}
