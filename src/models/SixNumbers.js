class SixNumbers {
  #sixNumbers;

  constructor(sixNumber) {
    this.#setSixNumbers(sixNumber);
  }

  #setSixNumbers(sixNumber) {
    this.#sixNumbers = sixNumber;
  }

  getSixNumbers() {
    return [...this.#sixNumbers];
  }
}

module.exports = SixNumbers;
