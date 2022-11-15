const { Console } = require("@woowacourse/mission-utils");
const MESSAGES = require('./Constants');
const lottoUtils = require('./LottoUtils');
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.lotto;
    this.payment;
    this.lottoNumbers;
    this.bonusNumber;
  }

  play() {
    this.setPayment();
  }

  setPayment = () => {
    Console.readLine(MESSAGES.PAYMENT, (payment) => {
      this.payment = payment;
      lottoUtils.validatePayment(this.payment);
      Console.print(`${this.payment / 1000}개를 구매했습니다.`);
      this.lottoNumbers = lottoUtils.getLottoNumbers(this.payment / 1000);
      this.setLottoNumber();
    });
  }

  setLottoNumber = () => {
    Console.readLine(MESSAGES.SET_LOTTO, (numbers) => {
      this.lotto = new Lotto(numbers.split(',').map((number) => parseInt(number)));
      this.setBonusLottoNumber();
    });
  }

  setBonusLottoNumber = () => {
    Console.readLine(MESSAGES.SET_BONUS, (number) => {
      this.bonusNumber = parseInt(number);
      lottoUtils.validateBonus(this.bonusNumber);
      this.lotto.validateBonus(this.bonusNumber);
      this.resultLotto();
    });
  }

  resultLotto = () => {
    const result = this.lotto.checkLotto(this.lottoNumbers, this.bonusNumber);
    const rateOfReturn = lottoUtils.caculateYield(result, this.lottoNumbers.length);
    lottoUtils.printResultLotto(result, rateOfReturn);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
