const { LOTTO_INFO } = require("./Constants");
const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottosMaker {
  static makeLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_INFO.min,
      LOTTO_INFO.max,
      LOTTO_INFO.number_of_numbers
    );
  }

  static makeLottos(count) {
    const lottos = [];

    for (let i = 0; i < count; i++) {
      let issue = new Lotto(this.makeLottoNumbers());
      lottos.push(issue);
    }

    return lottos;
  }
}

module.exports = LottosMaker;
