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

    exit() {
        MissionUtils.Console.close();
    }
})
module.exports = { MissionUtils, SYSTEM };