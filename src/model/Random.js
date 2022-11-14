const MissionUtils = require('@woowacourse/mission-utils');
const {DEFAULTS} = require('../utils/Constants');

function randomNum(){
  const numbers = MissionUtils.Random.pickUniqueNumbersInRange(DEFAULTS.START_RANGE_NUM, DEFAULTS.END_RANGE_NUM, DEFAULTS.CAN_CNT_RANGE);
  return numbers.sort((a,b) => a - b);
}

module.exports = randomNum;