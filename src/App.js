const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants.js");
const buyingAmountValidator = require("./buyingAmountValidator.js");
const LottoTicket = require("./LottoTicket.js");

class App {
  constructor() {
    this.buyingLottoNumber;
    this.lottoTicketList;
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
    return this.printBuyingLottoList();
  }

  printBuyingLottoList() {
    this.lottoTicketList = LottoTicket.publish(this.buyingLottoNumber);
  }
}

const a = new App();
a.play();

module.exports = App;
