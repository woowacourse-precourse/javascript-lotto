/* eslint-disable class-methods-use-this */
class Counter {
  #matchName;

  #winnings;

  #count;

  constructor(matchName, winnings) {
    this.#matchName = matchName;
    this.#winnings = winnings;
    this.#count = 0;
  }

  get matchName() {
    return this.#matchName;
  }

  get WinningsByCount() {
    return this.#winnings * this.#count;
  }

  get winnings() {
    return this.#winnings;
  }

  increaseCount() {
    this.#count += 1;
  }

  get count() {
    return this.#count;
  }
}

module.exports = Counter;
