const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR, MESSAGE } = require('./Constants')
const SYSTEM = Object.freeze({
    print(message) {
        MissionUtils.Console.print(message);
    },

    isCorrectCache(cache) {
        if (isNaN(cache)) {
            throw new Error(ERROR.CACHE_IS_NOT_NUMBER);
        }
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

        this.printLottos(lottos, maxCount);
        return lottos;
    },

    printLottos(lottos, maxCount) {
        this.print(`\n${maxCount}${MESSAGE.BUY_LOTTOS_COUNT}`);
        lottos.forEach(lotto => { SYSTEM.print(lotto); });
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