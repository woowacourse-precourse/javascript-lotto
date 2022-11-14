const { Console } = require('@woowacourse/mission-utils');

const LottoManager = require('./LottoManager');
const WinningNumbers = require('./WinningNumbers');

class App {
  lottoManager;
  winningNumbers;

  constructor() {
    this.lottoManager = new LottoManager();
    this.winningNumbers = new WinningNumbers();
  }

  play() {
    Console.readLine('구입금액을 입력해 주세요.\n', purchaseAmountInput => {
      try {
        this.lottoManager.initLottos(purchaseAmountInput);
        this.printLottos(this.lottoManager.lottos);
        this.inputWinningNumbers();
      } catch (err) {
        this.exitGameByError(err.message);
        throw err;
      }
    });
  }

  printLottos(lottos) {
    Console.print('');
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => Console.print(`[${lotto.numbers.join(', ')}]`));
  }

  inputWinningNumbers() {
    Console.print('');
    Console.readLine('당첨 번호를 입력해주세요.\n', winningNumbersInput => {
      this.winningNumbers.initWinningNumbers(winningNumbersInput);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.print('');
    Console.readLine('보너스 번호를 입력해주세요.\n', bonusNumberInput => {
      this.winningNumbers.initBonusNumber(bonusNumberInput);
      this.printWinningStats();
    });
  }

  printWinningStats() {
    Console.print('');
    Console.print('당첨 통계');
    Console.print('---');
    Console.close();
  }

  exitGameByError(errorMessage) {
    Console.print(errorMessage);
    Console.close();
  }
}

new App().play();

module.exports = App;
