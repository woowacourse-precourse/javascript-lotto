const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  //당첨 로또 번호
  winLottoNum() {
    const winLottoNum = [];
    while (winLottoNum.length < 6) {
      const lottoNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      if (!winLottoNum.includes(lottoNum)) {
        winLottoNum.push(lottoNum);
      }
    }
    return winLottoNum;
  }

  userPaid() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userInput) => {
      if (userInput % 1000) {
        throw new Error();
      }
      MissionUtils.Console.print(`${userInput / 1000}개를 구매했습니다.`);
      this.userLottoNum();
    });
  }
}

module.exports = Lotto;
