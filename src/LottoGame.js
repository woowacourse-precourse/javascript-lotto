const { LOTTO_INFO } = require('./common/constants');
const { lottoCount } = require('./utils/calculator');
const { Random } = require('./utils/missionUtil');
const { INPUT_MESSAGES } = require('./common/messages');
const LottoView = require('./LottoView');
const User = require('./User');

class LottoGame {
  constructor() {
    this.lottoView = new LottoView();
    this.user = new User();
  }

  start() {
    this.lottoView.getUserInput(`${INPUT_MESSAGES.AMOUNT}\n`, (money) => {
      this.countLottos(money);
    });
  }

  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_INFO.BEGIN_NUMBER,
      LOTTO_INFO.END_NUMBER,
      LOTTO_INFO.COUNT
    );
  }

  countLottos(money) {
    this.user.setLottoCount(lottoCount(money));
    return this.lottoView.printLottoCount(this.user.getLottoCount());
  }
}

module.exports = LottoGame;
