const BonusNumber = require('./models/BonusNumber');
const userInput = require('./IO/Input');
const Money = require('./models/Money');
const Output = require('./IO/Output');
const WinningNumbers = require('./models/WinningNumbers');
const Result = require('./controllers/Result');
const RandomLotto = require('./models/RandomLotto');

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
    
    const randomLotto = new RandomLotto(money);
    const lottoCount = randomLotto.lottoCount;
    this.lottoArray = randomLotto.lottoArray;

    this.print.printUserLottoCount(lottoCount);
    this.print.printUserLottoNumber(this.lottoArray);
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
