const MissionUtils = require("@woowacourse/mission-utils");

class LottoGenerator {
  makeLottoNumber() {
    const LOTTONUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return LOTTONUMBER.sort((x, y) => x - y);
  }

  checkUserMoney() {
    //문자열 상수화 필요
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userInput) => {
      const TOTAL_LOTTO_GAMES = parseInt(userInput / 1000);
      MissionUtils.Console.print(`${TOTAL_LOTTO_GAMES}개를 구매했습니다.`);
      for (let gameCount = 0; gameCount < TOTAL_LOTTO_GAMES; gameCount++) {
        MissionUtils.Console.print(this.makeLottoNumber());
      }
    });
  }
}

const LOTTOGENERATOR = new LottoGenerator();
module.exports = LOTTOGENERATOR;
