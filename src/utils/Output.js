const MissionUtils = require('@woowacourse/mission-utils');
const LottoGenerator = require('../LottoGenerator');
const Lotto = require('../Lotto');

class Output {
  constructor() {
    this.lottoGenerator = new LottoGenerator();
  }
  
  printLottos(lottoCost) {
    const [lottoCount, lottoArr] = this.lottoGenerator.publishLotto(lottoCost);
    MissionUtils.Console.print('');
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    lottoArr.map((lotto) => {
      new Lotto(lotto, lottoCost);
      MissionUtils.Console.print(lotto);
    });
  }
}

module.exports = Output;
