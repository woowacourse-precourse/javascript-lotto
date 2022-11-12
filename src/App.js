const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./Constants");
const Game = require("./Game");
const Validation = require("./Validation");

class App {
  constructor() {
    this.game = new Game();
  }

  purchaseLotto() {
    Console.readLine(MESSAGES.ENTER_PURCHASE_AMOUNT, (amount) => {
      Validation.checkAmountExceptions(amount);
      const lottoQuantity = this.game.countLottoTickets(amount);

      this.game.issueLotto(lottoQuantity);
      this.inputWinningNumbers();
    });
  }

  inputWinningNumbers() {
    Console.readLine(MESSAGES.INPUT_WINNING_NUMBERS, (input) => {
      //로또 번호 유효성 검사 Lotto에서 에러시 throw
      const winningNumbers = input.split(",");
      Validation.validateWinningNumbers(winningNumbers);

      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(MESSAGES.INPUT_BONUS_NUMBER, (bonusNumber) => {
      Validation.validateBonusNumber(bonusNumber);
    });
  }

  play() {
    this.purchaseLotto();
  }
}

const app = new App();
app.play();

module.exports = App;
