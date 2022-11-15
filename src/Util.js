const { Console } = require("@woowacourse/mission-utils/");
const { RESULT, LOTTO } = require("./constants");

class Util {
  printRankCount(rankCountTable) {
    Console.print("\n당첨 통계\n---\n");
    for (let index = 5; index > 0; index--) {
      Console.print(RESULT.RANK_PHRASE[index] + rankCountTable[index] + "개");
    }
  }

  getRankCount(userLottoList, winNumbers, bonusNumber) {
    let rankCountTable = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    userLottoList.forEach(userLotto => {
      rankCountTable[this.getUserRank(userLotto, winNumbers, bonusNumber)] += 1;
    });

    return rankCountTable;
  }

  getUserRank(userLotto, winNumbers, bonusNumber) {
    const result = this.compareUserNumberWithWinNumber(userLotto, winNumbers, bonusNumber);
    const matchingWinNumber = result[0];
    const matchingBonusNumber = result[1];
    switch (matchingWinNumber) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return (matchingBonusNumber == 0) ? 3 : 2;
      case 6:
        return 1;
      default:
        return 0;
    }
  }

  compareUserNumberWithWinNumber(userLotto, winNumbers, bonusNumber) {
    const matchingWinNumber = this.countUserNumberMatchingWithWinNumber(userLotto, winNumbers);
    const matchingBonusNumber = this.countUserNumberMatchingWithBonusNumber(userLotto, bonusNumber);
    return [matchingWinNumber, matchingBonusNumber];
  }
  
  countUserNumberMatchingWithWinNumber(userLotto, winNumbers) {
    let count = 0;
    userLotto.forEach(number => {
      if (winNumbers.includes(number)) {
        count += 1;
      }
    });
    return count;
  }
  
  countUserNumberMatchingWithBonusNumber(userLotto, bonusNumber) {
    if (userLotto.includes(bonusNumber)) {
      return 1;
    }
    return 0;
  }

  printEarningRate(rankCountTable, userMoney) {
    const earningRate = this.calculateEarningRate(rankCountTable, userMoney);
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }

  calculateEarningRate(rankCountTable, userMoney) {
    const totalEarn = this.calculateTotalEarn(rankCountTable);
    let earningRate = totalEarn / userMoney * 100;
    return earningRate.toFixed(1);
  }

  calculateTotalEarn(rankCountTable) {
    let totalEarn = 0;
    for (let index = 1; index < LOTTO.NUMBER_COUNT; index++) {
      totalEarn += (rankCountTable[index] * LOTTO.REWARD_TABLE[index]);
    }
    return totalEarn;
  }

}

module.exports = Util;