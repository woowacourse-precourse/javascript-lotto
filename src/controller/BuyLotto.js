const MissionUtils = require('@woowacourse/mission-utils');
const inputDataObject = require('../model/InputDataObject')

const inputMoneyOfLotto = {
  inputMoney(message) {
    this.message = message;
    MissionUtils.Console.readLine(message, inputValue => {
      inputObject.principal = inputValue;
      return inputDataObject.principal
    });
  },
};

module.exports = inputMoneyOfLotto;
