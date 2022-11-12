const { LOTTO_INFO } = require('./common/constants');
const { lottoCount } = require('./utils/calculator');
const { Random } = require('./utils/missionUtil');
const { INPUT_MESSAGES } = require('./common/messages');
const LottoView = require('./LottoView');
const User = require('./User');
const Lotto = require('./Lotto');

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
    ).sort((a, b) => a - b);
  }

  craeteLottos(lottoCount) {
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const lotto = new Lotto(this.generateLottoNumbers());
      lottos.push(lotto.getLotto());
    }
    return lottos;
  }

  countLottos(money) {
    this.user.setLottoCount(lottoCount(money));
    this.user.setLottos(this.craeteLottos(this.user.getLottoCount()));
    this.lottoView.printLottoCount(this.user.getLottoCount());
    this.lottoView.printUserLottos(this.user.getLottos());
  }
}

module.exports = LottoGame;
