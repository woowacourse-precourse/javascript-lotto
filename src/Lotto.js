const isValidUserNumberInput = require("../src/ValidationCheck");
const CONDITION = require("../src/condition");

class Lotto {
  #numbers;
  bonusNumber;

  constructor(numbers, bonusNumber) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber = bonusNumber;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (!isValidUserNumberInput.hasOnlyNumber(numbers)) {
      throw new Error("[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.");
    }
    const numbersArrayList = numbers.split(",");
    for(var i = 0; i < numbersArrayList.length; i++) {
      if(numbersArrayList[i] > CONDITION.LOTTO_MAX_LANGE || 
        numbersArrayList[i] < CONDITION.LOTTO_MIN_LANGE) {
          throw new Error("[ERROR] 로또 번호는 1이상 45 이하 입니다.");
        }
    }
  }

  bonusValidate(bonusNumber) {
    if(typeof(Number) !== bonusNumber) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    if(bonusNumber < 0 || bonusNumber > 45) {
      throw new Error("[ERROR] 로또 번호는 1이상 45 이하 입니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
