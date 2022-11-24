const console = require("./console");
const MissionUtils = require("@woowacourse/mission-utils");

class input extends console {
  readLine(callback, message = "") {
    MissionUtils.Console.readLine(message, (answer) => {
      callback(answer);
    });
  }
}

module.exports = input;
