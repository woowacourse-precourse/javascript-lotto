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

  getLotto() {
    const lotto = Random.pickUniqueNumbersInRange(
      LOTTO.NUMBER_START,
      LOTTO.NUMBER_END,
      LOTTO.NUMBER_SELECT
    );
    lotto.sort((x, y) => x - y);
    return lotto;
  }

  getLottoList(amount) {
    for (let i = 0; i < amount; i++) {
      const lotto = this.getLotto();
      this.lottoList.push(lotto);
    }
    this.printLottoList(this.lottoList);
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
    const lottoList = this.lottoList;
    const winning = this.winning;
    const bonus = this.bonus;
    this.statistics.getRanking(lottoList, winning, bonus);
  }

  play() {
    this.getAmount();
  }
}

module.exports = App;
