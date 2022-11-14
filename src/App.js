const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants.js");
const buyingAmountValidator = require("./buyingAmountValidator.js");

class App {
  constructor() {
    this.buyingLottoNumber;
  }

  play() {
    this.inputBuyingAmount();
  }

  inputBuyingAmount() {
    Console.readLine(MESSAGE.INPUT_BUYING_AMOUNT, (BuyingAmount) => {
      this.buyingLottoNumber = buyingAmountValidator(BuyingAmount);
      this.printBuyingLottoNumber();
    });
  }
  printBuyingLottoNumber() {
    Console.print(`${this.buyingLottoNumber}${MESSAGE.BUYING_LOTTO_NUMBER}`);
  }
}

const a = new App();
a.play();

module.exports = App;
