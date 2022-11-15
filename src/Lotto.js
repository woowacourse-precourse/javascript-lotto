const { Random, Console } = require('@woowacourse/mission-utils');
const Calculator = require('./Calculator');
const { PRIZE_MATCH, LOTTO_MSG, NUM } = require('./Constants');
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
    if (numbers.length !== NUM.DEMAND_FOR_LOTTO_INPUT_COUNT) {
      throw new Error(LOTTO_MSG.INPUT_NUMBER_COUNT_ERROR);
    }
    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error(LOTTO_MSG.DUPLICATE_NUMBER_ERROR);
    }
  }

  makeSixNumbers() {
    return Random.pickUniqueNumbersInRange(NUM.MIN_RANGE, NUM.MAX_RANGE, NUM.HOW_MANY).sort(
      (num1, num2) => num1 - num2
    );
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
    Console.print(LOTTO_MSG.FIFTH_GRADE(fifthGrade));
    Console.print(LOTTO_MSG.FORTH_GRADE(forthGrade));
    Console.print(LOTTO_MSG.THIRTH_GRADE(thirdGrade));
    Console.print(LOTTO_MSG.SECOND_GRADE(secondGrade));
    Console.print(LOTTO_MSG.FIRST_GRADE(firstGrade));
  }
}

module.exports = Lotto;
