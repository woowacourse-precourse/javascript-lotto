const { Console, Random } = require('@woowacourse/mission-utils');
const {
  MESSAGE,
  COUNT,
  ERROR_MESSAGE,
  NUMBER,
  LOTTO_RANK,
} = require('./constants');
const Lotto = require('./Lotto');
const { makeErrorMsg } = require('./utils');

class LotteryMachine {
  static issueTicket() {
    let lottos = [];

    Console.readLine(MESSAGE.LOTTERY_MACHINE.INPUT_MONEY, (input) => {
      const money = Number(input);
      LotteryMachine.#validateMoney(money);
      lottos = LotteryMachine.generateLottos(money);
      LotteryMachine.printTicket(lottos);
    });

    return lottos;
  }

  static #validateMoney(money) {
    if (Number.isNaN(money)) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.MONEY_NUMBER));
    }

    if (money % NUMBER.MONEY_UNIT) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.MONEY_UNIT));
    }
  }

  static generateLottos(money) {
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

  static printTicket(lottos) {
    Console.print(MESSAGE.LOTTERY_MACHINE.BUY_LOTTO(lottos.length));

    lottos.forEach((lotto) => {
      const qrCode = lotto.getQrCode();
      Console.print(`"[${[qrCode.join(', ')]}]"`);
    });
  }

  static readQrCode(lottos, winnerNumbers) {
    const { winningStatistics, winTheLottery } =
      LotteryMachine.#calcWinningStatistics(lottos);

    const correctNums = lottos.map((lotto) =>
      LotteryMachine.#calcCorrectNum(lotto, winnerNumbers),
    );

    correctNums.forEach((num) => {
      const winner = Object.keys(LOTTO_RANK).find(
        (rank) => LOTTO_RANK[rank].matchNum === num,
      );

      if (!winner) return;
      winTheLottery(winner);
    });

    return winningStatistics;
  }

  static #calcWinningStatistics(lottos) {
    const winningStatistics = {
      ranking: {
        firstPlace: 0,
        secondPlace: 0,
        thirdPlace: 0,
        fourthPlace: 0,
        fifthPlace: 0,
      },
      totalLottoNum: lottos.length,
      totalWinnings: 0,
    };

    const winTheLottery = (winner) => {
      const { winnings } = LOTTO_RANK[winner];
      winningStatistics.ranking[winner] += 1;
      winningStatistics.totalWinnings += winnings;
    };

    return { winningStatistics, winTheLottery };
  }

  static #calcCorrectNum(lotto, winnerNumbers) {
    const [winnerNumber, bonusNumber] = winnerNumbers;
    return lotto.getQrCode().reduce((correctNum, lottoNumber) => {
      if (winnerNumber.includes(lottoNumber)) {
        correctNum += NUMBER.CORRECT_WINNER_NUMBER;
      }
      if (bonusNumber === lottoNumber) {
        correctNum += NUMBER.CORRECT_BONUS_NUMBER;
      }
      return correctNum;
    }, 0);
  }
}

module.exports = LotteryMachine;
