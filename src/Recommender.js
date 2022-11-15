const MissionUtils = require("@woowacourse/mission-utils");

class Recommender {
  getInput(message) {
    let returnMessage = "";
    MissionUtils.Console.readLine(message, (returnValue) => {
      returnMessage = returnValue;
    });
    return returnMessage;
  }
}

module.exports = Recommender;
