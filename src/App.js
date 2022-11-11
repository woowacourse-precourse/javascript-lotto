const LottoCounter = require('./LottoCounter');
const NumberGenerator = require('./NumberGenerator');
const Lotto = require('./Lotto');
const BonusNumber = require('./BonusNumber');
const WinningChecker = require('./WinningChecker');
const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./utils/constants');

class App {
  constructor() {
    this.countOfLotto;
    this.purchasedLottos = [];
    this.winningNumbers;
    this.bonusNumber;
    this.lottoCounter;
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

    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_LOTTO_NUMBERS, (input) => {
      input = input.split(',').map((num) => Number(num));
      let newLotto = new Lotto(input);
      this.winningNumbers = newLotto.getLottoNumbers();

      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (input) => {
      let newBonusNumber = new BonusNumber(Number(input), this.winningNumbers);
      this.bonusNumber = newBonusNumber.getBonusNumber();

      this.checkWinning();
    });
  }

  checkWinning() {
    let checkWinner = new WinningChecker(
      this.purchasedLottos,
      this.winningNumbers,
      this.bonusNumber
    );
    checkWinner.findCountOfWinning();
  }
}

const app = new App();
app.play();

module.exports = App;
