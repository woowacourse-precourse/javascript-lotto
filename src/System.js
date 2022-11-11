const MissionUtils = require("@woowacourse/mission-utils");

const SYSTEM = Object.freeze({
    print(message) {
        MissionUtils.Console.print(message);
    }
})
module.exports = { SYSTEM };