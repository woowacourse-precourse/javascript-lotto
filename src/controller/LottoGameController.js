const { INPUT_MESSAGE } = require('../constant');
const { readLine } = require('../utils/Utils');
const { MoneyValidator } = require('../utils/Validator');

class LottoGameController {
  constructor(model) {
    this.lottoGameModel = model;
  }

  start() {
    readLine(INPUT_MESSAGE.MONEY, (input) => {
      MoneyValidator.validate(input);

      this.lottoGameModel.buyLotto(input);
    });
  }
}

module.exports = LottoGameController;
