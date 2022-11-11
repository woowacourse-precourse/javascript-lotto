const LottoCounter = require('./LottoCounter');
const NumberGenerator = require('./NumberGenerator');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #countOfLotto;

  constructor() {
    this.lottoCounter;
    this.numberGenerator;
    this.lottos = [];
  }

  play() {
    this.inputCash();
  }

  inputCash() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      this.lottoCounter = new LottoCounter(input);
      this.countOfLotto = this.lottoCounter.getCountOfLotto();
      this.makeLotto();
    });
  }

  makeLotto() {
    this.numberGenerator = new NumberGenerator();

    while (this.countOfLotto !== 0) {
      let numbers = this.numberGenerator.createRandomSixNumbers();
      console.log(numbers);
      this.countOfLotto -= 1;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
