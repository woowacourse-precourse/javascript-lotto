const { Console } = require('@woowacourse/mission-utils');
const Player = require('./Player');
const Machine = require('./Machine');
const Message = require('./Message');

const { PRIZE, WIN_MONEY } = require('./constants/prize');
const { ASK, ERROR, ALERT } = require('./constants/message');
const SETTING = require('./constants/setting');

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
    Console.print(ASK.PAYMENT);
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
    Console.print(ASK.WIN_NUMBERS);
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
    if (winNumbers.length !== SETTING.NUMBER_COUNT) {
      throw new Error(ERROR.NUMBER_COUNT);
    }

    if (winNumbers.some((number) => !Number.isInteger(number))) {
      throw new Error(ERROR.ONLY_NUMBER);
    }

    if (winNumbers.length !== new Set(winNumbers).size) {
      throw new Error(ERROR.NO_DUPLICATE);
    }

    if (
      Math.min(...winNumbers) < SETTING.MIN_NUMBER ||
      Math.max(...winNumbers) > SETTING.MAX_NUMBER
    ) {
      throw new Error(ERROR.NUMBER_IN_RANGE);
    }
  }

  askWinBonus() {
    Console.print('');
    Console.print(ASK.WIN_NUMBERS);
    Console.readLine('', (input) => {
      const winBonus = Number(input);
      this.validateWinBonus(winBonus);

      this.winBonus = winBonus;

      this.calculateResult();
    });
  }

  validateWinBonus(bonus) {
    if (!Number.isInteger(bonus)) {
      throw new Error(ERROR.ONLY_NUMBER);
    }

    if (bonus < SETTING.MIN_NUMBER || bonus > SETTING.MAX_NUMBER) {
      throw new Error(ERROR.NUMBER_IN_RANGE);
    }

    if (this.winNumbers.includes(bonus)) {
      throw new Error(ERROR.NO_DUPLICATE);
    }
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
    Console.print(ALERT.STATISTICS_PREFIX);
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
