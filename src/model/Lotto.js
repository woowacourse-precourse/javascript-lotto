class Lotto {
  #winningNumbers;
  constructor(numbers) {
    numbers["winningNumber"] = this.#setConvertedWinningLottoNumber(numbers["winningNumber"]);
    this.validate(numbers["winningNumber"]);
    this.#winningNumbers = numbers;
  }

  getConvertedLottoNumber() {
    return this.#winningNumbers;
  }

  validate(numbers) {
    if (this.#isLengthNotEqualsSix(numbers)) throw Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (this.#isIncludeNotNumber(numbers)) throw Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    if (this.#isNotRangeValid(numbers)) throw Error("[ERROR] 로또 번호의 범위는 1~45 입니다.");
    if (this.#isDuplicatedValueExist(numbers))
      throw Error("[ERROR] 로또 번호는 중복되지 않습니다.");
  }

  #isNotRangeValid(numbers) {
    return numbers.some((number) => number < 1 || number > 45);
  }

  #isLengthNotEqualsSix(numbers) {
    return numbers.length !== 6;
  }

  #setConvertedWinningLottoNumber(numbers) {
    return this.#setSplittedNumber(numbers);
  }

  #setSplittedNumber(numbers) {
    return Array.from(numbers.split(","), this.#convertArgsStringToInt);
  }

  #isDuplicatedValueExist(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  #convertArgsStringToInt(number) {
    return +number;
  }

  #isIncludeNotNumber(numbers) {
    return numbers.includes(NaN);
  }
}

module.exports = Lotto;
