const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./Constants/Constants");
const Validation = require("./Validation");
const LottoGameOperator = require("./LottoGameOperator");

class LottoGame {
  #purchaseAmount;
  #LottoList;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.operator = new LottoGameOperator();
  }

  play() {
    this.purchaseLotto();
  }

  purchaseLotto() {
    Console.readLine(MESSAGES.ENTER_PURCHASE_AMOUNT, (input) => {
      const amount = Number(input);
      Validation.validatePurchaseAmount(amount);
      this.#purchaseAmount = amount;
      const lottoQuantity = this.operator.countLottoTickets(
        this.#purchaseAmount
      );

      this.operator.showLottoQuantity(lottoQuantity);
      this.#LottoList = this.operator.createLottoNumbers(lottoQuantity);
      this.makeWinningNumbers();
    });
  }

  makeWinningNumbers() {
    Console.readLine(MESSAGES.INPUT_WINNING_NUMBERS, (input) => {
      const winningNumbersArray = input.split(",");
      Validation.validateWinningNumbers(winningNumbersArray);

      this.#winningNumbers = winningNumbersArray.map(Number);
      this.makeBonusNumber();
    });
  }

  makeBonusNumber() {
    Console.print(MESSAGES.INPUT_BONUS_NUMBER, (input) => {
      Validation.validateBonusNumber(Number(input), this.#winningNumbers);

      this.#bonusNumber = Number(input);
    });
  }
}

module.exports = LottoGame;
