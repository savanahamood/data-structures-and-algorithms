"use strict";

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  console.log({
    arr,
  });
  return arr;
}

insertionSort([55,10,3,1]);

module.exports = insertionSort;