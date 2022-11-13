const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers, bonusNumber) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber = bonusNumber
  }

  validate(numbers) {
    const deduplicationNumbers = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (deduplicationNumbers.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
    this.validateWinningNumbersRange(numbers);
  }

  validateWinningNumbersRange(numbers) {
    console.log(numbers);
    numbers.forEach((element) => {
      if (1 > element || element > 45) {
        throw new Error("[ERROR] 로또 번호는 1 ~ 45 사이의 숫자입니다.");
      }
      if (isNaN(element)) {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
    });
  }

  setBonusNumber(numbers, bonusNumber){
    this.validateBonus(numbers, bonusNumber)
    this.bonusNumber = bonusNumber
  }

  validateBonus(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 이미 로또번호에 포함된 번호입니다.");
    }

    if (1 > bonusNumber || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자입니다.");
    }

    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    this.printLottoResult(numbers, bonusNumber)
  }
  
  printLottoResult(){
    console.log('printLottoResult')
  }
}

module.exports = Lotto;
