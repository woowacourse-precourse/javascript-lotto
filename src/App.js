const {Random, Console} = require("@woowacourse/mission-utils");
const {START_MASSAGE, ERROR_MASSAGE} = require("./message.js");
const isValidUserNumberInput = require("./ValidationCheck.js");
class App {
  constructor() {
    this.winningNumber = this.generateWinningNumber();
  }
  play() {
    Console.readLine(START_MASSAGE, (userInput) => {
      const { isValid, errorType } = isValidUserNumberInput(userInput);
      if(!isValid) {
        this.handleInputError(errorType);
      }
      if(isValid) {
        Console.print("성공적 입력");
        this.quitLotto();
      }
    })
  }

  purchaseInput() {

  }

  generateWinningNumber() {

  }

  handleInputError(errorType) {
    this.quitLotto();
    throw new Error(ERROR_MASSAGE[errorType]);
  }

  quitLotto() {
    Console.close();
  }
}

module.exports = App;
