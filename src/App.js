const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MONEY_UNIT, ERROR_MESSAGE } = require('./Constant');

const { splitNumbers } = require('./Utils');
const { MESSAGE } = require('./Constant');

const Utils = require('./Utils');
const Validator = require('./Validator');
const Lotto = require('./Lotto');
const UI = require('./UI');

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
    Console.readLine(MESSAGE.SET_INPUT, inputMoney => {
      Validator.validateInputMoney(inputMoney);
      this.getLottoCount(inputMoney);
      this.issueLottos();
      this.getResult();
    });
  }

  getLottoCount(inputMoney) {
    this.lottoCount = Number(inputMoney) / INPUT_MONEY_UNIT;
    UI.printLottoCount(this.lottoCount);
  }

  issueLottos() {
    this.setLottosRandomNumbers();
    UI.printLottos(this.lottos);
  }

  getResult() {
    Console.readLine(MESSAGE.GET_WINNING_NUMBER, inputNumbers => {
      this.setWinningNumbers(inputNumbers);
      Console.readLine(MESSAGE.GET_BONUS_NUMBER, inputBonusNumber => {
        this.setBonusNumber(inputBonusNumber);
        this.setResult();
        UI.printResult(this.result, this.lottoCount);
        Console.close();
      });
    });
  }

  setLottosRandomNumbers() {
    for (let i = 0; i < this.lottoCount; i += 1) {
      const numbers = Utils.setRandomNumbers();
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto);
    }
  }

  setBonusNumber(inputBonusNumber) {
    Validator.validateInputNumber(inputBonusNumber);
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
    Validator.validateInputNumbers(numbers);
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
}

const app = new App();
app.play();
module.exports = App;
