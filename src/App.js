const { Console } = require('@woowacourse/mission-utils');
const LottoManager = require('./LottoManager');

class App {
  constructor() {
    this.lottoManager = new LottoManager();
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
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
    if (!this.isAllNumber(numbers)) {
      throw new Error('[ERROR] 당첨 번호는 숫자여야 합니다.');
    }
    if (!this.isAllRange(numbers)) {
      throw new Error('[ERROR] 당첨 번호는 1이상 45이하의 정수여야 합니다.');
    }
    if (!this.isUnique(numbers)) {
      throw new Error('[ERROR] 당첨 번호는 중복된 숫자가 없어야 합니다.');
    }
  }

  isLength(numbers) {
    return numbers.length === 6;
  }

  isAllNumber(numbers) {
    return numbers.every((number) => number.match(/^[0-9]+$/));
  }

  isAllRange(numbers) {
    return numbers.every((number) => number >= 1 && number <= 45);
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
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }
    if (!this.isRange(number)) {
      throw new Error('[ERROR] 보너스 번호는 1이상 45이하의 정수여야 합니다.');
    }
    if (this.isDuplicateWithWinningNumber(number)) {
      throw new Error(
        '[ERROR] 보너스 번호는 당첨 번호와 중복이 아닌 숫자여야 합니다.'
      );
    }
  }

  isNumber(number) {
    return number.match(/^[0-9]+$/);
  }

  isRange(number) {
    return number >= 1 && number <= 45;
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
  }

  checkRanking(count, lotto) {
    if (count === 3) {
      this.ranking = { ...this.ranking, fifth: this.ranking.fifth + 1 };
      this.winningReward += 5000;
    } else if (count === 4) {
      this.ranking = { ...this.ranking, fourth: this.ranking.fourth + 1 };
      this.winningReward += 50000;
    } else if (count === 5) {
      if (lotto.getNumbers().includes(this.bonusNumber)) {
        this.ranking = { ...this.ranking, second: this.ranking.second + 1 };
        this.winningReward += 30000000;
      }
      this.ranking = { ...this.ranking, third: this.ranking.third + 1 };
      this.winningReward += 1500000;
    } else if (count === 6) {
      this.ranking = { ...this.ranking, first: this.ranking.first + 1 };
      this.winningReward += 2000000000;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
