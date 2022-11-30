const MissionUtils = require('@woowacourse/mission-utils');
const { PRINT } = require('./constants');
const {
  checkIsNum,
  checkNumRange,
  checkDuplicatedBonusNum,
  checkRightAmountMoney,
} = require('./validate');

const InputView = {
  readInput(makeLotto) {
    MissionUtils.Console.readLine(
      PRINT.ENTER_PURCHASE_AMOUNT_INPUT,
      (money) => {
        this.validateMoney(money);
        makeLotto(money);
      }
    );
  },

  validateMoney(money) {
    checkIsNum(money);
    checkRightAmountMoney(money);
  },

  readLottoNums(getUserInput) {
    MissionUtils.Console.readLine(PRINT.ENTER_WINNING_NUMS, (inputNums) => {
      getUserInput(inputNums);
    });
  },

  readBonusNum(lottoNum, makeResult) {
    MissionUtils.Console.readLine(PRINT.ENTER_BONUS_NUM, (input) => {
      this.validateBonusNum(input, lottoNum);
      makeResult(input);
      MissionUtils.Console.close();
    });
  },

  validateBonusNum(input, lottoNum) {
    checkIsNum(input);
    checkNumRange(input);
    checkDuplicatedBonusNum(lottoNum, input);
  },
};

module.exports = InputView;
