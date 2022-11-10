class LottoNumber {
  static RULE = Object.freeze({
    min: 1,
    max: 45,
  });

  #number;

  constructor(number) {
    this.#number = number;
  }

  static validate(number) {

  }

  static of(number) {
    return new LottoNumber(number);
  }
}

module.exports = LottoNumber;
