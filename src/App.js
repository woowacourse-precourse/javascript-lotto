const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_USER_INPUT, LOTTO_ERROR_MESSAGE } = require('./constants');
const createLottoNumbers = require('./createLotto');
const Lotto = require('./Lotto');

class App {
  play() {
    Console.readLine(LOTTO_USER_INPUT.PURCHASE_LOTTO, (purchaseLotto) => {
      if (this.validateUserInput(purchaseLotto)) {
        createLottoNumbers(purchaseLotto / 1000);
        this.inputWinLottoNumbers();
      }
    });
  }

  validateUserInput(purchaseLotto) {
    if (purchaseLotto < 1000) throw new Error(LOTTO_ERROR_MESSAGE.UNDER_MONEY);
    if (isNaN(purchaseLotto)) throw new Error(LOTTO_ERROR_MESSAGE.NOT_NUMBER);
    if (purchaseLotto % 1000 !== 0) throw new Error(LOTTO_ERROR_MESSAGE.NOT_DIVIDE);

    return true;
  }

  inputWinLottoNumbers() {
    Console.readLine(LOTTO_USER_INPUT.WIN_LOTTO_NUMBERS, (winLottoNumbers) => {
      const lottoNumbersAnswer = winLottoNumbers.split(',');
      new Lotto(lottoNumbersAnswer);
      this.inputBonusLottoNumber(lottoNumbersAnswer);
    });
  }

  inputBonusLottoNumber() {
    Console.readLine(LOTTO_USER_INPUT.BONUS_LOTTO_NUMBER, (bonusLottoNumber) => {
      Console.print(bonusLottoNumber);
    });
  }
}

module.exports = App;

const app = new App();
app.play();
