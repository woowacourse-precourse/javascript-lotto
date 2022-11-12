class Lotto {
  #winningNumbers;
  constructor(numbers) {
    this.#getConvertedWinningLottoNumber(numbers);
    this.validate(this.#winningNumbers);
  }

  validate(numbers) {
    if (this.#isLengthNotEqualsSix(numbers)) throw Error("6자리가 아님ㅋ");
    if (this.#isIncludeNotNumber(numbers)) throw Error("숫자가 아님ㅋ");
    if (this.#isNotRangeValid(numbers)) throw Error("1~45 사이의 숫자만 쓰셈ㅋ");
  }

  #isNotRangeValid(numbers) {
    return numbers.some((number) => number < 1 || number > 45);
  }

  #isLengthNotEqualsSix(numbers) {
    return numbers.length !== 6;
  }

  #getConvertedWinningLottoNumber(numbers) {
    this.#getSplittedNumber(numbers);
  }

  #getSplittedNumber(numbers) {
    this.#winningNumbers = Array.from(numbers.split(","), this.#convertArgsStringToInt);
  }

  #convertArgsStringToInt(input) {
    return +input;
  }

  #isIncludeNotNumber(input) {
    return input.includes(NaN);
  }
}

module.exports = Lotto;
