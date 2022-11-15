const { Console } = require('@woowacourse/mission-utils');
const { LOTTO, MESSAGE } = require('./constant/Lotto');
const Validation = require('./Validation');
const Lotto = require('./Lotto');

class Game {
  initGame() {
    this.askNumber(MESSAGE.INPUT_MONEY, this.proceedStepOne.bind(this));
  }
  askNumber(message, callback) {
    Console.readLine(message, callback);
  }
  proceedStepOne(input) {
    Validation.validateMoney(input);
    const numberOfLotto = Math.floor(input / LOTTO.PRICE);
    const lottoList = this.issueLotto(numberOfLotto);
    this.lottoList = lottoList;
    this.printPurchaseResult(lottoList);
    this.askNumber(MESSAGE.INPUT_NUMBER, this.proceedStepTwo.bind(this));
  }
  issueLotto(numberOfLotto) {
    const lottoList = [];
    for (let i = 0; i < numberOfLotto; i++) {
      const numbers = Lotto.generateNumbers();
      const lottoNumber = new Lotto(numbers).getNumbers();
      lottoList.push(lottoNumber);
    }
    return lottoList;
  }
  printPurchaseResult(lottoList) {
    Console.print(MESSAGE.PURCHASE_RESULT(lottoList.length));
    lottoList.forEach((lotto) => {
      Console.print(MESSAGE.LOTTO_NUMBER(lotto));
    });
  }
}

module.exports = Game;
