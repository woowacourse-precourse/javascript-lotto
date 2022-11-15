const MissionUtils = require('@woowacourse/mission-utils');
const { start } = require('./Lotto');

class App {
  play() {
    start();
  }
}

const app = new App();
app.play();
module.exports = App;
