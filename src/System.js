const MissionUtils = require("@woowacourse/mission-utils");

const SYSTEM = Object.freeze({
    print(message) {
        MissionUtils.Console.print(message);
    },
    exit() {
        MissionUtils.Console.close();
    }
})
module.exports = { SYSTEM };