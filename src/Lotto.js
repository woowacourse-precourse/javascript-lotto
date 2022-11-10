const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  isIncorrectRange(numbers) {
    const filteredNumbers = numbers.filter((number) => (1 <= number && number <= 45));
    return filteredNumbers.length !== numbers.length; 
  }
  isDuplicated(numbers) {
    return numbers.length !== new Set(numbers).size;
  }
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if(this.isIncorrectRange(numbers)) {
      throw new Error("[ERROR] 로또 번호의 범위는 1~45 사이여야 합니다.")
    }
    if(this.isDuplicated(numbers)) {
      throw new Error("[ERROR] 로또 번호는 서로 중복 되지 않아야 합니다.");
    }
  }
}

module.exports = Lotto;
