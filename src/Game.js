const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./lib/constants');
const MyLottos = require('./MyLottos');
const Purchase = require('./Purchase');
const {
  getRateOfReturn,
  getRevenue,
  convertAnswerIntoArray,
} = require('./lib/utils/returnUtils');
const {
  printWinningResult,
  printMyLottosArray,
} = require('./lib/utils/printUtils');

const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const Result = require('./Result');

class Game {
  #purchase;
  #myLottos;
  #winning;
  #bonus;
  #result;

  constructor() {
    this.getInputPurchaseMoney();
  }

  initPurchase(money) {
    this.#purchase = new Purchase(money);
  }

  initMyLottos() {
    this.#myLottos = new MyLottos(this.#purchase.getPurchaseAccount());
  }

  initWinningLotto(array) {
    this.#winning = new Lotto(array);
  }

  initBonusNumber(bonus) {
    this.#bonus = new Bonus(bonus, this.#winning.getWinningNumbers());
  }

  initResult() {
    this.#result = new Result(
      this.#myLottos.getMyLottos(),
      this.#winning.getWinningNumbers(),
      this.#bonus.getBonusNumber()
    );
  }

  getPercentage() {
    return getRateOfReturn(
      getRevenue(this.#result.getWinningResult()),
      this.#purchase.getNumberTypeMoney()
    );
  }

  getInputPurchaseMoney() {
    Console.readLine(MESSAGE.INPUT_PURCHASE_MONEY, (money) => {
      this.initPurchase(money);
      this.initMyLottos();
      printMyLottosArray(this.#myLottos.getMyLottos());
      this.getInputWinningNumber();
    });
  }

  getInputWinningNumber() {
    Console.readLine(MESSAGE.INPUT_WINNING_NUMBER, (answer) => {
      this.initWinningLotto(convertAnswerIntoArray(answer));
      this.getInputBonusNumber();
    });
  }

  getInputBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (bonus) => {
      this.initBonusNumber(Number(bonus));
      this.initResult();
      printWinningResult(this.#result.getWinningResult(), this.getPercentage());
      Console.close();
    });
  }
}

module.exports = Game;
