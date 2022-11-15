const MissionUtils = require('@woowacourse/mission-utils');
const TypeConverter = require('../util/TypeConverter');
const Vaildator = require('../Vaildator');
const UI = require('./UI');

class InputUI extends UI {
  readLine(callback, message = '') {
    MissionUtils.Console.readLine(message, (answer) => {
      callback(answer);
    });
  }
}

module.exports = InputUI;
