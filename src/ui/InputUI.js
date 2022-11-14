const MissionUtils = require('@woowacourse/mission-utils');
const TypeConverter = require('../util/TypeConverter');
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

  hitNumber(message = '') {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(message, (answer) => {
        answer = TypeConverter.stringToArray(answer, ',');
        if (Vaildator.isRightLottoNumbers(answer)) {
          resolve(answer);
        }
        reject('error');
      });
    });
  }

  bonus(hitNumbers, message = '') {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(message, (answer) => {
        answer = TypeConverter.stringToNumber(answer);
        if (
          Vaildator.isRightLottoNumber(answer) &&
          Vaildator.isDuplicateNumberInArray(hitNumbers, answer)
        ) {
          resolve(answer);
        }
        reject('error');
      });
    });
  }
}

module.exports = InputUI;
