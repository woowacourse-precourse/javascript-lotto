const MissionUtils = require('@woowacourse/mission-utils');
const { PARAMETERS } = require('../utils/constants');

function generateRandomSixDigits() {
  const [START, END] = PARAMETERS.lottoNumberRange;
  const RANDOM_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(
    START,
    END,
    PARAMETERS.lottoNumberCount
  );

  return RANDOM_NUMBERS.sort((a, b) => a - b);
}

module.exports = generateRandomSixDigits;
