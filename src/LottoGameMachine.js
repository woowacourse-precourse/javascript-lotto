const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const MESSAGE = require('./constants/message');
const generateLottoNumbers = require('./utils/generateRandomLottoNumbers');
const Validator = require('./Validator');

class LottoGameMachine {
  constructor() {
    this.totalPurchaseAmount = 0;
    this.totalLottosCount = 0;
    this.Lottos = new Map();
  }

  setTotalPurchaseAmount() {
    Console.readLine(MESSAGE.INPUT.TOTAL_PURCHASE_AMOUNT, (totalPurchaseAmount) => {
      Validator.validateTotalPurchaseAmount(totalPurchaseAmount);
      this.totalPurchaseAmount = totalPurchaseAmount;
      this.totalLottosCount = this.totalPurchaseAmount / 1000;
      this.setLottos();
      this.printLottoNumbers();
    });
  }

  setLottos() {
    let count = 0;

    while (count < this.totalLottosCount) {
      count += 1;
      this.Lottos.set(`로또${count}`, new Lotto(generateLottoNumbers()));
    }
  }

  printLottoNumbers() {
    Console.print(MESSAGE.OUTPUT.TOTAL_PURCHASE_AMOUNT(this.totalLottosCount));
    for (const lottoNumbers of this.Lottos.values()) {
      Console.print(lottoNumbers.getLottoNumbers());
    }
  }
}

module.exports = LottoGameMachine;
