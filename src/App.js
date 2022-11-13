const { Console } = require('@woowacourse/mission-utils');

const { validateInputMoney, getLottoNumber } = require('./Function');
const { MESSAGE } = require('./Constant');

const Function = require('./Function');
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
      console.log(this.lottos);
    });
  }

  issueLottos(lottoNumber) {
    for (let i = 0; i < lottoNumber; i += 1) {
      const numbers = Function.setRandomNumbers();
      console.log(numbers);
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto);
    }
  }
}

const app = new App();
app.play();
module.exports = App;
