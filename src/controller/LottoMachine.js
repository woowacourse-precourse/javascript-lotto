const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../Lotto");
const LottoMachineValidator = require("../validator/LottoMachineValidator");

class LottoMachine {
  makeLotto() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  purchaseLotto(purchaseMoney) {
    const purchasedLottoNumber = parseInt(purchaseMoney / 1000);
    return Array.from(Array(purchasedLottoNumber),() => new Lotto(this.makeLotto()));
  }
}

module.exports = LottoMachine;
