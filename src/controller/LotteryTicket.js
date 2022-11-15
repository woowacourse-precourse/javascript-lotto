const MissionUtils = require('@woowacourse/mission-utils');
const inputDataObject = require('../model/InputDataObject');

const lotteryTicket = {
  countOfLottery(numberOfTicket) {
    inputDataObject.raffle = [...Array(numberOfTicket).keys()].map(() =>
      this.lottoNumber(),
    );
    return null;
  },

  lottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  },
};

module.exports = lotteryTicket;
