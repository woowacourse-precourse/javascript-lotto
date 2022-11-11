const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR } = require('./Constants')
const SYSTEM = Object.freeze({
    print(message) {
        MissionUtils.Console.print(message);
    },

    isCorrectCache(cache) {
        if (cache % 1000) {
            throw new Error(ERROR.INVAID_CACHE);
        }
    },

    makeLotto() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    },

    sortLotto(lotto) {
        return lotto.sort((a, b) => a - b);
    },

    autoWrite(maxCount) {
        let lottos = [];
        for (let count = 0; count < maxCount; count++) {
            let lotto = this.sortLotto(this.makeLotto());
            lottos.push(lotto);
        }
        return lottos;
    },

    publishLotto(cache) {
        let maxCount = cache / 1000;
        return this.autoWrite(maxCount);
    },

    exit() {
        MissionUtils.Console.close();
    }
})
module.exports = { MissionUtils, SYSTEM };