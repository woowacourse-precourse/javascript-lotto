const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const THOUSAND_WON = 1000;
class App {
  constructor() {
    this.userMoney = 0;
    this.lottoCount = 0;
    this.winingLotteryArr = [];
    // this.lotto = new Lotto(this.lottoCount);
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
      this.inputWinningLotteryNum();
    });
  }

  generateLottoNum(lottoCount) {
    const lottoNumArr = [];
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
        this.winningLotteryValidate(winingLotteryArr);

        this.inputBonusNum();
      }
    );
  }

  winningLotteryValidate(winingLotteryArr) {
    const forValidateNum = winingLotteryArr;
    if (forValidateNum.length != 6) {
      throw new Error("[ERROR] 6개의 숫자를 입력해주세요.");
    }

    forValidateNum.forEach((number) => {
      if (isNaN(number)) {
        throw new Error("[ERROR] 숫자만 입력해주세요.");
      }

      if (
        number == "" ||
        number == null ||
        number == undefined ||
        (number != null &&
          typeof number == "object" &&
          !Object.keys(number).length)
      ) {
        throw new Error("[ERROR] 숫자를 제대로 입력해주십시오.");
      }

      if (number < 1 || 45 < number) {
        throw new Error("[ERROR] 입력받은 숫자의 범위를 초과합니다.");
      }
    });

    const set = new Set(forValidateNum);
    if (set.size != 6) {
      throw new Error("[ERROR] 중복되지 않은 값만 입력해주세요.");
    }
  }

  inputBonusNum() {}

  play() {
    this.getUserInputNumber();
  }
}

module.exports = App;
