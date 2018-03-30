'use strict';

import Array from './array/array.es6';
import HashTable from './hash-table/hash-table.es6';
import Set from './set/set.es6';
import SinglyLinkedList from './singly-linked-list/singly-linked-list.es6';
import DoublyLinkedList from './doubly-linked-list/doubly-linked-list.es6';
import Stack from './stack/stack.es6';
import Queue from './queue/queue.es6';

class DataStructure {
  constructor(app) {
    this.controllers = {
      array: new Array(app),
      hashtable: new HashTable(app),
      set: new Set(app),
      singlylinkedlist: new SinglyLinkedList(app),
      doublylinkedlist: new DoublyLinkedList(app),
      stack: new Stack(app),
      queue: new Queue(app)
    };
    app.controllers = this.controllers;
  }
}
