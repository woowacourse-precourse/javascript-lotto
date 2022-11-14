const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./Constants/Constants");
const Validation = require("./Validation");
const LottoGameOperator = require("./LottoGameOperator");

class LottoGame {
  #purchaseAmount;
  #LottoList;

  constructor() {
    this.operator = new LottoGameOperator();
  }

  play() {
    this.purchaseLotto();
  }

  purchaseLotto() {
    Console.readLine(MESSAGES.ENTER_PURCHASE_AMOUNT, (input) => {
      this.#purchaseAmount = Number(input);
      Validation.validatePurchaseAmount(this.#purchaseAmount);
      const lottoQuantity = this.operator.countLottoTickets(
        this.#purchaseAmount
      );

      this.operator.showLottoQuantity(lottoQuantity);
      this.#LottoList = this.operator.createLottoNumbers(lottoQuantity);
    });
  }

  makeWinningNumbers() {
    Console.readLine(MESSAGES.INPUT_WINNING_NUMBERS, (input) => {
      const winningNumbersArray = input.split(",");
      Validation.validateWinningNumbers(winningNumbers);

      this.#winningNumbers = winningNumbersArray.map(Number);
    });
  }
}

module.exports = LottoGame;
