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
    const rateOfReturn = this.caculateYield(result, lottoNumbers.length);
    this.printResultLotto(result, rateOfReturn);
    Console.close();
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

  caculateYield = (result, lottoNumber) => {
    const price = result.firstPlace * 2000000000 
    + result.secondPlace * 30000000 
    + result.thirdPlace * 1500000 
    + result.fourthPlace * 50000 
    + result.fifthPlace * 5000;
    return price / (lottoNumber * 1000) * 100;
  }

  printResultLotto = (result, rateOfReturn) => {
    Console.print(`당첨 통계`);
    Console.print(`---`);
    Console.print(`3개 일치 (5,000원) - ${result.fifthPlace}개`);
    Console.print(`4개 일치 (50,000원) - ${result.fourthPlace}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result.thirdPlace}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.secondPlace}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result.firstPlace}개`);
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

const app = new App();
app.play();

module.exports = App;
