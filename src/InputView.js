const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("./constant/constant");

const InputView = {
  getMoney(actWithMoney) {
    Console.readLine(INPUT_MESSAGE.money, actWithMoney);
  },

  getWinningNumber(actwithWinningNumber) {
    Console.readLine(INPUT_MESSAGE.winningNumber, actwithWinningNumber);
  },

  getBonusNumber(actWithBonusNumber) {
    Console.readLine(INPUT_MESSAGE.bonusNumber, actWithBonusNumber);
  },
};

module.exports = InputView;
