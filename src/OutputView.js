const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');

const OutputView = {
  printNumberOfLotto (numberOfLotto) {
    Console.print(MESSAGE.GUIDE_NUMBER_OF_LOTTO(numberOfLotto));
  },

  printLotto (lotto) {
    Console.print(lotto)
  },

  printResult (winningMap, profit) {
    Console.print(MESSAGE.WINNING_STATS(
      winningMap, 
      profit
    ));
  }
  
};


module.exports = OutputView;