const { Console } = require('@woowacourse/mission-utils');
const Player = require('./Player');
const Machine = require('./Machine');
const Message = require('./Message');

const { PRIZE, WIN_MONEY } = require('./constants/prize');

class App {
  constructor() {
    this.player = new Player();
    this.winNumbers = [];
    this.winBonus = null;
  }

  play() {
    this.askForPayment();
  }

  askForPayment() {
    Console.print('구입금액을 입력해 주세요.');
    Console.readLine('', (input) => {
      const money = Number(input);
      this.player.buyLottos(money);
      this.printPlayerLottos();
    });
  }

  printPlayerLottos() {
    Console.print('');

    this.printLottoCount();
    this.printLottos();

    this.askWinNumbers();
  }

  printLottoCount() {
    const lottos = this.player.lottos;
    const lottoCount = lottos.length;
    const lottoCountMessage = Message.getLottoCountMessage(lottoCount);

    Console.print(lottoCountMessage);
  }

  printLottos() {
    const lottos = this.player.lottos;

    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      const lottoMessage = Message.getLottoNumbersMessage(numbers);

      Console.print(lottoMessage);
    });
  }

  askWinNumbers() {
    Console.print('');
    Console.print('당첨번호를 입력해주세요.');
    Console.readLine('', (input) => {
      const whiteSpaceRegExp = new RegExp(/\s/, 'g');
      const whiteSpaceRemoved = input.replace(whiteSpaceRegExp, '');
      const winNumbers = whiteSpaceRemoved.split(',').map(Number);
      this.validateWinNumbers(winNumbers);

      this.winNumbers = winNumbers;

      this.askWinBonus();
    });
  }

  validateWinNumbers(winNumbers) {
    if (winNumbers.some((number) => !Number.isInteger(number))) {
      throw new Error('[ERROR] 숫자만 입력해주세요.');
    }

    if (winNumbers.length !== 6 || new Set(winNumbers).size !== 6) {
      throw new Error('[ERROR] 중복되지 않는 6개의 숫자를 입력해주세요.');
    }

    if (Math.min(...winNumbers) < 1 || Math.max(...winNumbers) > 45) {
      throw new Error('[ERROR] 1부터 45까지의 숫자만 입력해주세요.');
    }
  }

  askWinBonus() {
    Console.print('');
    Console.print('보너스 번호를 입력해 주세요.');
    Console.readLine('', (input) => {
      const winBonus = Number(input);
      this.winBonus = winBonus;

      this.calculateResult();
    });
  }

  calculateResult() {
    this.player.lottos.forEach((lotto) => {
      const matchCount = lotto.getMatchCount(this.winNumbers);
      const prize = Machine.judgePrize(lotto, matchCount, this.winBonus);

      if (prize !== PRIZE.LOST) {
        this.player.addPrizeCounts(prize);
        this.player.addWinMoney(WIN_MONEY[prize]);
      }
    });

    this.printStatistics();
  }

  printStatistics() {
    Console.print('');
    Console.print('당첨 통계');
    Console.print('---');

    this.printResult();
    this.printProfitRate();

    this.endGame();
  }

  printResult() {
    this.player.prizeCounts.forEach((prizeCount, prize) => {
      const resultMessage = Message.getResultMessage(prize, prizeCount);

      Console.print(resultMessage);
    });
  }

  printProfitRate() {
    const profitRate = this.player.getProfitRate();
    const profitRateMessage = Message.getProfitRateMessage(profitRate);

    Console.print(profitRateMessage);
  }

  endGame() {
    Console.close();
  }
}

module.exports = App;
