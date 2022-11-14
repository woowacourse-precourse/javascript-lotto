const MissionUtils = require('@woowacourse/mission-utils');
const UI = require('./UI');

class OutputUI extends UI {
  print(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = OutputUI;
