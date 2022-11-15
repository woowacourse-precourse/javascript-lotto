const MissionUtils = require("@woowacourse/mission-utils");
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

  userPaid() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userInput) => {
      if (userInput % 1000) {
        throw new Error();
      }
      MissionUtils.Console.print(`${userInput / 1000}개를 구매했습니다.`);
      const lottoNum = userInput / 1000;
      this.userLottoNum();
    });
    return lottoNum;
  }

  userLottoNum() {
    const userLottoNum = new Array(lottoNum);
    while (userLottoNum.length < 6) {
      const lottoNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      if (!userLottoNum.includes(lottoNum)) {
        userLottoNum.push(lottoNum);
      }
    }
    MissionUtils.Console.print(userLottoNum);
    this.winLottoNum();
    return userLottoNum;
  }
  play() {}
}

module.exports = App;
