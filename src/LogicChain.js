class LogicChain {
  #ASYNC = 1;

  #SYNC = 2;

  constructor() {
    this.deque = [];
  }

  addNextLogic(nextLogic) {
    this.deque.push([this.#SYNC, nextLogic]);
  }

  addNextAsyncLogic(nextLogic) {
    this.deque.push([this.#ASYNC, nextLogic]);
  }

  #executeNext() {
    if (this.deque.length === 0) return;

    const job = this.deque.shift();
    if (job[0] === this.#SYNC) {
      job[1]();
      this.#executeNext();
    }
    if (job[0] === this.#ASYNC) {
      job[1](() => {
        this.#executeNext();
      });
    }
  }

  execute() {
    this.#executeNext();
  }
}

module.exports = LogicChain;
