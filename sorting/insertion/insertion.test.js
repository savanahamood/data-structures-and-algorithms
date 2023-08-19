"use strict";

const insertionSort = require("./insertion");

describe("Insertion Sort", () => {
  it("should sort an array in ascending order", () => {
    const input = [55, 10, 3, 1];
    const expectedOutput = [1, 3, 10, 55];
    const sortedArray = insertionSort(input);
    expect(sortedArray).toEqual(expectedOutput);
  });
});