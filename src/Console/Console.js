const MissionUtils = require('@woowacourse/mission-utils');

class Console {
  #MissionUtils = MissionUtils;

  static Input(message) {
    let returnValue = '';
    this.#MissionUtils.Console.readLine('message', (output) => {
      returnValue = output;
    });

    return returnValue;
  }

  static Output(message) {
    this.#MissionUtils.Console.print(message);
  }
}

export default Console;