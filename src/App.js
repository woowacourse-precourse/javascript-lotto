const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants.js");
const buyingAmountValidator = require("./buyingAmountValidator.js");
const bonusNumberValidator = require("./bonusNumberValidator.js");
const LottoTicket = require("./LottoTicket.js");
const Lotto = require("./Lotto.js");

class App {
  constructor() {
    this.buyingLottoNumber;
    this.lottoTicketList;
    this.winningNumberList;
    this.bonusNumber;
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
    return this.InputWinningNumber();
  }

  InputWinningNumber() {
    Console.readLine(MESSAGE.INPUT_WINNING_NUMBER, (winningNumber) => {
      this.getWinningNumberList(winningNumber);
    });
  }

  getWinningNumberList(winningNumber) {
    this.winningNumberList = winningNumber.split(",");
    new Lotto(this.winningNumberList);
    this.inputBonusNumber();
  }

  inputBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      bonusNumberValidator(this.winningNumberList, bonusNumber);
      this.bonusNumber = bonusNumber;
    });
  }
}

const a = new App();
a.play();

module.exports = App;
