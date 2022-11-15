const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_USER_INPUT, LOTTO_ERROR_MESSAGE } = require('./constants');
const createLottoNumbers = require('./createLotto');
const Lotto = require('./Lotto');

class App {
  play() {
    Console.readLine(LOTTO_USER_INPUT.PURCHASE_LOTTO, (purchaseLotto) => {
      if (this.validateUserInput(purchaseLotto)) {
        this.inputWinLottoNumbers(createLottoNumbers(purchaseLotto / 1000));
      }
    });
  }

  validateUserInput(purchaseLotto) {
    if (purchaseLotto < 1000) throw new Error(LOTTO_ERROR_MESSAGE.UNDER_MONEY);
    if (isNaN(purchaseLotto)) throw new Error(LOTTO_ERROR_MESSAGE.NOT_NUMBER);
    if (purchaseLotto % 1000 !== 0) throw new Error(LOTTO_ERROR_MESSAGE.NOT_DIVIDE);

    return true;
  }

  inputWinLottoNumbers(purchaseLotto) {
    Console.readLine(LOTTO_USER_INPUT.WIN_LOTTO_NUMBERS, (winLottoNumbers) => {
      const lottoNumbersAnswer = winLottoNumbers.split(',');
      this.inputBonusLottoNumber(purchaseLotto, lottoNumbersAnswer);
    });
  }

  inputBonusLottoNumber(purchaseLotto, lottoNumbers) {
    Console.readLine(LOTTO_USER_INPUT.BONUS_LOTTO_NUMBER, (bonusLottoNumber) => {
      new Lotto(lottoNumbers, bonusLottoNumber, purchaseLotto);
    });
  }
}

module.exports = App;

const app = new App();
app.play();
