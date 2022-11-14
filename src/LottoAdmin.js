const { Random } = require("@woowacourse/mission-utils");

class LottoAdmin {
  static generateLottoAnswer(lottoNum) {
    return Array.from({ length: lottoNum }, () =>
      Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => (a > b ? 1 : -1))
    );
  }
}

module.exports = LottoAdmin;
