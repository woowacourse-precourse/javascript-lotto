const { Console } = require("@woowacourse/mission-utils/");

class Util {
  printRankCount(rankCountTable) {
    Console.print("\n당첨 통계\n---\n");
    Console.print(`3개 일치 (5,000원) - ${rankCountTable[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${rankCountTable[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${rankCountTable[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCountTable[2]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${rankCountTable[1]}개`);
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
    const matchingWinNumber = this.countUserNumberMatchingWithWinNumber(userLotto, winNumbers)
    const matchingBonusNumber = this.countUserNumberMatchingWithBonusNumber(userLotto, bonusNumber);
    return [matchingWinNumber, matchingBonusNumber];
  }
  
  countUserNumberMatchingWithWinNumber(userLotto, winNumbers) {
    let count = 0;
    userLotto.forEach(number => {
      if (winNumbers.includes(number)) {
        count++;
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
}

module.exports = Util;