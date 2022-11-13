const { Console } = require('@woowacourse/mission-utils');
const { validateInputMoney, getLottoNumber } = require('./Function');
const { MESSAGE } = require('./Constant');

class App {
  constructor() {
    this.lottos = [];
  }

  play() {
    Console.readLine(MESSAGE.SETINPUT, inputMoney => {
      validateInputMoney(inputMoney);
      const lottoNumber = getLottoNumber(inputMoney);
    });
  }
}

const app = new App();
app.play();
module.exports = App;
