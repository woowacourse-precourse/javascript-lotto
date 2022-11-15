const { LOTTERY_INFO } = require('../../constant/constant');
const { Random } = require('@woowacourse/mission-utils');
const createLotteryNumber = () => {
  return Random.pickUniqueNumbersInRange(
    LOTTERY_INFO.LOTTERY_MIN_NUMBER,
    LOTTERY_INFO.LOTTERY_MAX_NUMBER,
    LOTTERY_INFO.LOTTERY_LENGTH
  ).sort((a, b) => {
    return a - b;
  });
};
module.exports = {
  createLotteryNumber,
};
