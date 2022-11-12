const GameGuide = require('./GameGuide');
const InputException = require('./InputException');
const { toNumberType } = require('./util');
const { Console } = require('@woowacourse/mission-utils');
const { ENTER_PURCHASE_AMOUNT } = require('./constans');

const gameGuide = new GameGuide();
const inputException = new InputException();

class App {
  enterPurchaseAmount() {
    gameGuide.printInputGuideText(ENTER_PURCHASE_AMOUNT);

    Console.readLine('', (inputValue) => {
      const amount = toNumberType(inputValue);
      inputException.handlePurchaseAmountException(amount);
    });
  }

  enterUserInput(inputType) {
    if (inputType === ENTER_PURCHASE_AMOUNT) {
      this.enterPurchaseAmount();
    }
  }

  play() {
    this.enterUserInput(ENTER_PURCHASE_AMOUNT);
  }
}

const app = new App();
app.play();

module.exports = App;
