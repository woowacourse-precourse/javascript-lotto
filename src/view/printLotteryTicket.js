const MissionUtils = require('@woowacourse/mission-utils');
const inputDataObject = require('../model/InputDataObject')

const printLotteryTicket = {
  printLotteryTicket() {
    MissionUtils.Console.print(`\n${inputDataObject.principal / 1000}개를 구매했습니다.`);
    inputDataObject.raffle.forEach(element => {
      MissionUtils.Console.print(element);
    });
    return null
  },
};

module.exports = printLotteryTicket;
