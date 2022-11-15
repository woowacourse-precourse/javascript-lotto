const { Random, Console } = require('@woowacourse/mission-utils');
const Calculator = require('./Calculator');
const { PRIZE_MATCH } = require('./Constants');
const Utils = require('./Utils');

class Lotto {
  #numbers;

  constructor(userInputWinNumbers) {
    this.validate(userInputWinNumbers);
    this.#numbers = userInputWinNumbers;
    this.bonusNumber;
    this.bundle;
    this.resultMap = {
      fifthGrade: 0,
      forthGrade: 0,
      thirdGrade: 0,
      secondGrade: 0,
      firstGrade: 0,
      loseMoney: 0,
    };
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error('[ERROR] 중복된 숫자가 없어야 합니다.');
    }
  }

  makeSixNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((num1, num2) => num1 - num2);
  }

  bundleCreate(lottoCount) {
    this.bundle = Array.from({ length: lottoCount }, this.makeSixNumbers);
    return this.bundle;
  }

  getBundle() {
    return this.bundle;
  }

  getBonusNumber(UserInputBonusNumber) {
    this.bonusNumber = UserInputBonusNumber;
  }

  bundleVerifyForWin(winNumbers, bonusNumber, lottoBundle) {
    lottoBundle.forEach(lotto => {
      const count = this.compareNumberOfLotto(winNumbers, bonusNumber, new Set(lotto));
      this.resultMap[count] += 1;
    });
  }

  compareNumberOfLotto(winNumbers, bonusNumber, lotto) {
    const count = winNumbers.filter(number => lotto.has(number)).length;
    if (count === 5 && lotto.has(bonusNumber)) {
      return PRIZE_MATCH.FIVEPLUSBONUS;
    }
    return PRIZE_MATCH[count];
  }

  print() {
    const { fifthGrade, forthGrade, thirdGrade, secondGrade, firstGrade } = this.resultMap;
    Console.print(`3개 일치 (5,000원) - ${fifthGrade}개`);
    Console.print(`4개 일치 (50,000원) - ${forthGrade}개`);
    Console.print(`5개 일치 (1,500,000원) - ${thirdGrade}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${secondGrade}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${firstGrade}개`);
  }
}

module.exports = Lotto;
