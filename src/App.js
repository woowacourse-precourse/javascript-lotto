const MissionUtils = require("@woowacourse/mission-utils");
class App {

  #userEnterAmount;

  isInDivisible(userEnterAmount) {
    if(Number(userEnterAmount) % 1000 !== 0) {
      throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.')
    }
  }

  userEnterException(userEnterAmount) {
    this.isInDivisible(userEnterAmount);
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
  }
}

module.exports = App;
