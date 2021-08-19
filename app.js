const LinkedList = require('./LinkedList');

const list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(0);

list.printAll();