const LottoCounter = require('./LottoCounter');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #countOfLotto;
  constructor() {
    this.lottoCounter;
  }

  play() {
    this.inputCash();
  }

  inputCash() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      this.lottoCounter = new LottoCounter(input);
      this.countOfLotto = this.lottoCounter.getCountOfLotto();
      console.log(this.countOfLotto);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
