const { input } = require('../utils/utils');
const { MESSAGE } = require('../utils/constants');

class InputView {
  constructor(lottoGame) {
    this.lottoGame = lottoGame;
  }

  inputCash() {
    input(MESSAGE.INPUT_CASH, (cash) => {
      this.lottoGame.setLottosQuantity(Number(cash));
    });
  }

  inputWinningNumbers() {
    input(MESSAGE.INPUT_WINNING_NUMBERS, (numbers) => {
      this.lottoGame.setWinningNumbers(numbers);
    });
  }

  inputBonusNumber() {
    input(MESSAGE.INPUT_BONUS_NUMBER, (number) => {
      this.lottoGame.setBonusNumber(Number(number));
    });
  }
}

module.exports = InputView;
