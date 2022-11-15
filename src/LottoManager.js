const {
  validInputBonusNumber,
  validInputWinningNumber,
} = require('./validation');
const {
  convertToInteger,
  getRandomNumbers,
  readLineConsole,
} = require('./utils');
const { LOTTO_MIN_BOUND, LOTTO_MAX_MOUND, LOTTO_COUNT } = require('./Constant');
const Lotto = require('./Lotto');

class LottoManager {
  #winningNumber;
  #bonusNumber;

  constructor() {
    this.#winningNumber = [];
    this.#bonusNumber = 0;
  }

  inputWinningNumber(callback) {
    readLineConsole('당첨 번호를 입력해 주세요.', (answer) => {
      const numbers = answer.split(',').map((str) => convertToInteger(str));

      this.#setWinningNumber([...numbers]);

      callback();
    });
  }

  inputBouseNumber(callback) {
    readLineConsole('보너스 번호를 입력해 주세요.', (answer) => {
      const bonusNumber = convertToInteger(answer);

      this.#setBonusNumber(bonusNumber);

      callback();
    });
  }

  publishLottos(count) {
    const lottos = [];

    for (let i = 0; i < count; i += 1) {
      const newLotto = this.#publishLotto();
      lottos.push(newLotto);
    }

    return lottos;
  }

  getBouseNumber() {
    return this.#bonusNumber;
  }

  getWinningNumber() {
    return this.#winningNumber;
  }

  #setWinningNumber(winningNumber) {
    validInputWinningNumber(winningNumber);

    this.#winningNumber = winningNumber;
  }

  #setBonusNumber(bonusNumber) {
    validInputBonusNumber(this.#winningNumber, bonusNumber);

    this.#bonusNumber = bonusNumber;
  }

  #publishLotto() {
    const randomNumbers = getRandomNumbers(
      LOTTO_COUNT,
      LOTTO_MIN_BOUND,
      LOTTO_MAX_MOUND,
    );

    randomNumbers.sort((a, b) => a - b);

    const lotto = new Lotto(randomNumbers);

    return lotto;
  }
}

module.exports = LottoManager;
