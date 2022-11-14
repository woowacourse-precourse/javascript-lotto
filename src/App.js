const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MONEY_UNIT, ERROR_MESSAGE } = require('./Constant');

const { getRateOfReturn, splitNumbers } = require('./Function');
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
    };
  }

  play() {
    Console.readLine(MESSAGE.SETINPUT, inputMoney => {
      Function.validateInputMoney(inputMoney);
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

  setBonusNumber(inputBonusNumber) {
    Function.validateInputNumber(inputBonusNumber);
    this.validateOverLapWithWinningNumbers(inputBonusNumber);
    this.bonusNumber = inputBonusNumber;
  }

  validateOverLapWithWinningNumbers(inputBonusNumber) {
    if (this.winningNumbers.includes(Number(inputBonusNumber))) {
      throw new Error(ERROR_MESSAGE.INPUT_MONEY);
    }
  }

  setWinningNumbers(inputNumbers) {
    const numbers = splitNumbers(inputNumbers);
    Function.validateInputNumbers(numbers);
    this.winningNumbers = numbers;
  }

  setResult() {
    for (const lotto of this.lottos) {
      const result = this.getRankInLotto(lotto);
      this.setLottoResult(result);
    }
  }

  setLottoResult(result) {
    if (result.bonus && result.lotto === '5') {
      this.result['5+'] += 1;
    } else if (Number(result.lotto) >= 3) {
      this.result[result.lotto] += 1;
    }
  }

  getRankInLotto(lotto) {
    return lotto.checkRank(this.winningNumbers, this.bonusNumber);
  }

  printResult() {
    Console.print(MESSAGE.RESULT);
    this.printRankResult();
    Console.print(
      MESSAGE.REWARD(getRateOfReturn(this.result, this.lottoCount)),
    );
  }

  printRankResult() {
    const ranks = Function.getRewardKey();

    for (const rank of ranks) {
      Console.print(MESSAGE[rank](this.result[rank]));
    }
  }
}

const app = new App();
app.play();
module.exports = App;
