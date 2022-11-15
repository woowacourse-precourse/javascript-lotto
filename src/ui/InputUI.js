const MissionUtils = require('@woowacourse/mission-utils');
const UI = require('./UI');

class InputUI extends UI {
  readLine(callback, message = '') {
    MissionUtils.Console.readLine(message, (answer) => {
      callback(answer);
    });
  }
}

module.exports = InputUI;
