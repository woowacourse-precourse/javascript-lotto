const MissionUtils = require('@woowacourse/mission-utils');

class Console {
  static INPUT = {
    PURCHASE: '구입금액을 입력해 주세요.',
  };

  static readLine(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
  }

  static close() {
    return MissionUtils.Console.close();
  }
}

module.exports = Console;
