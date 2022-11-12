const MissionUtils = require('@woowacourse/mission-utils');
const LottoGenerator = require('./LottoGenerator');
const Lotto = require('./Lotto');

class LottoGame {
  constructor() {
    this.lottoGenerator = new LottoGenerator();
  }

  buyLotto() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (lottoCost) => {
      const [lottoCount, lottoArr] = this.lottoGenerator.publishLotto(lottoCost);
      this.validateLottoNumAndCost(lottoArr, lottoCost);
      this.viewLottos(lottoCount, lottoArr);
    })
  }

  viewLottos(lottoCount, lottoArr) {
    MissionUtils.Console.print('');
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    lottoArr.map((lotto) => {
      MissionUtils.Console.print(lotto);
    });
    MissionUtils.Console.print('');
  }

  validateLottoNumAndCost(lottoArr, lottoCost) {
    lottoArr.map((lotto) => {
      new Lotto(lotto, lottoCost);
    });
  }
}

module.exports = LottoGame;
