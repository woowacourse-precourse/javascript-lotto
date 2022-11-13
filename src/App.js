const { Console } = require('@woowacourse/mission-utils');

const { validateInputMoney, getLottoNumber } = require('./Function');
const { MESSAGE } = require('./Constant');

const Function = require('./Function');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.lottoNumber = 0;
    this.lottos = [];
  }

  play() {
    Console.readLine(MESSAGE.SETINPUT, inputMoney => {
      validateInputMoney(inputMoney);
      this.lottoNumber = getLottoNumber(inputMoney);
      this.issueLottos(this.lottoNumber);
    });
  }

  issueLottos(lottoNumber) {
    for (let i = 0; i < lottoNumber; i += 1) {
      const numbers = Function.setRandomNumbers();
      const lotto = new Lotto(numbers);
      lotto.print();
      this.lottos.push(lotto);
    }
  }
}

const app = new App();
app.play();
module.exports = App;
