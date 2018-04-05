'use strict';

export function Node(data) {
  this.data = data;
  this.children = [];
}

export class Tree {
  constructor() {
    this.root = null;
  }

  add(data, toNodeData) {
    const node = new Node(data);
    const parent = toNodeData ? this.findBFS(toNodeData) : null;
    if(parent) {
      parent.children.push(node);
    } else {
      if(!this.root) {
        this.root = node;
      } else {
        return 'Root node is already assigned';
      }
    }
  }

  remove(data) {
    if(this.root.data === data) {
      this.root = null;
    }

    const queue = [this.root];
    while(queue.length) {
      const node = queue.shift();
      for (let [index, child] of node.children.entries()) {
        if(child.data === data) {
          node.children.splice(index, 1);
        } else {
          queue.push(child);
        }
      }
    }
  }

  contains(data) {
    return !!this.findBFS(data);
  }

  findBFS(data) {
    const queue = [this.root];
    while(queue.length) {
      const node = queue.shift();
      if(node.data === data) {
        return node;
      }
      for(const child of node.children) {
        queue.push(child);
      }
    }
    return null;
  }

  _preOrder(node, fn) {
    if(node) {
      if(fn) {
        fn(node);
      }
      for(const child of node.children) {
        this._preOrder(child, fn);
      }
    }
  }

  _postOrder(node, fn) {
    if(node) {
      for(const child of node.children) {
        this._postOrder(child, fn);
      }
      if(fn) {
        fn(node);
      }
    }
  }

  traverseDFS(fn, method) {
    const current = this.root;
    if(method) {
      this[`_${method}`](current, fn);
    } else {
      this._preOrder(current, fn);
    }
  }

  traverseBFS(fn) {
    const queue = [this.root];
    while(queue.length) {
      const node = queue.shift();
      if(fn) {
        fn(node);
      }
      for(const child of node.children) {
        queue.push(child);
      }
    }
  }

  print() {
    if(!this.root) {
      return console.log('No root node found');
    }
    const newline = new Node('|');
    const queue = [this.root, newline];
    let string = '';
    while(queue.length) {
      const node = queue.shift();
      string += `${node.data.toString()}`;
      if(node === newline && queue.length) {
        queue.push(newline);
      }
      for(const child of node.children) {
        queue.push(child);
      }
    }
    console.log(string.slice(0, -2).trim());
  }

  printByLevel() {
    if(!this.root) {
      return console.log('No root node found');
    }
    const newline = new Node('\n');
    const queue = [this.root, newline];
    let string = '';
    while(queue.length) {
      const node = queue.shift();
      string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
      if(node === newline && queue.length) {
        queue.push(newline);
      }
      for(const child of node.children) {
        queue.push(child);
      }
    }
    console.log(string.trim());
  }
}
