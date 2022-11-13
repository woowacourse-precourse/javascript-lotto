const { INPUT_MESSAGE } = require('../constant');
const Lotto = require('../Lotto');
const { readLine } = require('../utils/Utils');
const { MoneyValidator, BonusValidator } = require('../utils/Validator');

class LottoGameController {
  constructor(model) {
    this.lottoGameModel = model;
    this.winningLotto;
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
      let winningLotto = input.split(',').map(Number);

      this.pickBonusNumber(winningLotto);
    });
  }

  pickBonusNumber(lotto) {
    readLine(INPUT_MESSAGE.BONUS_NUMBER, (input) => {
      BonusValidator.validate(lotto, input);

      this.winningLotto = [...lotto, Number(input)];
    });
  }
}

module.exports = LottoGameController;
