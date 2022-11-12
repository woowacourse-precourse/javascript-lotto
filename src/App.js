const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants');
const Validate = require('./Validate');
const Lotto = require('./Lotto');
const Statistics = require('./Statistics');

class App {
  amount;
  lottoList = [];
  winning;
  bonus;

  constructor() {
    this.validate = new Validate();
    this.lotto = new Lotto();
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
      const lotto = this.lotto.getLotto();
      this.lottoList.push(lotto);
    }
    this.printLottoList(this.lottoList);
  }

  printLottoList(lottoList) {
    Console.print(`\n${this.amount}개를 구매했습니다.`);
    lottoList.forEach((lotto) => {
      Console.print(lotto);
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
