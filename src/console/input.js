const { MissionUtils } = require("@woowacourse/mission-utils");
const console = require("./console");

class input extends console {
  inputLine(message = "") {
    return new Promise((resolve, rejected) => {
      MissionUtils.Console.readLine(message, (answer) => {
        resolve(answer);
      });
    });
  }
}

module.exports = input;
