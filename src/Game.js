const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const validate = require("./validation/validation");

class Game {
  constructor() {
    this.quantity = null;
    this.list = [];
  }

  setGame(input) {
    this.validate(input);
    this.quantity = input / 1000;
    this.generateWinningNumberList(this.quantity);
  }

  validate(input) {
    validate.moneyInput(input);
  }

  quantityOfPurchase() {
    Console.print(`${this.quantity}개를 구매했습니다.\n`);
  }

  generateWinningNumberList(quantity) {
    for (let i = 0; i < quantity; i++) {
      const winningNumber = new Lotto(
        Random.pickUniqueNumbersInRange(1, 45, 6)
      );
      this.list.push(winningNumber);
    }
  }

  printWinningNumberList() {
    this.list.forEach((el) => {
      el.printWinningNumber();
    });
  }
}

module.exports = Game;
