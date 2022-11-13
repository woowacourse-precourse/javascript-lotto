const { Console, Random } = require('@woowacourse/mission-utils');
const { LOTTO, MESSAGE } = require('./Constants');
const Validate = require('./Validate');
const Statistics = require('./Statistics');

class App {
  amount;
  lottoList = [];
  winning;
  bonus;

  constructor() {
    this.validate = new Validate();
    this.statistics = new Statistics();
  }

  getAmount() {
    Console.readLine(MESSAGE.PURCHASE_AMOUNT, (amount) => {
      this.amount = this.validate.checkAmount(amount);
      this.getLottoList(this.amount);
    });
  }

  getLottoList(amount) {
    for (let i = 0; i < amount; i++) {
      const LOTTO_ARRAY = this.getLotto();
      this.lottoList.push(LOTTO_ARRAY);
    }
    this.printLottoList(this.lottoList);
  }

  getLotto() {
    const LOTTO_ARRAY = Random.pickUniqueNumbersInRange(
      LOTTO.NUMBER_START,
      LOTTO.NUMBER_END,
      LOTTO.NUMBER_SELECT
    );
    LOTTO_ARRAY.sort((x, y) => x - y);
    return LOTTO_ARRAY;
  }

  printLottoList(lottoList) {
    Console.print(`${this.amount}개를 구매했습니다.`);
    lottoList.forEach((lotto) => {
      const TEXT = lotto.join(', ');
      Console.print(`[${TEXT}]`);
    });
    this.getWinningNumber();
  }

  getWinningNumber() {
    Console.readLine(MESSAGE.WINNING_NUMBER, (number) => {
      this.winning = this.validate.checkWinningNumber(number);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.BONUS_NUMBER, (number) => {
      this.bonus = this.validate.checkBonusNumber(number, this.winning);
      this.getLottoResult();
    });
  }

  getLottoResult() {
    const LOTTO_LIST = this.lottoList;
    const WINNING = this.winning;
    const BONUS = this.bonus;
    this.statistics.getRanking(LOTTO_LIST, WINNING, BONUS);
  }

  play() {
    this.getAmount();
  }
}

module.exports = App;
