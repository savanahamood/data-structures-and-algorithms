const Hashtable = require('./hash'); 

describe('Hashtable Tests', () => {
  let myHashtable;

  beforeEach(() => {
    myHashtable = new Hashtable(10);
  });

  test('Setting a key/value results in the value being in the data structure', () => {
    myHashtable.set('name', 'savana');
    expect(myHashtable.get('name')).toBe('savana');
  });

  test('Retrieving based on a key returns the value stored', () => {
    myHashtable.set('age', 30);
    expect(myHashtable.get('age')).toBe(30);
  });

  test('Returns null for a key that does not exist', () => {
    expect(myHashtable.get('fullname')).toBeUndefined();
  });

  test('Returns a list of all unique keys', () => {
    myHashtable.set('name', 'savana');
    myHashtable.set('age', 30);
    expect(myHashtable.keys()).toEqual(expect.arrayContaining(['name', 'age']));
  });

  test('Handles collision within the hashtable', () => {
    myHashtable.set('amne', 'collision test');
    expect(myHashtable.get('amne')).toBe('collision test');
  });

  test('Retrieves a value from a bucket with a collision', () => {
    myHashtable.set('name', 'savana');
    myHashtable.set('amne', 'collision test');
    expect(myHashtable.get('name')).toBe('savana');
  });

  test('Hashes a key to an in-range value', () => {
    const hashedIndex = myHashtable.hash('name');
    expect(hashedIndex).toBeGreaterThanOrEqual(0);
    expect(hashedIndex).toBeLessThan(10);
  });
});
