const CalculateProfitRate = require('./CalculateProfitRate');
const Lotto = require('./Lotto');
const Shop = require('./Shop');
const { Console } = require('@woowacourse/mission-utils');
const { SENTENCE, MONEY } = require('./utiles/Constant');

class App {
  play() {
    this.shop = new Shop();
    this.lotto = new Lotto();
    this.calculateProfitRate = new CalculateProfitRate();
    this.purchaseLotto();
    this.allLottoNumbers;
  }

  purchaseLotto() {
    Console.readLine(`${SENTENCE.PURCHASE}\n`, (money) => {
      this.shop.buyFor(money);
      this.allLottoNumbers = this.shop.getAllLottoNumbers();

      // this.printNewLine();
      this.printLotto();
    });
  }

  printLotto() {
    const lottoCount = this.shop.getLottoCount();
    Console.print(`${lottoCount}${SENTENCE.PURCHASE_AMOUNT}`);
    this.allLottoNumbers.forEach((oneLottoNumbers) =>
      Console.print(`[${oneLottoNumbers.join(', ')}]`)
    );

    // this.printNewLine();
    this.getWinningNumbers();
  }

  getWinningNumbers() {
    Console.readLine(`${SENTENCE.WINNING_NUMBERS}\n`, (winningNumbers) => {
      const unFormatNumbers = winningNumbers.split(',').map(Number);
      console.log(unFormatNumbers);
      this.lotto.setWinningNumbers(unFormatNumbers);

      // this.printNewLine();
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(`${SENTENCE.BONUS_NUMBERS}\n`, (bonusNumber) => {
      this.lotto.addBonusNumber(bonusNumber);

      // this.printNewLine();
      this.printResult();
    });
  }

  printResult() {
    Console.print(`${SENTENCE.RESULT}\n${SENTENCE.DIVIDING_LINE}`);
    const lottoResult = this.lotto.getLottoResult(this.allLottoNumbers);
    for (let key in lottoResult) {
      Console.print(`${key} (${MONEY[key]}) - ${lottoResult[key]}개`);
    }

    const profitRate = this.calculateProfitRate.getProfitRate(
      this.shop.getMoney(),
      lottoResult
    );
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
    Console.close();
  }

  printNewLine() {
    Console.print('');
  }
}

module.exports = App;
