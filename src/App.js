const LottoCounter = require('./LottoCounter');
const NumberGenerator = require('./NumberGenerator');
const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #countOfLotto;

  constructor() {
    this.lottoCounter;
    this.numberGenerator = new NumberGenerator();
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
    let num = this.countOfLotto;

    while (num !== 0) {
      let numbers = this.numberGenerator.createRandomSixNumbers();

      let newLotto = new Lotto(numbers);
      this.lottos.push(newLotto.getLottoNumbers());

      num -= 1;
    }
    this.printLottos();
  }

  printLottos() {
    MissionUtils.Console.print('');
    MissionUtils.Console.print(`${this.countOfLotto}개를 구매했습니다.`);
    this.lottos.map((lotto) => MissionUtils.Console.print(lotto));
  }
}

const app = new App();
app.play();

module.exports = App;
