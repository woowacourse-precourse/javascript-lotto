const MissionUtils = require('@woowacourse/mission-utils');
const inputDataObject = require('../model/InputDataObject');
const printLotteryTicket = require('../view/printLotteryTicket')

const lotteryTicket = {
  countOfLottery(numberOfTicket) {
    inputDataObject.raffle = [...Array(numberOfTicket).keys()].map(() =>
      this.lottoNumber(),
    );
    return [inputDataObject.raffle.length, printLotteryTicket.printLotteryTicket()]
  },

  lottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  },
};

module.exports = lotteryTicket;
