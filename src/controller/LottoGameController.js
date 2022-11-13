const { INPUT_MESSAGE } = require('../constant');
const Lotto = require('../Lotto');
const { readLine } = require('../utils/Utils');
const { MoneyValidator } = require('../utils/Validator');

class LottoGameController {
  constructor(model) {
    this.lottoGameModel = model;
  }

  start() {
    this.setGame();
    this.pickWinningLotto();
  }

  setGame() {
    readLine(INPUT_MESSAGE.MONEY, (input) => {
      MoneyValidator.validate(input);

      this.lottoGameModel.buyLotto(input);
    });
  }

  pickWinningLotto() {
    readLine(INPUT_MESSAGE.LOTTO_NUMBER, (input) => {
      const winningNumber = input.split(',').map(Number);
    });
  }
}

module.exports = LottoGameController;
