const { Console } = require('@woowacourse/mission-utils');
const Message = require("./Message.js");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  getWinningResult(bonus, userNumArrays) {
    const winningHistoryArray = new Array(5).fill(0);
    userNumArrays.forEach((userNumArray) => {
      const matchCount = userNumArray.filter((userNum) => this.#numbers.includes(userNum)).length;
      if (matchCount >= 3) {
        const plusIndex = this.searchPlusIndex({
          userNumArray,
          matchCount,
          bonus,
        });
        winningHistoryArray[plusIndex] += 1;
      }
    });
    return winningHistoryArray;
  }

  searchPlusIndex({ userNumArray, matchCount, bonus }) {
    const MIN_MATCH_COUNT = 3;
    if (matchCount === 5) {
      if (userNumArray.includes(bonus)) {
        return 3;
      }
    }
    return matchCount - MIN_MATCH_COUNT;
  }

  calculateProfit(lottoCounts) {
    let profit = 0;
    const MONEY_ARRAY = [5000, 50000, 1500000, 30000000, 2000000000];
    lottoCounts.forEach((lottoCount, index) => {
      profit += MONEY_ARRAY[index] * lottoCount;
    });
    return profit;
  }

  calculateProfitRate(profit, investment) {
    return (profit / investment) * 100;
  }

  makeWinningDetails(resultArray) {
    const RESULT_MESSAGE = [
      Message.INFORMATION.threeMatches,
      Message.INFORMATION.fourMatches,
      Message.INFORMATION.fiveMatches,
      Message.INFORMATION.fiveAndBonusMatches,
      Message.INFORMATION.sixMatches,
    ];

    const detail = [];
    for (let i = 0; i < resultArray.length; i++) {
      detail.push(`${RESULT_MESSAGE[i]} ${resultArray[i]}개`);
    }

    return detail;
  }

  printResult(winningDetails, profitRate) {
    const resultPrint =
      winningDetails.join("\n") +
      "\n" +
      `총 수익률은 ${profitRate.toFixed(1)}%입니다.`;
    Console.print(Message.INFORMATION.winningStatistics);
    Console.print(resultPrint);
  }

  result({ money, userNumber, bonusNumber }) {
    const result = this.getWinningResult(bonusNumber, userNumber);
    const profit = this.calculateProfit(result);
    const winningDetails = this.makeWinningDetails(result);
    const profitRate = this.calculateProfitRate(profit, money);
    this.printResult(winningDetails, profitRate);
  }

  validate(numbers) {
    const MAX_LENGTH = 6;
    if (numbers.length !== MAX_LENGTH) {
      throw new Error(Message.ERROR.lottoNumberValidWarning);
    }
  }
}

module.exports = Lotto;
