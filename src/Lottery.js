const { Console, Random } = require('@woowacourse/mission-utils');
const { INPUT, OUTPUT } = require('./Constants');
const LottoStore = require('./LottoStore');
const Lotto = require('./Lotto');

class Lottery {
  #lotto;
  #purchaseAmount;

  progress() {
    this.inputPurchaseAmount();

    /*
    const LOTTO = this.#lotto.getLotto();
    console.log(LOTTO)
    */
  }
  
  inputPurchaseAmount() {
    Console.readLine(INPUT.PURCHASE_AMOUNT, (amount) => {
      this.#purchaseAmount = new LottoStore(amount);
      this.printLottoAmount();
    });
  }

  printLottoAmount() {
    Console.print(OUTPUT.NEW_LINE + this.#purchaseAmount.getLottoAmount() + OUTPUT.PURCHASE_COUNT);
    Console.print(this.#purchaseAmount.getLottoNumber());
  }



  inputWinningNumber() {
    Console.readLine(INPUT.LOTTO_NUMBER, (numbers) => {
      this.#lotto = new Lotto(numbers.split(','));
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(INPUT.BONUS_NUMBER, (number) => {
      this.#lotto.setBonusNumber(number);
    });
  }


}

new Lottery().progress();

module.exports = Lottery;
