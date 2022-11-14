class LogicChain {
  constructor() {
    this.deque = [];
  }

  addNextLogic(nextLogic) {
    this.deque.push(nextLogic);
  }

  executeNext() {
    if (this.deque.length > 0) this.deque.shift()();
  }
}

module.exports = LogicChain;
