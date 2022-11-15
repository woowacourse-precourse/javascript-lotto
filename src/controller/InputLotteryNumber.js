const MissionUtils = require('@woowacourse/mission-utils');
const inputDataObject = require('../model/InputDataObject')

const lotteryNumbers = {
  inputLotteryNumber(message) {
    MissionUtils.Console.readLine(message, inputValue => {
      inputDataObject.raffleNumbers = inputValue.split(',').map(Number);
      return null
    });
  },
};

module.exports = lotteryNumbers;
