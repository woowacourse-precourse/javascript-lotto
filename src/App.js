const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class App {
  //당첨 로또 번호
  winLottoNum() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (userInput) => {
      validate(userInput);
    });
    MissionUtils.Console.print(userInput);
    return userInput;
    this.winBonusLottoNum();
  }

  //당첨 보너스 로또 번호
  winBonusLottoNum() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.",
      (userInput) => {
        MissionUtils.Console.print(userInput);
      }
    );
  }

  //당첨 통계
  LottoResult() {
    MissionUtils.Console.print("당첨 통계");
  }

  // 유저가 낸 금액
  userPaid() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userInput) => {
      if (userPaidValid(userInput)) {
        this.userPrice = userInput;
        MissionUtils.Console.print(
          `${Number(userPrice) / 1000}개를 구매했습니다.`
        );
        this.userLottoNum(userPrice);
      }
    });
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
