const { Console } = require('@woowacourse/mission-utils');
const { validateInputMoney } = require('./Function');
const { MESSAGE } = require('./Constant');

class App {
  play() {
    Console.readLine(MESSAGE.SETINPUT, inputMoney => {
      validateInputMoney(inputMoney);
    });
  }
}

const app = new App();
app.play();
module.exports = App;
