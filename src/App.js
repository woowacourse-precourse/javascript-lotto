const MissionUtils = require("@woowacourse/mission-utils");
const { isInDivisible, isNotNumber } = require("./utils/exception");
const Lotto = require('./Lotto');
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

  generateLotto() {
    const randomSixLottoNumber = Mission.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getUserEnterAmount() {
    return this.#userEnterAmount;
  }

  play() {
    // 기능 1 : 사용자의 구입 금액 입력
    this.enterAmount();
    // 기능 2 : 구입 금액 만큼의 로또 발행
    this.generateLotto();
    MissionUtils.Console.print("프로그램 종료");
    MissionUtils.Console.close();
  }
}

module.exports = App;
