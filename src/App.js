const MissionUtils = require('@woowacourse/mission-utils');
const BonusNumber = require('./models/BonusNumber');
const userInput = require('./IO/Input');
const Lotto = require('./Lotto');
const Money = require('./models/Money');
const Output = require('./IO/Output');
const WinningNumbers = require('./models/WinningNumbers');
const Result = require('./Result');

class App {
  money;
  lottoArray = [];
  winningNumbers;
  bonusNumber;

  constructor() {
    this.print = new Output();
  }

  play() {
    userInput.call(this, this.getLottos, this.getWinningNumbers, this.getBonusNumber, this.getResult);
  }

  getLottos(money) {
    const inputMoney = new Money(Number(money));
    this.money = inputMoney.money;

    const lottoCount = this.money / 1000;
    this.print.printUserLottoCount(lottoCount);

    for (let i = 0; i < lottoCount; i++) {
      const randomLottoNumber = this.getRandomLottoNumber();
      const lotto = new Lotto(randomLottoNumber);
      this.lottoArray.push(lotto);
      this.print.printUserLottoNumber(randomLottoNumber);
    }
  }

  getRandomLottoNumber() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers.sort((a, b) => a - b);
  }

  getWinningNumbers(numbers) {
    const inputWinningNumbers = new WinningNumbers(numbers);
    this.winningNumbers = inputWinningNumbers.winningNumbers;
  }

  getBonusNumber(bonusNumber) {
    const inputBonusNumber = new BonusNumber(this.winningNumbers, Number(bonusNumber));
    this.bonusNumber = inputBonusNumber.bonusNumber;
  }

  getResult() {
    const result = new Result(this.lottoArray, this.winningNumbers, this.bonusNumber, this.money);
    this.print.printResult(result.score, result.revenue);
  }
}

const app = new App();
app.play();

module.exports = App;
