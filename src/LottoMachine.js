const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const { SYS_MESSAGE, RANGE } = require("./Constant");

class LottoMachine {
  #lottoArr = [];
  #lottoCnt;

  constructor() {}

  makeLotto(lottoCnt) {
    this.#lottoCnt = lottoCnt;
    for (let i = 0; i < lottoCnt; i++) {
      const lotto = new Lotto(this.makeRandomArr());
      this.#lottoArr.push(lotto.numbers);
    }
    return this.#lottoArr;
  }

  makeRandomArr() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      RANGE.MIN,
      RANGE.MAX,
      RANGE.PICK_COUNT
    );
  }

  sortLottoNum(randomNumArr) {
    return randomNumArr.sort((a, b) => a - b);
  }

  printLotto() {
    MissionUtils.Console.print(
      this.#lottoCnt + SYS_MESSAGE.OUTPUT_LOTTO_COUNT_MESSAGE
    );
    for (let i = 0; i < this.#lottoArr.length; i++) {
      MissionUtils.Console.print(this.sortLottoNum(this.#lottoArr[i]));
    }
  }
}

module.exports = LottoMachine;
