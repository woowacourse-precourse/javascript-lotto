class LogicChain {
  #ASYNC = 1;

  #SYNC = 2;

  constructor() {
    this.deque = [];
  }

  addNextJob(job) {
    this.deque.push([this.#SYNC, job]);
  }

  addNextAsyncJob(job) {
    this.deque.push([this.#ASYNC, job]);
  }

  #executeNext(value) {
    if (this.deque.length === 0) return;

    const job = this.deque.shift();
    if (job[0] === this.#SYNC) {
      job[1](value);
      this.#executeNext();
    }
    if (job[0] === this.#ASYNC) {
      job[1]((val) => {
        this.#executeNext(val);
      });
    }
  }

  execute() {
    this.#executeNext();
  }
}

module.exports = LogicChain;
