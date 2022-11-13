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
      });
    });
  }

  setResult() {}

  printResult() {}
}

const app = new App();
app.play();
module.exports = App;
