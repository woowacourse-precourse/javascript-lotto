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
    Console.readLine(`${SENTENCE.PURCHASE}\n`, (money) => {
      this.printNewLine();
      this.purchaseLotto(money);
    });
  }

  purchaseLotto(money) {
    this.shop.buyFor(money);
    this.allLottoNumber = this.shop.getAllLottoNumbers();
    this.printAllLottoNumber();
  }

  printAllLottoNumber() {
    const lottoCount = this.shop.getLottoCount();

    Console.print(`${lottoCount}${SENTENCE.PURCHASE_COUNT}`);
    this.allLottoNumber.forEach((lottoNumber) =>
      Console.print(`[${lottoNumber.join(', ')}]`)
    );
    this.printNewLine();
    this.getWinningNumber();
  }

  getWinningNumber() {
    Console.readLine(`${SENTENCE.WINNING_NUMBERS}\n`, (winningNumbers) => {
      const formatNumbers = winningNumbers.split(',').map(Number);
      this.lotto.setWinningNumbers(formatNumbers);
      this.printNewLine();
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(`${SENTENCE.BONUS_NUMBERS}\n`, (bonusNumber) => {
      this.lotto.addBonusNumber(bonusNumber);
      this.printNewLine();
      this.printLottoResult();
    });
  }

  printLottoResult() {
    Console.print(`${SENTENCE.RESULT}\n${SENTENCE.DIVIDING_LINE}`);
    const lottoResult = this.lotto.getLottoResult(this.allLottoNumber);
    Object.entries(lottoResult).forEach(([matchSentence, matchCount], i) => {
      Console.print(`${matchSentence} (${MONEY[i]}) - ${matchCount}개`);
    });

    this.printProfitRete(lottoResult);
  }

  printProfitRete(lottoResult) {
    const money = this.shop.getMoney();
    const profitRate = this.calculateProfitRate.getProfitRate(
      money,
      lottoResult
    );
    Console.print(SENTENCE.PROFIT_RATE(profitRate));
    this.end();
  }

  printNewLine() {
    Console.print('');
  }

  end() {
    Console.close();
  }
}

module.exports = LottoGame;
