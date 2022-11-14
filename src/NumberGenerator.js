const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./Message.js");

class NumberGenerator {
  #userLottoNumber;

  constructor(count) {
    this.count = count;
    this.issueUserNumber();
  }

  issueUserNumber() {
    MissionUtils.Console.print(`${this.count}${Message.INFORMATION.lottoCount}`);
    const lottoArray = [];
    while (lottoArray.length < this.count) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoArray.push(lotto);
      MissionUtils.Console.print(`[${lotto.join(", ")}]`);
    }

    this.#userLottoNumber = lottoArray;
  }

  getUserNumber() {
    return this.#userLottoNumber;
  }
}

module.exports = NumberGenerator;
