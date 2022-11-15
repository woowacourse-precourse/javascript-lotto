const { PURCHASE, LOTTO_PRICE } = require("./constants");
const { LottoValidation, checkIsNumber, checkZero, isUnit } = require("./LottoValidation");

class LottoGame {
  constructor() {
    this.profit = 0;
    this.lottoMatch = {
      three: 0,
      four: 0,
      five: 0,
      five_Bonus: 0,
      six: 0,
      out: 0,
    };
  }
  #money;
  #number_Purchase;
  #lotteries;
  #winningNumber;
  #lottoResult;
  #lottoIssuer;

  start() {
    Console.readLine(PURCHASE.INPUT_PRICE, (input) => this.purchase(input));
  }
  purchase(input) {
    this.setNumberPurchase(input);
    this.drawNumber(this.money / LOTTO_PRICE);
  }
  setNumberPurchase(input) {
    this.money = this.validateMoney(input);
  }
  validateMoney(input) {
    checkIsNumber(input);
    checkZero(input);
    isUnit(input, LOTTO_PRICE);
    return input;
  }
}
