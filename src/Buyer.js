const MissionUtils = require("@woowacourse/mission-utils");

class Buyer {
  constructor() {}
  async getInput(message) {
    const input = await new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(message, resolve);
    });
    return input;
  }
}

module.exports = Buyer;
