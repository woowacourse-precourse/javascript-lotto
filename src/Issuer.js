const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Lotto = require("./Lotto");

const PRICE = 1000;
const LOTTO_MIN_NUMBER = 1;
const LOTTO_MAX_NUMBER = 45;
const NUMBER_OF_LOTTO_NUMBERS = 6;

class Issuer {
  issue(money) {
    let lottos = [];
    const NUMBER_OF_LOTTOS = money / PRICE;

    this.validate(money);

    for (let count = 0; count < NUMBER_OF_LOTTOS; count++) {
      let LOTTO_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_MIN_NUMBER,
        LOTTO_MAX_NUMBER,
        NUMBER_OF_LOTTO_NUMBERS
      );
      lottos.push(
        new Lotto(
          LOTTO_NUMBERS.sort(function (a, b) {
            return a - b;
          })
        )
      );
    }
    this.displayResultOfBuy(lottos);

    return lottos;
  }

  displayResultOfBuy(lottos) {
    const numbersOfLottos = lottos.length;

    Console.print(`\n${numbersOfLottos}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      Console.print(
        "[" +
          lotto.numbers[0] +
          ", " +
          lotto.numbers[1] +
          ", " +
          lotto.numbers[2] +
          ", " +
          lotto.numbers[3] +
          ", " +
          lotto.numbers[4] +
          ", " +
          lotto.numbers[5] +
          "]"
      );
    });
  }

  validate(money) {
    if (money % 1000 !== 0 || money <= 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해야 합니다.");
    }
  }
}

module.exports = Issuer;
