class Lotto {
  #numbers;
  constructor(numbersArr) {
    this.#numbers = numbersArr;
    this.matchingResult = {};
    this.prizeResult = {};
  }
}

module.exports = Lotto;