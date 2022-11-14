const MissionUtils = require('@woowacourse/mission-utils');
const Vaildator = require('../Vaildator');
const UI = require('./UI');

class InputUI extends UI {
  amount(message = '') {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(message, (amount) => {
        if (!Vaildator.isRightAmount(+amount)) {
          reject(new Error('[ERROR] 올바른 금액입력이 아닙니다.'));
        }
        resolve(+amount);
      });
    });
  }

  handleInput(predicate, errorMessage, message = '') {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(message, (answer) => {
        if (predicate(answer)) {
          resolve(answer);
        }
        reject(errorMessage);
      });
    });
  }
}

module.exports = InputUI;
