const MissionUtils = require('@woowacourse/mission-utils');
const { checkIsNum, checkRightAmountMoney } = requrie('./util');

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

  readLottoNums() {
    MissionUtils.Console.readLine(PRINT.ENTER_WINNING_NUMS, (numbers) => {
      this.lotto = new Lotto(numbers.split(','));
      this.readBonusNum();
    });
  },

  readBonusNum() {
    MissionUtils.Console.readLine(PRINT.ENTER_BONUS_NUM, (input) => {
      this.validateBonusNum(input);
      this.bonusNum = input;
      const result = new Result(
        this.randomNumUnits,
        this.lotto.getNumbers(),
        this.bonusNum
      );
      result.getResult();
      MissionUtils.Console.close();
    });
  },
};

module.exports = InputView;
