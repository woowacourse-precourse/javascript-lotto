const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const ERROR = require('./constants/error');
const MESSAGE = require('./constants/message');
const generateLottoNumbers = require('./utils/generateRandomLottoNumbers');
const Validator = require('./Validator');

class LottoGameMachine {
  constructor() {
    this.totalPurchaseAmount = 0;
    this.Lottos = new Map();
  }

  setTotalPurchaseAmount() {
    Console.readLine(MESSAGE.INPUT.TOTAL_PURCHASE_AMOUNT, (totalPurchaseAmount) => {
      Validator.validateTotalPurchaseAmount(totalPurchaseAmount);
      this.totalPurchaseAmount = totalPurchaseAmount;
      this.setLottos();
    });
  }

  setLottos() {
    const totalCount = this.totalPurchaseAmount / 1000;
    let count = 0;

    while (count < totalCount) {
      count += 1;
      this.Lottos.set(`로또${count}`, new Lotto(generateLottoNumbers()));
    }
  }
}

module.exports = LottoGameMachine;
