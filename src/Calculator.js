const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, CONSTANTS, RANK, REWARD } = require("../constant/Message");

let total = 0;
class Calculator {
  #myLottos;
  #winningNumbers;
  #bonus;

  constructor(myLottos, winningNumbers, bonus) {
    this.#myLottos = myLottos;
    this.#winningNumbers = winningNumbers;
    this.#bonus = bonus;
    this.checkMatchingNumbers();
  }

  checkMatchingNumbers() {
    const matchingCount = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    const count = this.#myLottos.map((lotto) => {
      const rank =
        CONSTANTS.TWELVE -
        [...new Set([...lotto, ...this.#winningNumbers])].length;
      if (rank === 5 && lotto.includes(this.#bonus)) {
        return 7;
      }
      return rank;
    });
    count.map((item) => (matchingCount[item] += 1));
    this.printWinningStats(matchingCount);
  }

  printWinningStats(matchingCount) {
    Console.print("당첨 통계\n---");
    for (let index = 3; index <= 6; index++) {
      Console.print(`${RANK[index]} ${matchingCount[index]}개`);
      if (index === 5) {
        total += this.checkBonusReward(7, matchingCount);
      }
      total += REWARD[index] * matchingCount[index];
    }
  }

  returnTotal() {
    return total;
  }

  checkBonusReward(index, matchingCount) {
    Console.print(`${RANK[index]} ${matchingCount[index]}개`);
    return REWARD[index] * matchingCount[index];
  }
}

module.exports = Calculator;
