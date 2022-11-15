const MissionUtils = require("@woowacourse/mission-utils");

class UserLotto {
  #userLottoes;

  constructor(totalLotto) {
    this.userLottoes = [];
    this.createUserLotto(totalLotto);
    this.setUserLotto(this.userLottoes);
    this.printUserLotto(totalLotto);
  }

  createUserLotto(totalLotto) {
    for (let number = 0; number < totalLotto; number++) {
      const RANDOM = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      if (RANDOM) {
        this.saveSortedLotto(RANDOM);
      }
    }
  }

  saveSortedLotto(randomLotto) {
    console.log(randomLotto);
    const SORTED_LOTTO = randomLotto.sort((first, second) => {
      first - second;
    });
    this.userLottoes.push(SORTED_LOTTO);
  }

  printUserLotto(totalLotto) {
    MissionUtils.Console.print(`${totalLotto}개를 구매했습니다.`);
    for (let index = 0; index < totalLotto; index++) {
      const FORMATTED_LOTTO = this.printFormatter(this.userLottoes[index]);
      MissionUtils.Console.print("[" + FORMATTED_LOTTO + "]");
    }
  }

  printFormatter(lotto) {
    const STR_LOTTO = lotto.map((number) => {
      return String(number);
    });
    const FORMATTED_LOTTO = STR_LOTTO.join(", ");
    return FORMATTED_LOTTO;
  }

  setUserLotto(userLottoes) {
    this.#userLottoes = userLottoes;
  }

  getUserLotto() {
    return this.#userLottoes;
  }
}

module.exports = UserLotto;
