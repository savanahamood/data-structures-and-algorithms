const mergeSort = require("./mergesort");

describe("Merge Sort", () => {
  it("should sort an array in ascending order", () => {
    const input = [8, 4, 23, 42, 16, 15];
    const expectedOutput = [4, 8, 15, 16, 23, 42];
    const sortedArray = mergeSort(input);
    expect(sortedArray).toEqual(expectedOutput);
  });

  it("should handle an empty array", () => {
    const input = [];
    const sortedArray = mergeSort(input);
    expect(sortedArray).toEqual([]);
  });

  it("should handle an array with one element", () => {
    const input = [5];
    const sortedArray = mergeSort(input);
    expect(sortedArray).toEqual([5]);
  });

  it("should handle an array with duplicate elements", () => {
    const input = [8, 4, 8, 4, 23, 42, 16, 15];
    const expectedOutput = [4, 4, 8, 8, 15, 16, 23, 42];
    const sortedArray = mergeSort(input);
    expect(sortedArray).toEqual(expectedOutput);
  });

  it("should handle a large array", () => {
    const input = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    const sortedArray = mergeSort(input);
    for (let i = 1; i < sortedArray.length; i++) {
      expect(sortedArray[i]).toBeGreaterThanOrEqual(sortedArray[i - 1]);
    }
  });
});





