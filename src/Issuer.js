const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const PRICE = 1000;
const LOTTO_MIN_NUMBER = 1;
const LOTTO_MAX_NUMBER = 45;
const NUMBER_OF_LOTTO_NUMBERS = 6;

class Issuer {
  issue(money) {
    let lottos = [];
    const NUMBER_OF_LOTTOS = money / PRICE;

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

    return lottos;
  }
}

module.exports = Issuer;
