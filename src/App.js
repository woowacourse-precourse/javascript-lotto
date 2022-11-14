const { Console } = require('@woowacourse/mission-utils');

const LottoManager = require('../src/LottoManager');
const WinningNumbers = require('../src/WinningNumbers');
const WinningHistory = require('../src/WinningHistory');

const { LOTTO_PRIZE_LIST } = require('../src/lib/constants/lotto');

class App {
  lottoManager;
  winningNumbers;
  winningHistory;

  constructor() {
    this.lottoManager = new LottoManager();
    this.winningNumbers = new WinningNumbers();
    this.winningHistory = new WinningHistory();
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
      this.initWinningHistory();
      this.printWinningHistory(
        this.winningHistory.winningList,
        this.winningHistory.profitRate,
      );
    });
  }

  initWinningHistory() {
    this.winningHistory.initWinningList({
      lottos: this.lottoManager.lottos,
      winningNumbers: this.winningNumbers.winningNumbers,
      bonusNumber: this.winningNumbers.bonusNumber,
    });
    this.winningHistory.calcProfitRate(
      this.lottoManager.purchaseAmount,
      this.winningHistory.calcTotalProfit(),
    );
  }

  printWinningHistory(winningList, profitRate) {
    Console.print('');
    Console.print('당첨 통계');
    Console.print('---');
    this.printWinningList(winningList);
    Console.print(`총 수익률은 ${this.formatProfitRate(profitRate)}%입니다.`);
    Console.close();
  }

  printWinningList(winningList) {
    [...winningList].reverse().forEach((winningLottoCount, idx) => {
      const { CONDITION, PRIZE_MONEY } =
        LOTTO_PRIZE_LIST[winningList.length - idx - 1];
      Console.print(
        `${CONDITION} (${PRIZE_MONEY.toLocaleString(
          'ko-KR',
        )}원) - ${winningLottoCount}개`,
      );
    });
  }

  formatProfitRate(profitRate) {
    const baseNumber = Number(profitRate.toFixed(1));
    const integerPart = Math.floor(baseNumber);
    const floatPart = (baseNumber * 10) % 10;

    return `${integerPart.toLocaleString('ko-KR')}.${floatPart}`;
  }

  exitGameByError(errorMessage) {
    Console.print(errorMessage);
    Console.close();
  }
}

module.exports = App;
