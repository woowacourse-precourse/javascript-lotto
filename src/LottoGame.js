const { LOTTO_INFO } = require('./common/constants');
const LottoView = require('./LottoView');
const { Random } = require('./utils/missionUtil');

class LottoGame {
  constructor() {
    const lottoView = new LottoView();
    lottoView.getPurchaseAmount();
  }

  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_INFO.BEGIN_NUMBER,
      LOTTO_INFO.END_NUMBER,
      LOTTO_INFO.COUNT
    );
  }
}

module.exports = LottoGame;
