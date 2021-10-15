const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor () {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
  }

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
  }

  enqueue(value) {
    this._storage[this._newestIndex] = value;
    this._newestIndex++;
  }

  dequeue() {
    let oldestIndex = this._oldestIndex;
    let deletedData = this._storage[oldestIndex];
 
    delete this._storage[oldestIndex];
    this._oldestIndex++;
 
    return deletedData;
  }

}
