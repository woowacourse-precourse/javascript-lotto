const { INPUT_LOTTO_NUMBER_ERROR } = require("./constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.lottoNumberSort(numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(INPUT_LOTTO_NUMBER_ERROR);
    }
  }

  lottoNumberSort(numbers) {
    function compareNumbers(a, b) {
        return a - b
    }

    return numbers.sort(compareNumbers)
}

  getNumbers(){
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;