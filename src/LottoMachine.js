const MissionUtils = require("@woowacourse/mission-utils");

class LottoMachine {
    static createLotto() {
        const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        return lottoNumbers;
    }
}

module.exports = LottoMachine;