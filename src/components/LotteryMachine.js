const { Console, Random } = require('@woowacourse/mission-utils');
const { makeErrorMsg, invalidNumber } = require('../utils/index');
const {
  MESSAGE,
  COUNT,
  ERROR_MESSAGE,
  NUMBER,
  LOTTO_RANK,
} = require('../constants/index');
const Lotto = require('./Lotto');

class LotteryMachine {
  #winningNumbers = { winnerNumbers: [], bonusNumber: 0 };

  updateWinnerNumber(winningNumbers) {
    this.#winningNumbers = winningNumbers;
  }

  issueTicket() {
    let lottos = [];

    Console.readLine(MESSAGE.LOTTERY_MACHINE.INPUT_MONEY, (input) => {
      const money = Number(input);
      LotteryMachine.#validateMoney(money);
      lottos = LotteryMachine.#generateLottos(money);
      LotteryMachine.#printTicket(lottos);
    });

    return lottos;
  }

  static #validateMoney(money) {
    if (invalidNumber([money])) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.MONEY_NUMBER));
    }

    if (money % NUMBER.MONEY_UNIT) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.MONEY_UNIT));
    }
  }

  static #generateLottos(money) {
    const purchaseQuantity = money / NUMBER.MONEY_UNIT;
    const lottos = new Array(purchaseQuantity).fill(true);

    return lottos.map(() => {
      const lottoNumbers = Random.pickUniqueNumbersInRange(
        COUNT.MIN_LOTTO_NUMBER,
        COUNT.MAX_LOTTO_NUMBER,
        COUNT.LOTTO_NUMBER,
      );
      return new Lotto(lottoNumbers);
    });
  }

  static #printTicket(lottos) {
    Console.print(MESSAGE.LOTTERY_MACHINE.BUY_LOTTO(lottos.length));

    lottos.forEach((lotto) => {
      const qrCode = lotto.getQrCode();
      Console.print(`"[${[qrCode.join(', ')]}]"`);
    });
  }

  readQrCode(lottos) {
    const { winningStatistics, winTheLottery } =
      LotteryMachine.#calcWinningStatistics(lottos);
    const correctNums = lottos.map((lotto) => this.#calcCorrectNum(lotto));

    correctNums.forEach((num) => {
      const ranking = Object.keys(LOTTO_RANK).find(
        (rank) => LOTTO_RANK[rank].matchNum === num,
      );

      if (!ranking) return;

      winTheLottery(ranking);
    });

    return winningStatistics;
  }

  static #calcWinningStatistics(lottos) {
    const winningStatistics = {
      ranking: {},
      totalLottoNum: lottos.length,
      totalWinnings: 0,
    };

    const winTheLottery = (winner) => {
      const { winnings } = LOTTO_RANK[winner];
      const { ranking } = winningStatistics;

      if (ranking[winner]) {
        ranking[winner] += 1;
      } else {
        ranking[winner] = 1;
      }

      winningStatistics.totalWinnings += winnings;
    };

    return { winningStatistics, winTheLottery };
  }

  #calcCorrectNum(lotto) {
    return lotto.getQrCode().reduce((correctNum, lottoNumber) => {
      if (this.#winningNumbers.winnerNumbers.includes(lottoNumber)) {
        correctNum += NUMBER.CORRECT_WINNER_NUMBER;
      }
      if (this.#winningNumbers.bonusNumber === lottoNumber) {
        correctNum += NUMBER.CORRECT_BONUS_NUMBER;
      }
      return correctNum;
    }, 0);
  }

  printWinResult(winningStatistics) {
    Console.print(MESSAGE.LOTTERY_MACHINE.PRINT_STATISTICS);

    Object.keys(LOTTO_RANK).forEach((rank) => {
      const correctNum = winningStatistics.ranking[rank] || 0;
      Console.print(MESSAGE.LOTTERY_MACHINE.WIN_STATISTIC(rank, correctNum));
    });

    const earningRate = LotteryMachine.#calcEarningRate(winningStatistics);
    Console.print(MESSAGE.LOTTERY_MACHINE.EARNING_RATE(earningRate));
  }

  static #calcEarningRate({ totalWinnings, totalLottoNum }) {
    const digits = 1;
    const earningRate =
      (totalWinnings / (totalLottoNum * NUMBER.MONEY_UNIT)) * 100;
    return earningRate.toFixed(digits);
  }
}

module.exports = LotteryMachine;
