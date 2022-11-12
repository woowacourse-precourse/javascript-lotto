const MissionUtils = require("@woowacourse/mission-utils");

class LottoModel {
  createLottos(amount) {
    const lottos = [];
    for (let i = 0; i < amount; i++) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(lotto);
    }
    return lottos;
  }
}

module.exports = LottoModel;
