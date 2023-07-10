const Stack = require('./stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  describe('validatebrackets', () => {
    it('should return true for balanced brackets', () => {
      expect(stack.validatebrackets('{}')).toBe(true);
      expect(stack.validatebrackets('{}(){}')).toBe(true);
      expect(stack.validatebrackets('()[[Extra Characters]]')).toBe(true);
      expect(stack.validatebrackets('(){}[[]]')).toBe(true);
      expect(stack.validatebrackets('{}{Code}[Fellows](())')).toBe(true);
    });

    it('should return false for unbalanced brackets', () => {
      expect(stack.validatebrackets('[({}]')).toBe(false);
      expect(stack.validatebrackets('(](')).toBe(false);
      expect(stack.validatebrackets('{(})')).toBe(false);
      expect(stack.validatebrackets('{')).toBe(false);
      expect(stack.validatebrackets(')')).toBe(false);
      expect(stack.validatebrackets('[}')).toBe(false);
    });
  });
});