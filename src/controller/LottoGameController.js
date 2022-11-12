const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constant');
const { MoneyValidator } = require('../utils/Validator');

class LottoGameController {
  constructor(model, view) {
    this.lottoGameModel = model;
    this.lottoGameView = view;
  }

  start() {
    Console.readLine(INPUT_MESSAGE.MONEY, (input) => {
      MoneyValidator.validate(input);

      this.lottoGameModel.payMoney(input);
    });
  }
}

module.exports = LottoGameController;
