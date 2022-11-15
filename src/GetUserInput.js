const MissionUtils = require('@woowacourse/mission-utils');

class GetUserInput {
  constructor(text) {
    this.text = text;
  }

  async userInput() {
    return await new Promise((resolove) => {
      MissionUtils.Console.readLine(this.text, (number) => {
        resolove(number);
      });
    });
  }
}

module.exports = GetUserInput;
