const MissionUtils = require('@woowacourse/mission-utils');

class UI {
  print(message) {
    MissionUtils.Console.print(message);
  }

  input(query, callback) {
    MissionUtils.Console.readLine(query, callback);
  }

  printError(message) {
    throw Error(`[ERROR] ${message}`);
  }

  end() {
    MissionUtils.Console.close();
  }
}

module.exports = UI;
