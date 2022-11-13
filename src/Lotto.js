const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers, bonusNumber, candidateNumbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber = bonusNumber;
    this.candidateNumbers = candidateNumbers;
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

  setBonusNumber(numbers, bonusNumber) {
    this.validateBonus(numbers, bonusNumber);
    this.bonusNumber = bonusNumber;
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
    this.computeLottoResult(numbers, bonusNumber, this.candidateNumbers);
  }

  computeLottoResult(numbers, bonusNumber, candidateNumbers) {
    console.log(numbers, bonusNumber, candidateNumbers);
    candidateNumbers.forEach((candidateNumber) => {
      let countWinningNumber = candidateNumber.filter(x => numbers.includes(x)).length
      let countBonusNumber = candidateNumber.includes(bonusNumber) ? 1 : 0
      console.log(countWinningNumber, countBonusNumber)
    });
  }
  // printLottoResult(numbers, bonusNumber){
  //   console.log('printLottoResult',numbers,bonusNumber)
  //   MissionUtils.Console.print('3개 일치 (5,000원) - ${}개')
  //   MissionUtils.Console.print('4개 일치 (50,000원) - ${}개')
  //   MissionUtils.Console.print('5개 일치 (1,500,000원) - ${}개')
  //   MissionUtils.Console.print('5개 일치, 보너스 볼 일치 (30,000,000원) - ${}개')
  //   MissionUtils.Console.print('6개 일치 (2,000,000,000원) - ${}개')
  // }
}

module.exports = Lotto;
