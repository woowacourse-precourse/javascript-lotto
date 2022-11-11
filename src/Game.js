const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./lib/constants');
const MyLottos = require('./MyLottos');
const Purchase = require('./Purchase');
const { convertAnswerIntoArray } = require('./lib/utils');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');

class Game {
  #purchaseMoney;
  #myLottosArray;
  #purchaseAccount;
  #winningNumbers;
  #bonusNumber;

  constructor() {}

  initPurchase(money) {
    this.purchase = new Purchase(money);
    this.#purchaseMoney = this.purchase.getNumberTypeMoney();
    this.#purchaseAccount = this.purchase.getPurchaseAccount();
  }

  initMyLottos() {
    this.myLottos = new MyLottos(this.#purchaseAccount);
    this.#myLottosArray = this.myLottos.getMyLottos();
  }

  initWinningLotto(array) {
    this.winning = new Lotto(array);
    this.#winningNumbers = this.winning.getWinningNumbers();
  }

  initBonusNumber(bonus, winningNumbers) {
    this.bonus = new Bonus(bonus, winningNumbers);
    this.#bonusNumber = this.bonus.getBonusNumber();
  }

  printMyLottosArray() {
    this.#myLottosArray.forEach((item) => {
      Console.print(`[${item.join(', ')}]`);
    });
  }

  getInputPurchaseMoney() {
    Console.readLine(MESSAGE.INPUT_PURCHASE_MONEY, (money) => {
      this.initPurchase(money);
      this.initMyLottos();
      this.printMyLottosArray();
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
      this.initBonusNumber(bonus, this.#winningNumbers);
    });
  }
}

module.exports = Game;
