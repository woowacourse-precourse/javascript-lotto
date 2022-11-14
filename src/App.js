const { Console, Random } = require("@woowacourse/mission-utils");
const MESSAGES = require('./Constants');
const Lotto = require("./Lotto");

class App {
  play() {
    Console.readLine(MESSAGES.PAYMENT, (payment) => {
      this.checkPayment(payment);
      Console.print(`${payment / 1000}개를 구매했습니다.`);
      const lottoNumbers = this.getLottoNumbers(payment / 1000);
      this.setLottoNumber();
    });
  }
  checkPayment = (payment) => {
    if(payment % 1000 !== 0){
      throw new Error(MESSAGES.ERROR.PAYMENT);
    }
  }
  getLottoNumbers = (purchaseNumber) => {
    const lottoNumbers = [];
    for(let i = 0; i < purchaseNumber; i++){
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      lottoNumbers.push(numbers);
      Console.print(numbers);
    } 
    return lottoNumbers;
  }
  setLottoNumber = () => {
    Console.readLine(MESSAGES.SET_LOTTO, (answer) => {
      Console.print(answer);
    })
  }
}

const app = new App();
app.play();

module.exports = App;
