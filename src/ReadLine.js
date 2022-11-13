const MissionUtils = require('@woowacourse/mission-utils');

class ReadLine {
  #console = MissionUtils.Console;

  #readLine = this.#console.readLine;

  static validate(message) {
    if (!message) {
      throw new Error('입력이 없으면 안됩니다.');
    }
  }
}

module.exports = ReadLine;
