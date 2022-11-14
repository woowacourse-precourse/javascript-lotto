const MissionUtils = require('@woowacourse/mission-utils');
const LottoUser = require('./LottoUser');
const Lotto = require('./Lotto.js');
const {
  STATISTIC_KEY,
  PRIZE,
  MATCH_NUMBER,
  INPUT_MESSAGE,
} = require('./constants.js');

class LottoGame {
  #user;
  #raffle;
  #statistic;

  constructor() {
    this.#user = undefined;
    this.#raffle = {
      winning: undefined,
      bonus: undefined,
    };
    this.#statistic = STATISTIC_KEY.reduce((prev, currentKey) => {
      prev[currentKey] = 0;
      return prev;
    }, {});
  }

  start() {
    this.inputAmount();
  }

  inputAmount() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.AMOUNT, (amount) => {
      this.#user = new LottoUser(amount);
      this.#user.printUserLottos();
      this.inputWinningNumbers();
    });
  }

  inputWinningNumbers() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.WINNING, (numbers) => {
      this.#raffle.winning = new Lotto(numbers.split(',').map(Number));
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.BONUS, (number) => {
      const numberToInt = parseInt(number, 10);
      Lotto.validateLottoNumber(numberToInt);
      Lotto.validateNumberArrayDuplication(
        this.#raffle.winning.getLottoNumbers().concat(numberToInt),
      );
      this.#raffle.bonus = parseInt(numberToInt, 10);

      this.printWinningStatistic();
    });
  }

  printWinningStatistic() {
    MissionUtils.Console.print(INPUT_MESSAGE.STATISTIC);
    this.calcStatistic();
    STATISTIC_KEY.forEach((key) => {
      this.printRanking(key);
    });
    this.printRateOfReturn();
  }

  printRanking(key) {
    MissionUtils.Console.print(
      `${MATCH_NUMBER[key]}개 일치${
        key.includes('BONUS') ? ', 보너스 볼 일치' : ''
      } (${PRIZE[key].toLocaleString('ko-KR')}원) - ${this.#statistic[key]}개`,
    );
  }

  calcStatistic() {
    this.#user.getLottos().forEach((lotto) => {
      const sameWinningCount = this.countWinningNumber(
        lotto.getLottoNumbers(),
        this.#raffle.winning.getLottoNumbers(),
      );
      const hasBonus = this.hasBonusNumber(
        lotto.getLottoNumbers(),
        this.#raffle.bonus,
      );
      this.setRanking(sameWinningCount, hasBonus);
    });
  }

  setRanking(winningCount, hasBonus) {
    if (winningCount === 6) this.#statistic.SIX += 1;
    else if (winningCount === 5 && hasBonus) this.#statistic[FIVE_BONUS] += 1;
    else if (winningCount === 5) this.#statistic.FIVE += 1;
    else if (winningCount === 4) this.#statistic.FOUR += 1;
    else if (winningCount === 3) this.#statistic.THREE += 1;
  }

  countWinningNumber(lotto, winning) {
    let count = 0;
    lotto.forEach((number) => {
      if (winning.includes(number)) count += 1;
    });
    return count;
  }

  hasBonusNumber(lotto, bonus) {
    return lotto.includes(bonus);
  }

  printRateOfReturn() {
    let totalPrize = 0;
    STATISTIC_KEY.forEach((key) => {
      totalPrize += this.#statistic[key] * PRIZE[key];
    });
    const rateOfReturn = this.calcRateOfReturn(
      this.#user.getAmount(),
      totalPrize,
    );
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
    this.exitGame();
  }

  calcRateOfReturn(amount, totalPrize) {
    return ((totalPrize / amount) * 100).toFixed(1);
  }

  exitGame() {
    MissionUtils.Console.close();
  }
}

module.exports = LottoGame;
