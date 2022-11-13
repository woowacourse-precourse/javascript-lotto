const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./Message.js");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  getMatchCount(userNums) {
    let matchCounts = [];
    userNums.forEach((userNum) => {
      matchCounts.push(this.matchLotto(userNum));
    });
    return matchCounts;
  }

  matchLotto(userNum) {
    let matchNum = 0;
    this.#numbers.forEach((lottoNumber) => {
      if (userNum.includes(lottoNumber)) {
        matchNum += 1;
      }
    });
    return matchNum;
  }

  getMatchBonus(bonus, userNums) {
    const bonusArray = new Array(userNums.length).fill(false);
    userNums.forEach((userNum, index) => {
      if (userNum.includes(bonus)) {
        bonusArray[index] = true;
      }
    });
    return bonusArray;
  }

  getMatchResult(lottoResults, bonusResultArray) {
    const winningHistoryArray = new Array(5).fill(0);
    lottoResults.forEach((lottoResult, index) => {
      if (lottoResult >= 3) {
        const plusIndex = this.searchPlusIndex({
          lottoResult,
          bonusResultArray,
          index,
        });
        winningHistoryArray[plusIndex] += 1;
      }
    });
    return winningHistoryArray;
  }

  searchPlusIndex({ lottoResult, bonusResultArray, index }) {
    const FIVE_MATCH_INDEX = 3;
    const MIN_MATCH_COUNT = 3;
    if (lottoResult === 5) {
      if (bonusResultArray[index]) {
        return FIVE_MATCH_INDEX;
      }
      return lottoResult - MIN_MATCH_COUNT;
    }
    return lottoResult - MIN_MATCH_COUNT;
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
    const number = (profit / investment) * 100;
    MissionUtils.Console.print(`총 수익률은 ${number.toFixed(1)}%입니다.`);
  }

  validate(numbers) {
    const MAX_LENGTH = 6;
    if (numbers.length !== MAX_LENGTH) {
      throw new Error(Message.lottoNumberValidWarning);
    }
  }
}

module.exports = Lotto;
