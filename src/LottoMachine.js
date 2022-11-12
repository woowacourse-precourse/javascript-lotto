const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoMachine {
  #validateType(money) {
    if (!Number(money)) {
      throw new Error("[ERROR] 금액은 숫자만 입력해야 합니다.");
    }
  }

  #validateDivideThousand(money) {
    if (Number(money) % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1,000원 단위만 입력 가능합니다.");
    }
  }

  #validate(money) {
    this.#validateType(money);
    this.#validateDivideThousand(money);
  }

  #generateSixNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  #generateLotto() {
    return new Lotto(this.#generateSixNumber());
  }

  generateLottos(money) {
    this.#validate(money);
    const lottosCount = money / 1000;

    return Array.from({ length: lottosCount }, () => this.#generateLotto());
  }

  print(lottos) {
    MissionUtils.Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => lotto.print());
  }
}

module.exports = LottoMachine;
