const MissionUtils = require('@woowacourse/mission-utils');
const UI = require('./UI');

class InputUI extends UI {
  inputLine(callback, message = '') {
    MissionUtils.Console.readLine(message, callback);
  }
}

module.exports = InputUI;
