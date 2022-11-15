const MissionUtils = require('@woowacourse/mission-utils');
const inputDataObject = require('../model/InputDataObject')
const checkError = require('../controller/CheckError')
const lotteryTicket = require('../controller/LotteryTicket')

const buyLotto = {
  inputMoney(message) {
    this.message = message;
    MissionUtils.Console.readLine(message, inputValue => {
      if (checkError.isDivideZero(inputValue)) {
        inputDataObject.principal = inputValue;
      }
      return lotteryTicket.countOfLottery(inputDataObject.principal / 1000)
    });
  },
};

module.exports = buyLotto;
