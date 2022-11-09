const { Console } = require('@woowacourse/mission-utils');

const LottoManager = require('./LottoManager');

class App {
  lottoManager;

  constructor() {
    this.lottoManager = new LottoManager();
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
      this.lottoManager.initWinningNumbers(winningNumbersInput);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.print('');
    Console.readLine('보너스 번호를 입력해주세요.\n', bonusNumberInput => {
      this.lottoManager.initBonusNumber(bonusNumberInput);
    });
  }

  exitGameByError(errorMessage) {
    Console.print(errorMessage);
    Console.close();
  }
}

new App().play();

module.exports = App;
