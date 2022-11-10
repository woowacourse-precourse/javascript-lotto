const MissionUtils = require("@woowacourse/mission-utils");

class LottoGenerator {
  makeLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  checkUserMoney() {
    //문자열 상수화 필요
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userInput) => {
      this.countTimesOfLotto(userInput);
    });
  }
  countTimesOfLotto(money) {
    //상수화 필요
    return parseInt(money / 1000);
  }
}

const LOTTOGENERATOR = new LottoGenerator();
module.exports = LOTTOGENERATOR;
