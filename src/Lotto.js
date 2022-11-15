const { Console } = require('@woowacourse/mission-utils');
const { WINNING_AMOUNT, WIN_MESSAGE, YIELD_MESSAGE } = require('./libs/const');
const {
  matchArrayNumbers,
  printUtil,
  percentage,
  convertLocale,
} = require('./libs/Utils');
const {
  isSixLength,
  isRangePrize,
  isOverlapPrize,
  isOverlapBonus,
  isRangeBonus,
  isCommaBonus,
} = require('./libs/Validations');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    isSixLength(numbers);
    isRangePrize(numbers);
    isOverlapPrize(numbers);
  }

  // TODO: 추가 기능 구현

  bonusValidate(number) {
    isOverlapBonus(this.#numbers, number);
    isRangeBonus(number);
  }

  setBonusNum(userInput) {
    const number = Number(userInput);
    isCommaBonus(userInput);
    this.bonusValidate(number);
    return number;
  }

  getPrizeMatch(userLottoNumber) {
    return matchArrayNumbers(this.#numbers, userLottoNumber);
  }

  getBonusMatch(userLottoNumber, bonusNumber) {
    const isContainBonus = userLottoNumber.includes(bonusNumber);
    return isContainBonus;
  }

  winCheck(userLottoes, bonusNumber) {
    let ranking = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    userLottoes.forEach(item => {
      const matchCount = this.getPrizeMatch(item);
      const isBonus = this.getBonusMatch(item, bonusNumber);
      const winners = this.getRanking(matchCount, isBonus);
      ranking = this.plusRanking(ranking, winners);
    });
    return ranking;
  }

  getRanking(matchNumber, isBonus) {
    const winners = [0, 0, 0, 0, 0];
    if (matchNumber === 3) winners[4] += 1;
    if (matchNumber === 4) winners[3] += 1;
    if (matchNumber === 5 && isBonus === false) winners[2] += 1;
    if (matchNumber === 5 && isBonus === true) winners[1] += 1;
    if (matchNumber === 6) winners[0] += 1;
    return winners;
  }

  plusRanking(ranking, winners) {
    const newRanking = ranking;
    newRanking.first += winners[0];
    newRanking.second += winners[1];
    newRanking.third += winners[2];
    newRanking.fourth += winners[3];
    newRanking.fifth += winners[4];
    return newRanking;
  }

  winningAmountCalculation(ranking) {
    let winningAmount = 0;
    winningAmount += ranking.fifth * WINNING_AMOUNT.fifth;
    winningAmount += ranking.fourth * WINNING_AMOUNT.fourth;
    winningAmount += ranking.third * WINNING_AMOUNT.third;
    winningAmount += ranking.second * WINNING_AMOUNT.second;
    winningAmount += ranking.first * WINNING_AMOUNT.first;
    return winningAmount;
  }

  printWinner(ranking) {
    Console.print(WIN_MESSAGE.statistics);
    Console.print(WIN_MESSAGE.divideLine);
    printUtil(WIN_MESSAGE.fifth, ranking.fifth);
    printUtil(WIN_MESSAGE.fourth, ranking.fourth);
    printUtil(WIN_MESSAGE.third, ranking.third);
    printUtil(WIN_MESSAGE.second, ranking.second);
    printUtil(WIN_MESSAGE.first, ranking.first);
  }

  yieldCaculation(winningAmount, purchaseAmount) {
    const yieldPercent = percentage(winningAmount, purchaseAmount);
    const localeYeild = convertLocale(yieldPercent);
    return localeYeild;
  }

  printYield(yeildPercent) {
    Console.print(
      `${YIELD_MESSAGE.front} ${yeildPercent}${YIELD_MESSAGE.back}`,
    );
  }
}

module.exports = Lotto;
