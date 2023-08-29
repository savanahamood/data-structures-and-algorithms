const RepeatedWord = require('./hashmap');

describe('RepeatedWord function', () => {
  it('should find the first repeated word', () => {
    const inputString = 'This is a test. This is only a test.';
    const result = RepeatedWord(inputString);
    expect(result).toBe('This');
  });

  it('should return null if there are no repeated words', () => {
    const inputString = 'This is a unique test.';
    const result = RepeatedWord(inputString);
    expect(result).toBeNull();
  });
});
