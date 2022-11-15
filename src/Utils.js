const { Random } = require('@woowacourse/mission-utils');
const { REWARD } = require('./Constant');

const LOTTO_LENGTH = 6;
const START_NUMBER = 1;
const END_NUMBER = 45;

class Utils {
  static setRandomNumbers() {
    return this.sortNumbers(
      Random.pickUniqueNumbersInRange(START_NUMBER, END_NUMBER, LOTTO_LENGTH),
    );
  }

  static sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  static splitNumbers(inputNumbers) {
    return inputNumbers.split(',').map(number => +number);
  }

  static getRateOfReturn(result, lottoCount) {
    let reward = 0;

    const resultArray = Object.entries(result);

    for (let i = 0; i < resultArray.length; i += 1) {
      reward += REWARD[resultArray[i][0]] * resultArray[i][1];
    }

    return Math.round((reward / (lottoCount * 1000)) * 10000) / 100;
  }

  static getRewardKey() {
    return Object.keys(REWARD).sort((a, b) => {
      return Number(a[0]) - Number(b[0]);
    });
  }
}

module.exports = Utils;
