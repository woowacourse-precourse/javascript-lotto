const MissionUtils = require('@woowacourse/mission-utils');

const Application = require('./Application');

class ReadLine {
  #console = MissionUtils.Console;

  #readLine = this.#console.readLine;

  static validate(message) {
    if (!message) {
      throw new Error('입력이 없으면 안됩니다.');
    }
  }

  inputNumber(message, callbackFunc) {
    this.#readLine(message, (userInput) => {
      ReadLine.validate(userInput);

      const userInputNumber = Application.convertNumber(userInput);

      callbackFunc(userInputNumber);
    });
  }

  inputOriginal(message, callbackFunc) {
    this.#readLine(message, (draft) => {
      ReadLine.validate(draft);
      callbackFunc(draft);
    });
  }

  close() {
    this.#console.close();
  }
}

module.exports = ReadLine;
