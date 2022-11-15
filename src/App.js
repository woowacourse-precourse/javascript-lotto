const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const THOUSAND_WON = 1000;
class App {
  constructor() {
    this.userMoney = 0;
    this.lottoCount = 0;
  }

  getUserInputNumber() {
    MissionUtils.Console.readline("구입금액을 입력해 주세요.", (inputMoney) => {
      const forValidate = parseInt(inputMoney);

      if (isNaN(forValidate)) {
        throw new Error("[ERROR] 숫자를 입력해주십시오.");
      }

      if (
        forValidate == "" ||
        forValidate == null ||
        forValidate == undefined ||
        (forValidate != null &&
          typeof forValidate == "object" &&
          !Object.keys(forValidate).length)
      ) {
        throw new Error("[ERROR] 금액을 제대로 입력해주십시오.");
      }

      if (forValidate % THOUSAND_WON != 0) {
        throw new Error("[ERROR] 천 원 단위로 입력해주십시오.");
      }
      this.userMoney = forValidate;
      this.lottoCount = forValidate / THOUSAND_WON;
      MissionUtils.Console.print(`${this.lottoCount}개를 구매했습니다.`);
      this.generateLottoNum(this.lottoCount);
    });
  }

  generateLottoNum(lottoCount) {}
  play() {}
}

module.exports = App;
