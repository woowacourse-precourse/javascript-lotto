const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MONEY_UNIT } = require('./Constant');

const {
  validateInputMoney,
  validateInputNumbers,
  validateInputNumber,
} = require('./Function');
const { MESSAGE } = require('./Constant');

const Function = require('./Function');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.lottoCount = 0;
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.result = {
      3: 0,
      4: 0,
      5: 0,
      '5+': 0,
      6: 0,
      reward: 0,
    };
  }

  play() {
    Console.readLine(MESSAGE.SETINPUT, inputMoney => {
      validateInputMoney(inputMoney);
      this.getLottoCount(inputMoney);
      this.issueLottos();
      this.getResult();
    });
  }

  getLottoCount(inputMoney) {
    this.lottoCount = Number(inputMoney) / INPUT_MONEY_UNIT;
    Console.print(MESSAGE.PRINTLOTTONUMBER(this.lottoCount));
  }

  issueLottos() {
    this.setLottosRandomNumbers();
    this.printLottos();
  }

  setLottosRandomNumbers() {
    for (let i = 0; i < this.lottoCount; i += 1) {
      const numbers = Function.setRandomNumbers();
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto);
    }
  }

  printLottos() {
    for (const lotto of this.lottos) {
      lotto.print();
    }
  }

  getResult() {
    Console.readLine(MESSAGE.GETWINNINGNUMBER, inputNumbers => {
      this.setWinningNumbers(inputNumbers);
      Console.readLine(MESSAGE.GETBONUSNUMBER, inputBonusNumber => {
        this.setBonusNumber(inputBonusNumber);
        this.setResult();
        this.printResult();
        Console.close();
      });
    });
  }

  setBonusNumber(inputBonusNumber) {
    validateInputNumber(inputBonusNumber);
    this.bonusNumber = inputBonusNumber;
  }

  setWinningNumbers(inputNumbers) {
    const numbers = this.splitNumbers(inputNumbers);
    validateInputNumbers(numbers);
    this.winningNumbers = numbers;
  }

  static splitNumbers(inputNumbers) {
    return inputNumbers.split(',').map(number => +number);
  }

  setResult() {
    for (const lotto of this.lottos) {
      const result = lotto.checkRank(this.winningNumbers, this.bonusNumber);
      switch (result.lotto) {
        case 3:
          this.result.reward += 5000;
          this.result['3'] += 1;
          break;
        case 4:
          this.result.reward += 50000;
          this.result['4'] += 1;
          break;
        case 5:
          if (result.bonus) {
            this.result.reward += 1500000;
            this.result['5+'] += 1;
            break;
          }
          this.result.reward += 30000000;
          this.result['5'] += 1;
          break;
        case 6:
          this.result.reward += 2000000000;
          this.result['6'] += 1;
          break;
        default:
      }
    }
  }

  static getRateOfReturn(reward, lottoCount) {
    return Math.round((reward / (lottoCount * 1000)) * 10000) / 100;
  }

  printResult() {
    Console.print(MESSAGE.RESULT);
    Console.print(MESSAGE.FIFTH(this.result['3']));
    Console.print(MESSAGE.FORTH(this.result['4']));
    Console.print(MESSAGE.THIRD(this.result['5']));
    Console.print(MESSAGE.SECOND(this.result['5+']));
    Console.print(MESSAGE.FIRST(this.result['6']));
    Console.print(MESSAGE.SUM(this.getRateOfReturn(this.result.reward)));
  }
}

const app = new App();
app.play();
module.exports = App;
