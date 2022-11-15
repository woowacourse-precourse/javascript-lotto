const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class App {
  // 유저가 낸 금액
  userPaid() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userInput) => {
      if (this.userPaidValid(userInput)) {
        this.userPrice = userInput;
        MissionUtils.Console.print(
          `${Number(userPrice) / 1000}개를 구매했습니다.`
        );
        this.userLottoNum(userPrice);
      }
    });
  }

  //당첨 로또 번호
  inputLottoNum() {
    const inputLotto = "";
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.",
      (inputLottoNum) => {
        inputLotto += inputLottoNum;
        const inputLottoResult = Lotto.validate(inputLotto);
        this.inputBonusLottoNum();
        MissionUtils.Console.close();
      }
    );
  }

  //당첨 보너스 로또 번호
  inputBonusLottoNum() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (bonus) => {
      if (bunusValid(Number(bonus))) {
        this.bonus = Number(bonus);
        MissionUtils.Console.print(bonus);
      }
    });
  }

  bunusValid(bonus) {
    if (isNaN(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    if (bonus < 0 || bonus > 46) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자입니다.");
    }
    if (inputLottoResult.inclue(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복되서는 안됩니다.");
    }
    return true;
  }

  //당첨 통계
  LottoResult() {
    MissionUtils.Console.print("당첨 통계");
  }

  // 유저가 낸 금액 확인하는 메서드
  userPaidValid(userInput) {
    if (userInput % 1000 || userInput < 1) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
    }
  }

  userLottoNum(userPrice) {
    const userLottoNum = new Array();
    const gameTime = Number(userPrice) / 1000;
    for (let i = 0; i < gameTime; i++) {
      userLottoNum.push(this.lottoAuto());
      MissionUtils.Console.print(userLottoNum);
    }
    this.userLottoNum = userLottoNum;
  }

  // 로또 번호 자동 생성
  lottoAuto() {
    const autoLottoNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    autoLottoNum.sort((a, b) => a - b);
    return autoLottoNum;
  }

  play() {
    this.userPaid();
  }
}

module.exports = App;
