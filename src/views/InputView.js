const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/lottoMessage');

const InputView = {
  readPurchaseMoney(handlePurchaseLotto) {
    Console.print(MESSAGE.PROCESS.inputMoney);
    Console.readLine('', handlePurchaseLotto);
  },

  readWinningDigit(handleWinningLotto) {
    Console.print(MESSAGE.PROCESS.inputWinningDigit);
    Console.readLine('', handleWinningLotto);
  },

  readBonusDigit(handleBonusDigit) {
    Console.print(`\n${MESSAGE.PROCESS.inputBonusDigit}`);
    Console.readLine('', handleBonusDigit);
  },
};

module.exports = InputView;
