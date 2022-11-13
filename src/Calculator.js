const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constant/Message");

class Calculator {
  #myLottos;
  #winningNumbers;
  #bonus;

  constructor(myLottos, winningNumbers, bonus) {
    this.#myLottos = myLottos;
    this.#winningNumbers = winningNumbers;
    this.#bonus = bonus;
    this.printWinningStats();
    this.checkMatchingNumbers();
  }

  checkMatchingNumbers() {
    const matchingCount = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, B: 0 };
    const count = this.#myLottos.map(
      (lotto) => [...new Set([...lotto, ...this.#winningNumbers])].length - 6
    );
    count.map((item) => (matchingCount[item] += 1));
    Console.print(matchingCount);
  }

  printWinningStats() {
    Console.print("당첨 통계\n---");
  }
}

module.exports = Calculator;
