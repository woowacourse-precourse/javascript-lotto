const { Console } = require('@woowacourse/mission-utils');
const LottoManager = require('./LottoManager');
const { ERROR, LOTTO } = require('./constants/constants');

class App {
  constructor() {
    this.lottoManager = new LottoManager();
    this.purchaseAmount = 0;
    this.lottoArray = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.ranking = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
    this.winningReward = 0;
  }

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) => {
      this.purchaseAmount = purchaseAmount;
      this.lottoArray = this.lottoManager.issueLotto(purchaseAmount);
      this.printLotto(this.lottoArray);
      this.inputWinningNumbers();
    });
  }

  printLotto(lottoArray) {
    Console.print(`${lottoArray.length}개를 구매했습니다.`);
    lottoArray.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`)
    );
  }

  inputWinningNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (numbers) => {
      const splittedNumbers = numbers.split(',');
      this.validateWinningNumbers(splittedNumbers);
      this.winningNumbers = splittedNumbers.map((number) => parseInt(number));

      this.inputBonusNumber();
    });
  }

  validateWinningNumbers(numbers) {
    if (!this.isLength(numbers)) {
      throw new Error(ERROR.WINNING_NUMBERS.NOT_LENGTH);
    }
    if (!this.isAllNumber(numbers)) {
      throw new Error(ERROR.WINNING_NUMBERS.NOT_NUMBER);
    }
    if (!this.isAllRange(numbers)) {
      throw new Error(ERROR.WINNING_NUMBERS.NOT_RANGE);
    }
    if (!this.isUnique(numbers)) {
      throw new Error(ERROR.WINNING_NUMBERS.NOT_UNIQUE);
    }
  }

  isLength(numbers) {
    return numbers.length === LOTTO.LENGTH;
  }

  isAllNumber(numbers) {
    return numbers.every((number) => number.match(/^[0-9]+$/));
  }

  isAllRange(numbers) {
    return numbers.every(
      (number) => number >= LOTTO.MINIMUM_RANGE && number <= LOTTO.MAXIMUM_RANGE
    );
  }

  isUnique(numbers) {
    return numbers.length === new Set(numbers).size;
  }

  inputBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (number) => {
      this.validateBonusNumber(number);
      this.bonusNumber = parseInt(number);
      this.checkCorrectCount();
    });
  }

  validateBonusNumber(number) {
    if (!this.isNumber(number)) {
      throw new Error(ERROR.BONUS_NUMBER.NOT_NUMBER);
    }
    if (!this.isRange(number)) {
      throw new Error(ERROR.BONUS_NUMBER.NOT_RANGE);
    }
    if (this.isDuplicateWithWinningNumber(number)) {
      throw new Error(ERROR.BONUS_NUMBER.DUPLICATE);
    }
  }

  isNumber(number) {
    return number.match(/^[0-9]+$/);
  }

  isRange(number) {
    return number >= LOTTO.MINIMUM_RANGE && number <= LOTTO.MAXIMUM_RANGE;
  }

  isDuplicateWithWinningNumber(number) {
    return this.winningNumbers.includes(number);
  }

  checkCorrectCount() {
    this.lottoArray.forEach((lotto) => {
      const correctNumbers = lotto
        .getNumbers()
        .filter((number) => this.winningNumbers.includes(number));
      const correctCount = correctNumbers.length;
      if (correctCount > 2) {
        this.checkRanking(correctCount, lotto.getNumbers());
      }
    });
    this.printStatistics();
  }

  checkRanking(count, lotto) {
    if (count === 3) {
      this.ranking = { ...this.ranking, fifth: this.ranking.fifth + 1 };
      this.winningReward += LOTTO.WINNING_REWARD.FIFTH;
    } else if (count === 4) {
      this.ranking = { ...this.ranking, fourth: this.ranking.fourth + 1 };
      this.winningReward += LOTTO.WINNING_REWARD.FOURTH;
    } else if (count === 5) {
      if (lotto.getNumbers().includes(this.bonusNumber)) {
        this.ranking = { ...this.ranking, second: this.ranking.second + 1 };
        this.winningReward += LOTTO.WINNING_REWARD.SECOND;
      }
      this.ranking = { ...this.ranking, third: this.ranking.third + 1 };
      this.winningReward += LOTTO.WINNING_REWARD.THIRD;
    } else if (count === 6) {
      this.ranking = { ...this.ranking, first: this.ranking.first + 1 };
      this.winningReward += LOTTO.WINNING_REWARD.FIRST;
    }
  }

  calculateEarningsRate() {
    return (this.winningReward / this.purchaseAmount) * 100;
  }

  printStatistics() {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${this.ranking.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${this.ranking.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.ranking.third}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.ranking.second}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.ranking.first}개`);

    const earningsRate = this.calculateEarningsRate();
    Console.print(`총 수익률은 ${earningsRate.toFixed(1)}%입니다.`);
  }
}

const app = new App();
app.play();

module.exports = App;
