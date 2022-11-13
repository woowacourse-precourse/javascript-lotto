const MissionUtils = require("@woowacourse/mission-utils");
class App {

  #userEnterAmount;

  enterAmount() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (userEnterAmount) => {
      this.#userEnterAmount = userEnterAmount;
    });
  }

  getUserEnterAmount() {
    return this.#userEnterAmount;
  }

  play() {
    // 기능 1 : 사용자의 구입 금액 입력
    this.enterAmount();
  }
}

module.exports = App;
