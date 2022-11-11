const LottoCounter = require('./LottoCounter');
const NumberGenerator = require('./NumberGenerator');
const Lotto = require('./Lotto');
const BonusNumber = require('./BonusNumber');
const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./utils/constants');

class App {
  #countOfLotto;

  constructor() {
    this.lottoCounter;
    this.purchasedLottos = [];
    this.winningLottoNumbers;
    this.bonusNumber;
    this.numberGenerator = new NumberGenerator();
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
      this.purchasedLottos.push(newLotto.getLottoNumbers());

      num -= 1;
    }

    this.printLottos();
  }

  printLottos() {
    MissionUtils.Console.print('');
    MissionUtils.Console.print(
      this.countOfLotto + MESSAGE.COUNT_OF_PURCHASED_LOTTOS
    );
    this.purchasedLottos.map((lotto) => MissionUtils.Console.print(lotto));
    MissionUtils.Console.print('');

    this.inputWinningLottoNumbers();
  }

  inputWinningLottoNumbers() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_LOTTO_NUMBERS, (input) => {
      input = input.split(',').map((num) => Number(num));
      let newLotto = new Lotto(input);
      this.winningLottoNumbers = newLotto.getLottoNumbers();

      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (input) => {
      let newBonusNumber = new BonusNumber(
        Number(input),
        this.winningLottoNumbers
      );
      this.bonusNumber = newBonusNumber.getBonusNumber();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
