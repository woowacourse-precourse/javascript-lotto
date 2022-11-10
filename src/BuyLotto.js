const MissionUtils = require('@woowacourse/mission-utils');
const { LOTTO, MESSAGE, ERROR } = require('./Constants');

class BuyLotto {
  getPurchaseAmount() {
    MissionUtils.Console.readLine(MESSAGE.PURCHASE_AMOUNT, (amount) => {
      const AMOUNT = Number(amount);
      if (AMOUNT % LOTTO.PRICE === 0) {
        this.printUserLotto(AMOUNT / LOTTO.PRICE);
      } else {
        throw new Error(ERROR.AMOUNT);
      }
    });
  }

  setLottoNumber() {
    const LOTTO_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.NUMBER_START,
      LOTTO.NUMBER_END,
      LOTTO.NUMBER_SELECT
    );
    LOTTO_NUMBER.sort((x, y) => x - y);
    return LOTTO_NUMBER;
  }

  printUserLotto(amount) {
    MissionUtils.Console.print(`${amount}개를 구매했습니다.`);
    for (let print = 0; print < amount; print++) {
      MissionUtils.Console.print(this.setLottoNumber());
    }
  }
}

module.exports = BuyLotto;
