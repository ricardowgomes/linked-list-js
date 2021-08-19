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
