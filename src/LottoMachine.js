const MissionUtils = require("@woowacourse/mission-utils");

class LottoMachine {
    static createLotto() {
        const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        lottoNumbers.sort(function (a, b) {
            if (a > b) return 1;
            if (a === b) return 0;
            if (a < b) return -1;
        });
        return lottoNumbers;
    }
}

module.exports = LottoMachine;