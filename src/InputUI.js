const { MissionUtils } = require('@woowacourse/mission-utils');
const UI = require('./UI');

class InputUI extends UI {
  inputLine(message = '') {
    return new Promise((resolve, rejected) => {
      MissionUtils.Console.readLine(message, (answer) => {
        resolve(answer);
      });
    });
  }
}

module.exports = InputUI;
