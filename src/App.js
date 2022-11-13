const { Console, Random } = require('@woowacourse/mission-utils');
const { validateInputMoney, getLottoNumber } = require('./Function');
const { MESSAGE } = require('./Constant');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.lottos = [];
  }

  play() {
    Console.readLine(MESSAGE.SETINPUT, inputMoney => {
      validateInputMoney(inputMoney);
      const lottoNumber = getLottoNumber(inputMoney);
      this.issueLottos(lottoNumber);
    });
  }

  issueLottos(lottoNumber) {
    for (let i = 0; i < lottoNumber; i += 1) {
      const numbers = [];
      while (numbers.length !== 6) {
        const number = Random.pickNumberInRange(1, 45);
        if (!numbers.includes(number)) numbers.push(number);
      }
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto);
    }
  }
}

const app = new App();
app.play();
module.exports = App;
