const MissionUtils = require("@woowacourse/mission-utils");
const {isInDivisible, isNotNumber} = require("./utils/exception");
class App {

  #userEnterAmount;

  userEnterException(userEnterAmount) {
    isInDivisible(userEnterAmount);
    isNotNumber(userEnterAmount);
  }

  enterAmount() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (userEnterAmount) => {
      this.userEnterException(userEnterAmount);
      this.#userEnterAmount = userEnterAmount;
    });
  }

  getUserEnterAmount() {
    return this.#userEnterAmount;
  }

  play() {
    // 기능 1 : 사용자의 구입 금액 입력
    this.enterAmount();
    MissionUtils.Console.print("프로그램 종료");
    MissionUtils.Console.close();
  }
}

module.exports = App;
