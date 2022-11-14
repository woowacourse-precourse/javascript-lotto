const { Console, Random } = require("@woowacourse/mission-utils");
const { isLengthError, isDuplicate } = require("./utils");
class Lotto {
  #numbers;
  numberOfMatches = 0;
  isBonus = false;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((comp1, comp2) => comp1 - comp2);
  }

  validate(numbers) {
    if (isLengthError(numbers)) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (isDuplicate(numbers)) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  setNumberOfMatches(luckyNumbers) {
    this.#numbers.filter((number) => {
      if (luckyNumbers.includes(number)) {
        this.numberOfMatches += 1;
      }
    });
    return this;
  }

  setIsBonus(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      this.isBonus = true;
    }
    return this;
  }
}

module.exports = Lotto;
