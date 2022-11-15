const MissionUtils = require('@woowacourse/mission-utils');
const inputDataObject = require('../model/InputDataObject')
const inputLotteryNumber = require('../controller/InputLotteryNumber')
const inputMessage = require('../model/InputMessage')

const printLotteryTicket = {
  printLotteryTicket() {
    MissionUtils.Console.print(`\n${inputDataObject.principal / 1000}개를 구매했습니다.`);
    inputDataObject.raffle.forEach(element => {
      MissionUtils.Console.print(element);
    });
    return inputLotteryNumber.inputLotteryNumber(inputMessage.RAFFLE_NUMBERS)
  },
};

module.exports = printLotteryTicket;
