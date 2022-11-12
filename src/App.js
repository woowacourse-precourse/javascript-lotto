const { Random, Console } = require("@woowacourse/mission-utils");
const { INPUT_MSG, ERROR_MSG, WINNING_MSG } = require("./constants/Message");
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
    this.winningLotto = new Array(6).fill(0);
    this.profit = 0;
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
    Console.readLine(INPUT_MSG.WINNING_NUMBER, (input) => {
      const numbers = input.split(",").map(Number);
      this.winningNumber = new Lotto(numbers);

      this.inputBonusNumber();
    });
  }
  inputBonusNumber() {
    Console.readLine(INPUT_MSG.BONUS_NUMBER, (input) => {
      input = Number(input);
      if (!this.validator.checkLottoNumber(input))
        Utils.error(ERROR_MSG.OVER_RANGE);
      if (this.winningNumber.isIncludes(input))
        Utils.error(ERROR_MSG.LOTTO_DUPLICATED);
      this.bonusNumber = input;
      this.getWinningLottos();
      this.printWinning();

      Console.close();
    });
  }

  getWinningLottos() {
    for (let lotto of this.lottos) {
      this.winningLotto[
        lotto.compare(this.winningNumber.getNumber(), this.bonusNumber)
      ] += 1;
    }
  }

  printWinning() {
    Console.print("당첨통계\n---");
    for (let rank = 5; rank > 0; rank--) {
      Console.print(`${WINNING_MSG[rank]}${this.winningLotto[rank]}`);
      this.profit += this.winningLotto[rank];
    }
  }

  play() {
    this.inputPurchase();
  }
}

module.exports = App;

const app = new App();
app.play();
