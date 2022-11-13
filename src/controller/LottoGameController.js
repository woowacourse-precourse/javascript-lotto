const { INPUT_MESSAGE } = require('../constant');
const Lotto = require('../Lotto');
const { readLine } = require('../utils/Utils');
const { MoneyValidator, BonusValidator } = require('../utils/Validator');

class LottoGameController {
  constructor(model) {
    this.lottoGameModel = model;
  }

  start() {
    this.setGame();
    const winning = this.pickWinningLotto();
    console.log(winning);
  }

  setGame() {
    readLine(INPUT_MESSAGE.MONEY, (input) => {
      MoneyValidator.validate(input);

      this.lottoGameModel.buyLotto(input);
    });
  }

  pickWinningLotto() {
    readLine(INPUT_MESSAGE.LOTTO_NUMBER, (input) => {
      let winningLotto = input.split(',').map(Number);
      winningLotto = this.pickBonusNumber(winningLotto);

      return winningLotto;
    });
  }

  pickBonusNumber(lotto) {
    readLine(INPUT_MESSAGE.BONUS_NUMBER, (input) => {
      BonusValidator.validate(lotto, input);

      return [...lotto, input];
    });
  }
}

module.exports = LottoGameController;
