'use strict';
  
const reversedArray = (array) => {
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
      reversed.push(array[i]);
    }
    return reversed;
  };
    
module.exports = reversedArray;