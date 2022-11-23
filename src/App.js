const MissionUtils = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');

class App {
  play() {
    const purchase = new Purchase();
    purchase.start();
  }
}

module.exports = App;
