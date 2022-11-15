const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const THOUSAND_WON = 1000;
class App {
  constructor() {
    this.lottoCount = 0;
    this.bonusNum = 0;
    this.winingLotteryArr = [];
    this.lottoNumArr = [];
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
      this.lottoCount = forValidate / THOUSAND_WON;
      MissionUtils.Console.print(`${this.lottoCount}개를 구매했습니다.`);
      this.generateLottoNum(this.lottoCount);
      this.inputWinningLotteryNum();
    });
  }

  generateLottoNum(lottoCount) {
    for (let i = 0; i < lottoCount; i++) {
      const lottoRandomNum = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      lottoRandomNum.sort((a, b) => a - b);
      MissionUtils.Console.print(lottoRandomNum);
      lottoNumArr.push(lottoRandomNum);
    }
  }

  inputWinningLotteryNum() {
    MediaCapabilities.Console.readline(
      "당첨 번호를 입력해 주세요. \n",
      (input) => {
        this.winingLotteryArr = input.split(",").map((x) => parseInt(x));

        this.inputBonusNum();
      }
    );
  }

  inputBonusNum() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.\n",
      (inputBonusNum) => {
        this.bonusNum = parseInt(inputBonusNum);
        const lotto = new Lotto(
          this.winingLotteryArr,
          this.inputBonusNum,
          this.lottoCount,
          this.lottoNumArr
        );
        lotto.playLotto();
      }
    );
  }

  play() {
    this.getUserInputNumber();
  }
}

module.exports = App;
