const { Console } = require("@woowacourse/mission-utils");
const MESSAGES = require('./Constants');
const lottoUtils = require('./LottoUtils');
const Lotto = require("./Lotto");

class App {
  play() {
    this.setPayment();
  }

  setPayment = () => {
    Console.readLine(MESSAGES.PAYMENT, (payment) => {
      lottoUtils.validatePayment(payment);
      Console.print(`${payment / 1000}개를 구매했습니다.`);
      const lottoNumbers = lottoUtils.getLottoNumbers(payment / 1000);
      this.setLottoNumber(lottoNumbers);
    });
  }

  setLottoNumber = (lottoNumbers) => {
    Console.readLine(MESSAGES.SET_LOTTO, (numbers) => {
      const lotto = new Lotto(numbers.split(',').map((number) => parseInt(number)));
      this.setBonusLottoNumber(lotto, lottoNumbers);
    });
  }

  setBonusLottoNumber = (lotto, lottoNumbers) => {
    Console.readLine(MESSAGES.SET_BONUS, (number) => {
      const bonusNumber = parseInt(number);
      lottoUtils.validateBonus(bonusNumber);
      lotto.validateBonus(bonusNumber);
      this.resultLotto(lotto, lottoNumbers, bonusNumber);
    });
  }

  resultLotto = (lotto, lottoNumbers, bonusNumber) => {
    const result = lotto.checkLotto(lottoNumbers, bonusNumber);
    const rateOfReturn = lottoUtils.caculateYield(result, lottoNumbers.length);
    lottoUtils.printResultLotto(result, rateOfReturn);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
