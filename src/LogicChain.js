class LogicChain {
  constructor() {
    this.deque = [];
  }

  addNextLogic(nextLogic) {
    this.deque.push(nextLogic);
  }

  executeNext() {
    if (this.deque.length >= 2) this.deque.shift()(this.deque[0]);
    if (this.deque.length === 1) this.deque.shift()(null);
  }
}

module.exports = LogicChain;
