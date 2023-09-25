
describe('InsertionSort', () => {

const { sortByYears, sortAlphabetically } = require("./SortingComparisons"); 
const { Movie } = require("./SortingComparisons"); 

describe("Movie Sorting", () => {
  const movies = [
    new Movie("The Avengers", 2012, ["Action", "Sci-Fi"]),
    new Movie("An Inception", 2010, ["Action", "Sci-Fi"]),
    new Movie("Titanic", 1997, ["Drama", "Romance"]),
  ];

  const sortedByYear = sortByYears(movies);
  const sortedAlphabetically = sortAlphabetically(movies);

  it("should sort movies by most recent year first", () => {
    expect(sortedByYear[0].title).toBe("The Avengers");
  });

  it("should sort movies alphabetically, ignoring articles", () => {
    expect(sortedAlphabetically[0].title).toBe("The Avengers");
  });
});
});