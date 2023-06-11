'use strict';
const LinkedList = require('../lib/LinkedList');

describe('Linked List', () => {
  /* it('works', () => {
    expect(true).toBeTruthy();
  }); */
  it("create a linkedlist",()=>{
    let list= new LinkedList();
    expect(list.head).toBeNull();
  })
  it("insert to Linkedlist",()=>{
    let list=new LinkedList();
    list.insert('one');
    expect(list.head.value).toEqual('one');
    list.insert('two');
    expect(list.head.value).toEqual('one');
  })
  it('should make the head property point to the first node in the linked list', () => {
    let list= new LinkedList();

    list.insert('a');
    list.insert('b');
    list.insert('c');
         expect(list.head.value).toBe('a');
         expect(list.head.next.value).toBe('b');
         expect(list.head.next.next.value).toBe('c');
      expect(list.head.next.next.next).toBeNull();
       });
});





// describe('LinkedList', () => {
//   let linkedList;

//   beforeEach(() => {
//     linkedList = new LinkedList();
//   });

//   it('should instantiate an empty linked list', () => {
//     expect(linkedList.head).toBeNull();
//   });

//   it('should properly insert into the linked list', () => {
//     linkedList.insert('a');
//     expect(linkedList.head.value).toBe('a');
//     expect(linkedList.head.next).toBeNull();
//   });

//   it('should make the head property point to the first node in the linked list', () => {
//     linkedList.insert('a');
//     linkedList.insert('b');
//     linkedList.insert('c');
//     expect(linkedList.head.value).toBe('c');
//     expect(linkedList.head.next.value).toBe('b');
//     expect(linkedList.head.next.next.value).toBe('a');
//     expect(linkedList.head.next.next.next).toBeNull();
//   });

//   it('should properly insert multiple nodes into the linked list', () => {
//     linkedList.insert('a');
//     linkedList.insert('b');
//     linkedList.insert('c');
//     expect(linkedList.head.value).toBe('c');
//     expect(linkedList.head.next.value).toBe('b');
//     expect(linkedList.head.next.next.value).toBe('a');
//     expect(linkedList.head.next.next.next).toBeNull();
//   });

//   it('should return true when finding an existing value', () => {
//     linkedList.insert('a');
//     linkedList.insert('b');
//     linkedList.insert('c');
//     expect(linkedList.includes('b')).toBe(true);
//   });

//   it('should return false when searching for a non-existing value', () => {
//     linkedList.insert('a');
//     linkedList.insert('b');
//     linkedList.insert('c');
//     expect(linkedList.includes('d')).toBe(false);
//   });

//   it('should properly return a collection of all the values in the linked list', () => {
//     linkedList.insert('a');
//     linkedList.insert('b');
//     linkedList.insert('c');
//     expect(linkedList.toString()).toBe('{ c } -> { b } -> { a } -> NULL');
//   });
// });