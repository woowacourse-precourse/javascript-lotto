const {Random, Console} = require("@woowacourse/mission-utils");
const {LOTTO_MESSAGE, ERROR_MESSAGE} = require("./message.js");
const isValidUserNumberInput = require("./ValidationCheck.js");
const Lotto = require("./Lotto.js");
class App {
  play() {
    Console.readLine(LOTTO_MESSAGE.START_MESSAGE, (purchaseInput) => {
      const { isValid, errorType } = isValidUserNumberInput(purchaseInput);
      if(!isValid) {
        this.handleInputError(errorType);
      }
    });
    this.inputWinningNumber();
  }

  inputWinningNumber() {
    Console.readLine(LOTTO_MESSAGE.WINNING_NUMBER_INPUT_MESSAGE,(winningInput) => {
      const lotto = new Lotto();
      lotto.validate(winningInput);
    });
    Console.readLine(BONUS_NUMBER_INPUT_MESSAGE,(bonusInput) => {
      lotto.bonusValidate(bonusInput);
    });
  };
  
  handleInputError(errorType) {
    this.quitLotto();
    throw new Error(ERROR_MESSAGE[errorType]);
  }

  quitLotto() {
    Console.close();
  }
}

module.exports = App;
