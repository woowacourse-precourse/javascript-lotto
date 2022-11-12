const GameGuide = require('./GameGuide');
const LottoGame = require('./LottoGame');
const { toNumberType, splitByComma } = require('./util');
const { Console } = require('@woowacourse/mission-utils');
const { ENTER_PURCHASE_AMOUNT, ENTER_WINNING_NUMBERS, ENTER_BONUS_NUMBER } = require('./constans');

const gameGuide = new GameGuide();
const lottoGame = new LottoGame();

class App {
  enterPurchaseAmount() {
    gameGuide.printInputGuideText(ENTER_PURCHASE_AMOUNT);

    Console.readLine('', (inputValue) => {
      const amount = toNumberType(inputValue);
      lottoGame.issueLotto(amount);
      this.enterUserInput(ENTER_WINNING_NUMBERS);
    });
  }

  enterWinningNumbers() {
    gameGuide.printInputGuideText(ENTER_WINNING_NUMBERS);

    Console.readLine('', (inputValue) => {
      const numbers = splitByComma(inputValue);
      lottoGame.drawLotto(numbers);
      this.enterUserInput(ENTER_BONUS_NUMBER);
    });
  }

  enterBonusNumber() {
    gameGuide.printInputGuideText(ENTER_BONUS_NUMBER);

    Console.readLine('', (inputValue) => {
      const number = toNumberType(inputValue);
      console.log(number);
      lottoGame.drawBonus(number);
    });
  }

  enterUserInput(inputType) {
    if (inputType === ENTER_PURCHASE_AMOUNT) {
      this.enterPurchaseAmount();
    }

    if (inputType === ENTER_WINNING_NUMBERS) {
      this.enterWinningNumbers();
    }

    if (inputType === ENTER_BONUS_NUMBER) {
      this.enterBonusNumber();
    }
  }

  play() {
    this.enterUserInput(ENTER_PURCHASE_AMOUNT);
  }
}

const app = new App();
app.enterBonusNumber();

module.exports = App;
