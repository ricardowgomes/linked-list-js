class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  };

  prepend(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  };

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.head;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  };

  insertAtIndex(index, value) {
    if (index === 0) return this.prepend(value);

    const prev = this.getByIndex(index - 1);
    if (prev === null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  };

  removeAtIndex(index) {
    if (index === 0) return this.shift();

    const prev = this.getByIndex(index - 1);
    if (prev === null) return null;

    prev.next = prev.next.next;
    this.length--;
  };

  shift() {
    this.head = this.head.next;
    this.length--;
  };

  printAll() {
    let list = '';
    let current = this.head;

    while (current) {
      list = `${list}${current.value} ~> `;
      current = current.next;
    };
    return `${list}${null}`;
  };
};

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  };
};

LinkedList.fromValues = function (...values) {
  const list = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    list.prepend(values[i]);
  };
  return list;
};

module.exports = LinkedList;