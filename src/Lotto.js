const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation.js");

class Lotto {
  #numbers;

  constructor(numbers){
    this.validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers(){
    return this.#numbers;
  }

  validate(numbers) {
    Validation.isEachUniqueNumber(numbers);
    Validation.isValidLength(numbers);
    numbers.forEach(number => Validation.isValidRangeNumber(number));
  }
}

module.exports = Lotto;
