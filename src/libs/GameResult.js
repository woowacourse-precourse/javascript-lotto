const { Console } = require('@woowacourse/mission-utils');
const { WINNING_AMOUNT, WIN_MESSAGE, YIELD_MESSAGE } = require('./const');
const {
  convertLocale,
  percentage,
  printUtil,
  matchArrayNumbers,
} = require('./Utils');

class GameResult {
  enterBounsNumber(userInput) {
    this.Lotto.setBonusNum(userInput);
    this.lottoResults();
  }

  getPrizeMatch(userLottoNumber, prizeNumber) {
    return matchArrayNumbers(userLottoNumber, prizeNumber);
  }

  getBonusMatch(userLottoNumber, bonusNumber) {
    const isContainBonus = userLottoNumber.includes(bonusNumber);
    return isContainBonus;
  }

  winCheck(userLottoes, prizeNumber, bonusNumber) {
    let ranking = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    userLottoes.forEach(item => {
      const matchCount = this.getPrizeMatch(item, prizeNumber);
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

  yieldCaculation(winningAmount, purchaseAmount) {
    const yieldPercent = percentage(winningAmount, purchaseAmount);
    const localeYeild = convertLocale(yieldPercent);
    return localeYeild;
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

  printYieldPercent(yeildPercent) {
    Console.print(
      `${YIELD_MESSAGE.front} ${yeildPercent}${YIELD_MESSAGE.back}`,
    );
  }
}

module.exports = GameResult;
