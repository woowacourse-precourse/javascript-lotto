const { INPUT_MESSAGE } = require('../constant');
const { readLine } = require('../utils/Utils');
const { MoneyValidator } = require('../utils/Validator');

class LottoGameController {
  constructor(model, view) {
    this.lottoGameModel = model;
    this.lottoGameView = view;
  }

  start() {
    readLine(INPUT_MESSAGE.MONEY, (input) => {
      MoneyValidator.validate(input);

      this.lottoGameModel.buyLotto(input, this.lottoGameView);
    });
  }
}

module.exports = LottoGameController;
