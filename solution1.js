//declare and initialize the input string
function swapCase(str) {
    return str
      .split('')
      //define constantas for upper and lower case
      .map(char => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join('');
  }
  
  // Example usage:
  const input = 'The Quick Brown Fox';
  const swappedCase = swapCase(input);
  console.log(swappedCase); // Output: 'tHE qUICK bROWN fOX'