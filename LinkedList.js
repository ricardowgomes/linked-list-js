class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  };

  prepend(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  };

}

module.exports = LinkedList;