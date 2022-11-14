const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {});
  }
}

module.exports = App;
