const {Animal,AnimalShelter} = require('./queue');

describe('AnimalQueue', () => {
  let animalShelter;

  beforeEach(() => {
    animalShelter = new AnimalShelter();
  });

  test('enqueue and dequeue a dog', () => {
    const dog1 = new Animal('dog', 'Buddy');
    const dog2 = new Animal('dog', 'buty');

    animalShelter.enqueue(dog1);
    animalShelter.enqueue(dog2);

    expect(animalShelter.dequeue('dog')).toEqual(dog1);
    expect(animalShelter.dequeue('dog')).toEqual(dog2);
    expect(animalShelter.dequeue('dog')).toBeNull();
  });

  test('enqueue and dequeue a cat', () => {
    const cat1 = new Animal('cat', 'caty');
    const cat2 = new Animal('cat', 'Smokey');
    const cat3 = new Animal('cat', 'candy');


    animalShelter.enqueue(cat1);
    animalShelter.enqueue(cat2);
    animalShelter.enqueue(cat3);


    expect(animalShelter.dequeue('cat')).toEqual(cat1);
    expect(animalShelter.dequeue('cat')).toEqual(cat2);
    expect(animalShelter.dequeue('cat')).toEqual(cat3);
    expect(animalShelter.dequeue('cat')).toBeNull();
  });

  test('enqueue and dequeue with invalid preference', () => {
    const dog1 = new Animal('dog', 'Buddy');
    const cat1 = new Animal('cat', 'caty');

    animalShelter.enqueue(dog1);
    animalShelter.enqueue(cat1);

    expect(animalShelter.dequeue('bird')).toBeNull();
    expect(animalShelter.dequeue('')).toBeNull();
    expect(animalShelter.dequeue()).toBeNull();
  });
});