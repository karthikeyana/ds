'use strict';

import Array from './array/array.es6';
import HashTable from './hash-table/hash-table.es6';
import Set from './set/set.es6';

class DataStructure {
  constructor(app) {
    this.controllers = {
      array: new Array(app),
      hashtable: new HashTable(app),
      set: new Set(app)
    };
    app.controllers = this.controllers;
  }
}
