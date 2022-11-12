class Lotto {
  #winningNumbers;
  constructor(numbers) {
    this.#getConvertedWinningLottoNumber(numbers);
    this.validate(this.#winningNumbers);
  }

  validate(numbers) {
    if (this.#isLengthNotEqualsSix(numbers)) throw Error("6자리가 아님ㅋ");
  }

  #isLengthNotEqualsSix(numbers) {
    return numbers.length !== 6;
  }
}

module.exports = Lotto;
