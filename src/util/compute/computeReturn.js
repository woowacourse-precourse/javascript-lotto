const { LOTTO_AWARD } = require('../../constant/constant');

const computeReturn = (uresult) => {
  let achievedLottoPrize = 0; //획득 상금

  for (let rank = 1; rank <= 5; rank += 1) {
    const rankCount = uresult[rank];
    achievedLottoPrize += LOTTO_AWARD[rank] * rankCount;
  }
  return achievedLottoPrize;
};

module.exports = computeReturn;
