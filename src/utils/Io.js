const MissionUtils = require("@woowacourse/mission-utils");

const Io = class {
  static readline = (message, callback) =>
    MissionUtils.Console.readLine(message, callback);

  static print = (message) => MissionUtils.Console.print(message);

  static close = () => MissionUtils.Console.close();
};

module.exports = Io;
