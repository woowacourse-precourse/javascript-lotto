const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.purchasedPrice = 0;
  }

  play() {
    // 구입 금액 입력
    this.getPurchasedPrice();
    // 구입 금액만큼 로또 번호 출력
    // 당첨 번호 입력
    // 보너스 번호 입력
    // 당첨 결과 출력
  }

  getPurchasedPrice() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answers) => {
      this.checkPrice();
      this.purchasedPrice = answers;
    });
  }

  checkPrice() {
    if (typeof answers !== "number")
      throw new TypeError("[ERROR] 숫자를 입력해주세요.");
    if (answers % 1000)
      throw new RangeError("[ERROR] 1,000 단위로만 입력가능합니다.");
  }
}

module.exports = App;
