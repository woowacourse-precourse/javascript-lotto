const { MissionUtils } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Money = require('./UserMoney');

class App{
  play() {
    let MONEY = new Money().getUserMoney();

  }
}

const app = new App();
app.play();

module.exports = App;
