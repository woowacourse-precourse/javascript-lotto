const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
const Validation = require('./Validation');
const Const = require('./Const');
class App {
  constructor() {}
  play() {
    Console.readLine(Const.BUY_LOTTO_MESSAGE, price => {
      Validation.checkInputPrice(price);
    });
  }
}

module.exports = App;
