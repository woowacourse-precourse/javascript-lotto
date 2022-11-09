const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {}

  play() {}

  readLine(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
  }
}

const app = new App();
app.play();

module.exports = App;
