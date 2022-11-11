const LottoCounter = require('./LottoCounter');
const NumberGenerator = require('./NumberGenerator');
const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./utils/constants');

class App {
  #countOfLotto;

  constructor() {
    this.lottoCounter;
    this.numberGenerator = new NumberGenerator();
    this.lottos = [];
    this.firstPlaceLotto;
  }

  play() {
    this.inputCash();
  }

  inputCash() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_CASH, (input) => {
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
    MissionUtils.Console.print(this.countOfLotto + MESSAGE.PURCHASE_LOTTO);
    this.lottos.map((lotto) => MissionUtils.Console.print(lotto));
    MissionUtils.Console.print('');

    this.inputNumbersOfFirstPlace();
  }

  inputNumbersOfFirstPlace() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_NUMBERS, (input) => {
      input = input.split(',').map((num) => Number(num));
      let newLotto = new Lotto(input);
      this.firstPlaceLotto = newLotto.getLottoNumbers();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
