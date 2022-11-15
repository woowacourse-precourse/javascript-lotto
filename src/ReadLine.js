const MissionUtils = require('@woowacourse/mission-utils');

const Function = require('./Function');

class ReadLine {
  console = MissionUtils.Console;
  readLine = this.console.readLine;

  static verify(message) {
    if (!message) {
      throw new Error('올바르게 입력하세요.');
    }
  }

  inputNumber(message, callback) {
    this.readLine(message, (userInput) => {
      ReadLine.verify(userInput);
      const inputMoney = Function.convertNumber(userInput);
      callback(inputMoney);
    });
  }

  inputOriginal(message, callback) {
    this.readLine(message, (userInput) => {
      ReadLine.verify(userInput);
      callback(userInput);
    });
  }

  close() {
    this.console.close();
  }
}

module.exports = ReadLine;