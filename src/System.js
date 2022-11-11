const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR, MESSAGE } = require('./Constants')
const Lotto = require('./Lotto');
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
        return new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    },

    autoWrite(maxCount) {
        let lottos = [];
        for (let count = 0; count < maxCount; count++) {
            let lotto = this.makeLotto();
            lottos.push(lotto);
        }

        this.printLottos(lottos, maxCount);
        return lottos;
    },

    printLottos(lottos, maxCount) {
        this.print(`\n${maxCount}${MESSAGE.BUY_LOTTOS_COUNT}`);
        lottos.forEach(lotto => { SYSTEM.print(lotto.getNumber()); });
    },

    publishLotto(cache) {
        let maxCount = cache / 1000;
        return this.autoWrite(maxCount);
    },

    compareLotto() {
        MissionUtils.Console.readLine(MESSAGE.ENTER_WINNING_LOTTO, (winningLotto) => {
            winningLotto = new Lotto(winningLotto.split(",").map(Number));
        });
    },

    exit() {
        MissionUtils.Console.close();
    }
})
module.exports = { MissionUtils, SYSTEM };