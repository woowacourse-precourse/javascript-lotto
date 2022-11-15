const MissionUtils = require('@woowacourse/mission-utils');
const inputDataObject = require('../model/InputDataObject')
const checkError = require('../controller/CheckError')

const inputMoneyOfLotto = {
  inputMoney(message) {
    this.message = message;
    MissionUtils.Console.readLine(message, inputValue => {
      if (checkError(inputValue)) {
        inputObject.principal = inputValue; 
      }
      return inputDataObject.principal
    });
  },
};

module.exports = inputMoneyOfLotto;
