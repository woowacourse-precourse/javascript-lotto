const MissionUtils = require('@woowacourse/mission-utils');
const LottoGenerator = require('./LottoGenerator');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.lottoGenerator = new LottoGenerator();
  }

  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (lottoCost) => {
      const [lottoCount, lottoArr] = this.lottoGenerator.publishLotto(lottoCost);
      MissionUtils.Console.print('');
      MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
      lottoArr.map((lotto) => {
        new Lotto(lotto, lottoCost);
        MissionUtils.Console.print(lotto);
      });
    });
  }
}

const app = new App();
app.play();

module.exports = App;
