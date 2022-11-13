const MissionUtils = require("@woowacourse/mission-utils");
class App {

  #userEnterAmount;

  isNotNumber(userEnterAmount) {
    if(isNaN(userEnterAmount) || /\s/g.test(userEnterAmount)) {
      throw new Error("[ERROR] 로또 구입 금액은 공백이 포함되지 않은 숫자 형태로 입력해야 합니다.")
    }
  }

  isInDivisible(userEnterAmount) {
    if(Number(userEnterAmount) % 1000 !== 0) {
      throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.')
    }
  }

  userEnterException(userEnterAmount) {
    this.isInDivisible(userEnterAmount);
    this.isNotNumber(userEnterAmount);
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
