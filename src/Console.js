const MissionUtils = require("@woowacourse/mission-utils");

const Console = class {
  static readline = (message, callback) =>
    MissionUtils.Console.readline(message, callback);

  static print = (message) => MissionUtils.Console.print(message);

  static close = () => MissionUtils.Console.close();
};

module.exports = Console;
