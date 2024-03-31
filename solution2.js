//declare and initalize the function to generate the array
function generateArray(start, end) {
    //declare the constants 
    //math.abs calculates the length of the array needed to cover the range between start and the end 
    //array.from creats an array of specific length and maping function by adding an increment
    const length = Math.abs(end - start) + 1;
    const step = start < end ? 1 : -1;
    return Array.from({ length }, (_, index) => start + index * step);
  }
  
  // Example usage:
  console.log(generateArray(4, 7)); // Output: [4, 5, 6, 7]
  console.log(generateArray(-4, 7))