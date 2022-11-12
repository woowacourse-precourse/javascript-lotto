const { Random, Console } = require("@woowacourse/mission-utils");
const { INPUT_MSG, ERROR_MSG } = require("./constants/Message");
const Lotto = require("./Lotto");
const Utils = require("./Utils");
const Validator = require("./Validator");

class App {
  constructor() {
    this.validator = new Validator();
    this.lottos = [];
    this.winningNumber;
    this.bonusNumber = 0;
    this.purchase = 0;
  }
  printLotto(number) {
    Console.print(`${number}개를 구매했습니다.`);
    for (let index = 0; index < number; index++) {
      Console.print(this.lottos[index].getLotto());
    }
  }

  createLotto(number) {
    for (let cnt = 0; cnt < number; cnt++) {
      const lotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      this.lottos.push(lotto);
    }
  }

  inputPurchase() {
    Console.readLine(INPUT_MSG.PURCHASE_AMOUT, (input) => {
      const purchaseAmount = this.validator.checkPurchaseAmount(input, 1000);
      if (purchaseAmount === -1) Utils.error(ERROR_MSG.PURCHASE_AMOUT);

      this.createLotto(purchaseAmount);
      this.printLotto(purchaseAmount);
      this.inputWininngNumber();

      // Console.close();
    });
  }

  inputWininngNumber() {
    Console.readLine(`당첨 번호를 입력해 주세요.\n`, (input) => {
      const numbers = input.split(",").map(Number);
      this.winningNumber = new Lotto(numbers);
    });
  }

  play() {
    this.inputPurchase();
  }
}

module.exports = App;

const app = new App();
app.play();
