const { Console, Random } = require('@woowacourse/mission-utils');
const { LOTTO, MESSAGE, ERROR } = require('./Constants');
const WinningNumbers = require('./WinningNumbers');

class BuyLottoTwo {
  amount;
  lottoList = [];
  winning;
  bonus;

  constructor() {
    this.getAmount();
  }

  getAmount() {
    Console.readLine(MESSAGE.PURCHASE_AMOUNT, (amount) => {
      const AMOUNT = Number(amount);
      if (AMOUNT % LOTTO.PRICE === 0) {
        this.amount = AMOUNT / LOTTO.PRICE;
        this.setLottoList(this.amount);
      } else {
        throw new Error(ERROR.AMOUNT);
      }
    });
  }

  setLottoList(amount) {
    for (let i = 0; i < amount; i++) {
      const LOTTO_NUMBER = Random.pickUniqueNumbersInRange(
        LOTTO.NUMBER_START,
        LOTTO.NUMBER_END,
        LOTTO.NUMBER_SELECT
      );
      LOTTO_NUMBER.sort((x, y) => x - y);
      this.lottoList.push(LOTTO_NUMBER);
    }
    this.printLottoList(this.lottoList);
  }

  printLottoList(lottoList) {
    Console.print(`${lottoList.length}개를 구매했습니다.`);
    for (let i = 0; i < lottoList.length; i++) {
      Console.print(lottoList[i]);
    }
    this.getWinningNumbers();
  }

  getWinningNumbers() {
    const winningNumbers = new WinningNumbers();
    this.winning = winningNumbers.winning;
    this.bonus = winningNumbers.bonus;
  }
}

module.exports = BuyLottoTwo;
