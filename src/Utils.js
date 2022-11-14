const MissionUtils = require('@woowacourse/mission-utils');
const setting = require('./LottoGame');

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
        return MissionUtils.Random.pickUniqueNumbersInRange(1, setting.gameSetting.maxNumber, setting.gameSetting.length).sort();
    }
}

module.exports = new Utils();