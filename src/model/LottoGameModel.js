const Lotto = require('../Lotto');
const { pickUniqueNumbersInRange } = require('../utils/Utils');
const { LottoValidator, MoneyValidator } = require('../utils/Validator');
const LottoGameView = require('../view/LottoGameView');

class LottoGameModel {
  constructor() {}

  buyLotto(money) {
    const lottoCount = Number(money) / 1000;
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      const lotto = pickUniqueNumbersInRange(1, 45, 6);

      LottoValidator.validate(lotto);
      lottos.push(lotto);
    }

    return lottos;
  }
}

module.exports = LottoGameModel;
