const Random = require("@woowacourse/mission-utils").Random;
const Console = require("@woowacourse/mission-utils").Console;
const inputValidation = require("../inputValidation");
const { INPUTS } = require("../constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.inputNumbers();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get inputNumbers() {
    return this.#numbers;
  }

  set inputNumbers(value) {
    const inputArr = value.split(",").map((value) => Number(value));
    this.#numbers = inputArr;
  }

  validate(numbers) {
    const checkSixNum = inputValidation.checkSixNum(numbers);
  }

  //당첨번호 입력받기
  inputNumbers() {
    Console.readLine(INPUTS.INPUT_NUMBERS, (numbers) => {
      this.#numbers = numbers;
    });
  }
}

new Lotto().inputNumbers;

module.exports = Lotto;
