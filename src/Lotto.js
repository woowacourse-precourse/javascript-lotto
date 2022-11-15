const { Random, Console } = require('@woowacourse/mission-utils');
const Calculator = require('./Calculator');
const { PRIZE_MATCH, LOTTO_ERROR_MSG, NUM, LOTTO_RESULT_MSG } = require('./Constants');
const Utils = require('./Utils');

class Lotto {
  #numbers;

  constructor(userInputWinNumbers) {
    this.validate(userInputWinNumbers);
    this.#numbers = userInputWinNumbers;
    this.calculator = new Calculator();
    this.utils = new Utils();
    this.bonusNumber;
    this.bundle;
    this.spendMoneyOfUser;
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
    if (numbers.length !== NUM.COUNT_INPUT_FOR_WIN) {
      throw new Error(LOTTO_ERROR_MSG.IS_WRONG_NUMBER_COUNT);
    }
    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error(LOTTO_ERROR_MSG.IS_DUPLICATE_NUMBER);
    }
  }

  makeSixNumbers() {
    return Random.pickUniqueNumbersInRange(NUM.MIN_RANGE, NUM.MAX_RANGE, NUM.HOW_MANY).sort(
      (num1, num2) => num1 - num2
    );
  }

  bundleCreate(lottoCount) {
    this.bundle = Array.from({ length: lottoCount }, this.makeSixNumbers);
    this.spendMoneyOfUser = lottoCount * 1000;
    this.bundleVerifyForWin(this.#numbers, this.bonusNumber, this.bundle);
    return this.bundle;
  }

  setBonusNumber(UserInputBonusNumber) {
    this.bonusNumber = this.utils.transeStringToNumber(UserInputBonusNumber);
  }

  bundleVerifyForWin(winNumbers, bonusNumber, lottoBundle) {
    lottoBundle.forEach(lotto => {
      const count = this.compareNumberOfLotto(winNumbers, bonusNumber, new Set(lotto));
      this.resultMap[count] += 1;
    });
    this.profitRateOfUserPurchase(this.resultMap, this.spendMoneyOfUser);
  }

  compareNumberOfLotto(winNumbers, bonusNumber, lotto) {
    const count = winNumbers.filter(number => lotto.has(number)).length;
    if (count === 5 && lotto.has(bonusNumber)) {
      return PRIZE_MATCH.FIVEPLUSBONUS;
    }
    return PRIZE_MATCH[count];
  }

  profitRateOfUserPurchase(resultMap, UserInputMoney) {
    const totalprofit = this.calculator.profit(resultMap);
    return (this.resultMap.profitRate = this.calculator.profitRate(totalprofit, UserInputMoney));
  }

  getResultMap() {
    return this.resultMap;
  }
}

module.exports = Lotto;
