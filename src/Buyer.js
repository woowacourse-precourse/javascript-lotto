const MissionUtils = require("@woowacourse/mission-utils");

class Buyer {
  constructor() {}
  getInput(message) {
    let returnMessage = "";
    MissionUtils.Console.readLine(message, (returnValue) => {
      returnMessage = returnValue;
    });
    return returnMessage;
  }
}

module.exports = Buyer;
