const MissionUtils = require("@woowacourse/mission-utils");
// import Lotto from "./Lotto";
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.LottoCount = 0;
    this.Lotto = [];
  }

  play() {
    // 구입 금액 입력
    this.getLottoCount();
    // 구입 금액만큼 로또 번호 출력
    this.buyLotto();
    // 당첨 번호 입력
    // 보너스 번호 입력
    // 당첨 결과 출력
  }

  getLottoCount() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answers) => {
      this.checkPrice(answers);
      this.LottoCount = answers / 1000;
    });
  }

  checkPrice(answers) {
    if (typeof answers !== "number")
      throw new TypeError("[ERROR] 숫자를 입력해주세요.");
    if (answers % 1000)
      throw new RangeError("[ERROR] 1,000 단위로만 입력가능합니다.");
  }

  buyLotto() {
    for (let i = 0; i < this.LottoCount; i++) {
      this.Lotto = [...this.Lotto, new Lotto()];
    }
  }
}

module.exports = App;
