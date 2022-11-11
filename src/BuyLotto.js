const MissionUtils = require('@woowacourse/mission-utils');
const { LOTTO, MESSAGE, ERROR } = require('./Constants');

class BuyLotto {
  lottoList = [];

  getPurchaseAmount() {
    MissionUtils.Console.readLine(MESSAGE.PURCHASE_AMOUNT, (amount) => {
      const AMOUNT = Number(amount);
      if (AMOUNT % LOTTO.PRICE === 0) {
        this.setLottoNumber(AMOUNT / LOTTO.PRICE);
      } else {
        throw new Error(ERROR.AMOUNT);
      }
    });
  }

  setLottoNumber(amount) {
    for (let i = 0; i < amount; i++) {
      const LOTTO_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO.NUMBER_START,
        LOTTO.NUMBER_END,
        LOTTO.NUMBER_SELECT
      );
      LOTTO_NUMBER.sort((x, y) => x - y);
      this.lottoList.push(LOTTO_NUMBER);
    }
    this.printUserLotto(this.lottoList);
  }

  printUserLotto(lottoLitst) {
    MissionUtils.Console.print(`${lottoLitst.length}개를 구매했습니다.`);
    for (let i = 0; i < lottoLitst.length; i++) {
      MissionUtils.Console.print(lottoLitst[i]);
    }
  }
}

module.exports = BuyLotto;
