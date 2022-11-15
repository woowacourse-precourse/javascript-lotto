const MissionUtils = require("@woowacourse/mission-utils");
const console = require("./console");

class input extends console {
  inputLine(callback, message = "") {
    MissionUtils.Console.readLine(message, callback)
  }
}

module.exports = input;
