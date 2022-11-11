const MissionUtils = require("@woowacourse/mission-utils");

class Utils {

    print(msg) {
        return MissionUtils.Console.print(msg);
    }

    readLine(query, callback) {
        MissionUtils.Console.readLine(query, callback);
    }

    close() {
        MissionUtils.Console.close();
    }

    getLottoNumbers() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort();
    }
}

module.exports = new Utils();