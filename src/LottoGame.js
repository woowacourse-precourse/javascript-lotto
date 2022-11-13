const { Console } = require('@woowacourse/mission-utils');
const Shop = require('./Shop');
const { SENTENCE, MONEY } = require('./utiles/Constant');
const Lotto = require('./Lotto');
const CalculateProfitRate = require('./CalculateProfitRate');

class LottoGame {
  constructor() {
    this.shop = new Shop();
    this.lotto = new Lotto();
    this.calculateProfitRate = new CalculateProfitRate();
    this.allLottoNumber;
  }

  start() {
    Console.readLine(`${SENTENCE.PURCHASE}\n`, this.purchaseLotto.bind(this));
  }

  purchaseLotto(money) {
    this.shop.buyFor(money);
    this.allLottoNumber = this.shop.getAllLottoNumbers();
  }

  printAllLottoNumber() {
    const lottoCount = this.shop.getLottoCount();
    Console.print(`${lottoCount}${SENTENCE.PURCHASE_COUNT}`);
    this.allLottoNumber.forEach((lottoNumber) =>
      Console.print(`[${lottoNumber.join(', ')}]`)
    );
    this.getWinningNumber();
  }

  getWinningNumber() {
    Console.readLine(`${SENTENCE.WINNING_NUMBERS}\n`, (winningNumbers) => {
      const formatNumbers = winningNumbers.split(',').map(Number);
      this.lotto.setWinningNumbers(formatNumbers);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(`${SENTENCE.BONUS_NUMBERS}\n`, (bonusNumber) => {
      this.lotto.addBonusNumber(bonusNumber);
      this.printLottoResult();
    });
  }

  printLottoResult() {
    Console.print(`${SENTENCE.RESULT}\n${SENTENCE.DIVIDING_LINE}`);
    const lottoResult = this.lotto.getLottoResult(this.allLottoNumber);
    for (let key in lottoResult) {
      Console.print(`${key} (${MONEY[key]}) - ${lottoResult[key]}개`);
    }
    this.printProfitRete(lottoResult);
  }

  printProfitRete(lottoResult) {
    const money = this.shop.getMoney();
    const profitRate = this.calculateProfitRate.getProfitRate(
      money,
      lottoResult
    );
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
    this.end();
  }

  end() {
    Console.close();
  }
}

module.exports = LottoGame;
