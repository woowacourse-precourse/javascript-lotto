const { Console } = require("@woowacourse/mission-utils");

class Calculator {
  #myLottos;
  #winningNumbers;
  #bonus;

  constructor(myLottos, winningNumbers, bonus) {
    this.#myLottos = myLottos;
    this.#winningNumbers = winningNumbers;
    this.#bonus = bonus;
    this.printWinningStats();
  }

  printWinningStats() {
    Console.print("당첨 통계\n---");
  }
}

module.exports = Calculator;
