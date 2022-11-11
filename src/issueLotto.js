const MissionUtils = require("@woowacourse/mission-utils");
const LottoResultCheck = require("./resultCheck");
const { GET_INPUT, VALUE_NUMBER } = require("./constants");

class LottoGenerator {
  makeLottoNumber() {
    const LOTTONUMBER = MissionUtils.Random.pickUniqueNumbersInRange(
      VALUE_NUMBER.SMALLEST_LOTTO_NUMBER,
      VALUE_NUMBER.BIGGEST_LOTTO_NUMBER,
      VALUE_NUMBER.TOTAL_LOTTO_NUMBERS
    );
    return LOTTONUMBER.sort((x, y) => x - y);
  }

  generateLotto() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(GET_INPUT.MONEY, (userInput) => {
        resolve(userInput);
        LottoResultCheck.userMoney = userInput;
        const TOTAL_LOTTO_GAMES = parseInt(userInput / VALUE_NUMBER.MONEY_FOR_ONE_GAME);
        //이 부분도 상수화 해야하나?
        MissionUtils.Console.print(`${TOTAL_LOTTO_GAMES}개를 구매했습니다.`);
        for (let gameCount = 0; gameCount < TOTAL_LOTTO_GAMES; gameCount++) {
          const LOTTO_NUMBER = this.makeLottoNumber();
          MissionUtils.Console.print(LOTTO_NUMBER);
          LottoResultCheck.lottoNumbersArray.push(LOTTO_NUMBER);
        }
      });
    });
  }
}

module.exports = LottoGenerator;
