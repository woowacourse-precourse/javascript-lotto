const MissionUtils = require("@woowacourse/mission-utils");
const console = require("./console");

class print extends console {
  print(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = print;
