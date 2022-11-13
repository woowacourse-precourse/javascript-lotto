const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    MissionUtils.Console.readLine('구입금액을 입력해주세요.', (answer) => {});
  }
}

const test = new App();
test.play();

module.exports = App;
