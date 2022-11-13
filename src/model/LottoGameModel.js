const { LOTTO_INFO, CURRENCY_UNIT } = require('../constant');
const Lotto = require('../Lotto');
const { pickUniqueNumbersInRange } = require('../utils/Utils');
const { LottoValidator, MoneyValidator } = require('../utils/Validator');
const LottoGameView = require('../view/LottoGameView');

class LottoGameModel {
  buyLotto(money) {
    const lottoCount = Number(money) / CURRENCY_UNIT;
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      const lotto = pickUniqueNumbersInRange(
        LOTTO_INFO.START,
        LOTTO_INFO.END,
        LOTTO_INFO.COUNT
      );

      LottoValidator.validate(lotto);
      lottos.push(lotto);
    }

    return lottos;
  }
}

module.exports = LottoGameModel;
