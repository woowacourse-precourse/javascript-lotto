const { Console } = require('@woowacourse/mission-utils');
const { WINNING_AMOUNT, WIN_MESSAGE, YIELD_MESSAGE } = require('./libs/const');
const Utils = require('./libs/Utils');
const Validations = require('./libs/Validations');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber = null;
    this.ranking = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    this.winningAmount = 0;
  }

  validate(numbers) {
    Validations.isSixLength(numbers);
    Validations.isRangePrize(numbers);
    Validations.isOverlapPrize(numbers);
  }

  // TODO: 추가 기능 구현

  bonusValidate(number) {
    Validations.isOverlapBonus(this.#numbers, number);
    Validations.isRange(number);
  }

  setBonusNum(userInput) {
    const number = Number(userInput);
    Validations.isCommaBonus(userInput);
    this.bonusValidate(number);
    this.bonusNumber = number;
    return number;
  }

  getPrizeMatch(userLottoNumber) {
    const matchArr = userLottoNumber.filter(item => {
      if (this.#numbers.includes(item)) {
        return item;
      }
      return null;
    });
    const count = matchArr.length;
    return count;
  }

  getBonusMatch(userLottoNumber) {
    const isContainBonus = userLottoNumber.includes(this.bonusNumber);
    return isContainBonus;
  }

  winCheck(userLottoes) {
    userLottoes.forEach(item => {
      const matchCount = this.getPrizeMatch(item);
      const isBonus = this.getBonusMatch(item);
      this.getRanking(matchCount, isBonus);
    });
  }

  getRanking(matchNumber, isBonus) {
    if (matchNumber === 3) this.ranking.fifth += 1;
    if (matchNumber === 4) this.ranking.fourth += 1;
    if (matchNumber === 5 && isBonus === false) this.ranking.third += 1;
    if (matchNumber === 5 && isBonus === true) this.ranking.second += 1;
    if (matchNumber === 6) this.ranking.first += 1;
  }

  winningAmountCalculation() {
    this.winningAmount += this.ranking.fifth * WINNING_AMOUNT.fifth;
    this.winningAmount += this.ranking.fourth * WINNING_AMOUNT.fourth;
    this.winningAmount += this.ranking.third * WINNING_AMOUNT.third;
    this.winningAmount += this.ranking.second * WINNING_AMOUNT.second;
    this.winningAmount += this.ranking.first * WINNING_AMOUNT.first;
  }

  printWinner() {
    Console.print(WIN_MESSAGE.statistics);
    Console.print(WIN_MESSAGE.divideLine);
    Utils.printUtil(WIN_MESSAGE.fifth, this.ranking.fifth);
    Utils.printUtil(WIN_MESSAGE.fourth, this.ranking.fourth);
    Utils.printUtil(WIN_MESSAGE.third, this.ranking.third);
    Utils.printUtil(WIN_MESSAGE.second, this.ranking.second);
    Utils.printUtil(WIN_MESSAGE.first, this.ranking.first);
  }

  yieldCaculation(purchaseAmount) {
    const yieldPercent = Utils.percentage(this.winningAmount, purchaseAmount);
    const localeYeild = Utils.convertLocale(yieldPercent);
    return localeYeild;
  }

  printYield(yeildPercent) {
    Console.print(
      `${YIELD_MESSAGE.front} ${yeildPercent}${YIELD_MESSAGE.back}`,
    );
  }
}

module.exports = Lotto;
