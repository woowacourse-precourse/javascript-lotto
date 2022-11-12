const { Console } = require("@woowacourse/mission-utils");
const question = require("./utils/const/question");

class Input extends Console {
  constructor() {
    super();
  }

  static getValueWithType(type, callback) {
    this.readLine(question[type], (string) => {
      const trimmedString = string.trim();
      callback(trimmedString);
    });
  }
}
module.exports = Input;
