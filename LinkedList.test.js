const LinkedList = require('./LinkedList');

describe('#prepend', () => {
  test('Should add element to the beginning of the list', () => {
    const list = new LinkedList();
    list.prepend(1);
    const oldHead = list.head;
    list.prepend(2);

    expect(list.head.value).toBe(2);
    expect(list.head.next).toBe(oldHead);
    expect(list.length).toBe(2);
  });
});

describe('#getByIndex', () => {
  test('should return null for index less than 0', () => {
    const list = LinkedList.fromValues(0, 1, 2);

    expect(list.getByIndex(-1)).toBeNull();
  });

  test('should return null for index greater than list length', () => {
    const list = LinkedList.fromValues(0, 1, 2);

    expect(list.getByIndex(3)).toBeNull();
  });

  test('should return head for index 0', () => {
    const list = LinkedList.fromValues(0, 1, 2);

    expect(list.getByIndex(0).value).toBe(0);
  });

  test('should return correct value for index', () => {
    const list = LinkedList.fromValues(0, 1, 2);

    expect(list.getByIndex(1).value).toBe(1);
  });
});

describe('#printAll', () => {
  test('should return null for index less than 0', () => {
    const list = LinkedList.fromValues(0, 2, 5);
    list.printAll();
    expect(list.printAll()).toBe('0 ~> 2 ~> 5 ~> null');
  });
});

describe('#insertAtIndex', () => {
  test('should return the same length as before insertion if try to insert at index less than 0', () => {
    const list = LinkedList.fromValues(0, 1, 2, 5, 12);
    list.insertAtIndex(-1, 30);

    expect(list.length).toBe(5);
  });

  test('should return the same length as before insertion if try to insert at index greater than list length', () => {
    const list = LinkedList.fromValues(0, 1, 2, 5, 12);
    list.insertAtIndex(8, 30);

    expect(list.length).toBe(5);
  });

  test('should return the correct length after insertion if try to insert at an existing index', () => {
    const list = LinkedList.fromValues(0, 1, 2, 5, 12);
    list.insertAtIndex(2, 30);

    expect(list.length).toBe(6);
  });

  test('should return the correct value inserted in the index added', () => {
    const list = LinkedList.fromValues(0, 1, 2, 5, 12);
    list.insertAtIndex(2, 30);

    expect(list.getByIndex(2).value).toBe(30);
  });
});

describe('#shift', () => {
  test('should remove the first element of the list', () => {
    const list = LinkedList.fromValues(0, 1, 2, 5, 12, 18);
    list.shift();

    expect(list.head.value).not.toBe(0);
    expect(list.length).toBe(5);
  });
});

describe('#removeAtIndex', () => {
  test('should return the same length as before insertion if try to remove at index less than 0', () => {
    const list = LinkedList.fromValues(0, 1, 2, 5, 12);
    list.removeAtIndex(-1);

    expect(list.length).toBe(5);
  });

  test('should return the same length as before insertion if try to remove at index greater than list length', () => {
    const list = LinkedList.fromValues(0, 1, 2, 5, 12);
    list.removeAtIndex(8);

    expect(list.length).toBe(5);
  });

  test('should return the correct length after insertion if try to remove at an existing index', () => {
    const list = LinkedList.fromValues(0, 1, 2, 5, 12);
    list.removeAtIndex(2);

    expect(list.length).toBe(4);
  });

  test('should return the correct value inserted in the index removed', () => {
    const list = LinkedList.fromValues(0, 1, 2, 5, 12);
    list.removeAtIndex(2);

    expect(list.getByIndex(2).value).toBe(5);
  });
});
