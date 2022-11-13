const { Console } = require('@woowacourse/mission-utils');

const {
  validateInputMoney,
  getLottoNumber,
  validateInputNumbers,
  validateInputNumber,
} = require('./Function');
const { MESSAGE } = require('./Constant');

const Function = require('./Function');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.lottoNumber = 0;
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.result = {
      3: 0,
      4: 0,
      5: 0,
      '5+': 0,
      6: 0,
      sum: 0,
    };
  }

  play() {
    Console.readLine(MESSAGE.SETINPUT, inputMoney => {
      validateInputMoney(inputMoney);
      this.lottoNumber = getLottoNumber(inputMoney);
      this.issueLottos(this.lottoNumber);
      this.getResult();
    });
  }

  issueLottos(lottoNumber) {
    for (let i = 0; i < lottoNumber; i += 1) {
      const numbers = Function.setRandomNumbers();
      const lotto = new Lotto(numbers);
      lotto.print();
      this.lottos.push(lotto);
    }
  }

  getResult() {
    Console.readLine(MESSAGE.GETWINNINGNUMBER, inputNumbers => {
      const numbers = inputNumbers.split(',').map(i => +i);
      validateInputNumbers(numbers);
      this.winningNumbers = numbers;
      Console.readLine(MESSAGE.GETBONUSNUMBER, inputBonusNumber => {
        validateInputNumber(inputBonusNumber);
        this.bonusNumber = inputBonusNumber;
        this.setResult();
        this.printResult();
        Console.close();
      });
    });
  }

  setResult() {
    for (const lotto of this.lottos) {
      const result = lotto.checkRank(this.winningNumbers, this.bonusNumber);
      switch (result.lotto) {
        case 3:
          this.result.sum += 1;
          this.result['3'] += 1;
          break;
        case 4:
          this.result.sum += 1;
          this.result['4'] += 1;
          break;
        case 5:
          this.result.sum += 1;
          if (result.bonus) {
            this.result['5+'] += 1;
            break;
          }
          this.result['5'] += 1;
          break;
        case 6:
          this.result.sum += 1;
          this.result['6'] += 1;
          break;
        default:
      }
    }
  }

  printResult() {
    Console.print(MESSAGE.RESULT);
    Console.print(MESSAGE.FIFTH(this.result['3']));
    Console.print(MESSAGE.FORTH(this.result['4']));
    Console.print(MESSAGE.THIRD(this.result['5']));
    Console.print(MESSAGE.SECOND(this.result['5+']));
    Console.print(MESSAGE.FIRST(this.result['6']));
    const sum = Math.round((this.result.sum / this.lottoNumber) * 10000) / 100;
    Console.print(MESSAGE.SUM(sum));
  }
}

const app = new App();
app.play();
module.exports = App;
