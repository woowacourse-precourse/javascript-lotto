const { Console, Random } = require("@woowacourse/mission-utils");
const MESSAGES = require('./Constants');
const Lotto = require("./Lotto");

class App {
  play() {
    Console.readLine(MESSAGES.PAYMENT, (payment) => {
      this.validatePayment(payment);
      Console.print(`${payment / 1000}개를 구매했습니다.`);
      const lottoNumbers = this.getLottoNumbers(payment / 1000);
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
      this.validateBonus(bonusNumber);
      lotto.validateBonus(bonusNumber);
      this.resultLotto(lotto, lottoNumbers, bonusNumber);
    });
  }

  resultLotto = (lotto, lottoNumbers, bonusNumber) => {
    const result = lotto.checkLotto(lottoNumbers, bonusNumber);
    console.log(result);
  }

  validatePayment = (payment) => {
    if(payment % 1000 !== 0){
      throw new Error(MESSAGES.ERROR.PAYMENT);
    }
  }

  getLottoNumbers = (purchaseNumber) => {
    const lottoNumbers = [];
    for(let i = 0; i < purchaseNumber; i++){
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      lottoNumbers.push(numbers);
      Console.print(`[${numbers.join(', ')}]`);
    } 
    return lottoNumbers;
  }

  validateBonus = (bonusNumber) => {
    if(bonusNumber === NaN) {
      throw new Error(MESSAGES.ERROR.FORM);
    }
    if(bonusNumber > 45 || bonusNumber < 1) {
      throw new Error(MESSAGES.ERROR.RANGE);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
