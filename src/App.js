const MissionUtils = require('@woowacourse/mission-utils');
const BonusNumber = require('./models/BonusNumber');
const userInput = require('./ui/Input');
const Lotto = require('./Lotto');
const Money = require('./models/Money');
const Output = require('./ui/Output');
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
    this.money = new Money(money).money;

    const lottoCount = this.money / 1000;
    this.print.printUserLottoCount(lottoCount);

    for (let i = 0; i < lottoCount; i++) {
      const randomLottoNumber = this.getRandomLottoNumber();
      const lotto = new Lotto(randomLottoNumber)
      this.lottoArray.push(lotto);
      this.print.printUserLottoNumber(randomLottoNumber);
    }
  }

  getRandomLottoNumber() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers.sort((a, b) => a - b);
  }

  getWinningNumbers(numbers) {
    this.winningNumbers = new WinningNumbers(numbers).winningNumbers;
  }

  getBonusNumber(bonusNumber) {
    this.bonusNumber = new BonusNumber(bonusNumber).bonusNumber;
  }

  getResult() {
    const result = new Result(this.lottoArray, this.winningNumbers, this.bonusNumber, this.money);
  }
}

const app = new App();
app.play();

module.exports = App;
