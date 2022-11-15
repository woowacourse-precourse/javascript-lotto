const MissionUtils = require("@woowacourse/mission-utils");

const Io = class {
  static readline(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
  }

  static print(message) {
    return MissionUtils.Console.print(message);
  }

  static close() {
    return MissionUtils.Console.close();
  }
};

module.exports = Io;
