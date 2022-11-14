const { Console } = require('@woowacourse/mission-utils');
const LottoManager = require('./LottoManager');

class App {
  constructor() {
    this.lottoManager = new LottoManager();
    this.winningNumbers = [];
  }

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) => {
      const lottoArray = this.lottoManager.issueLotto(purchaseAmount);
      this.printLotto(lottoArray);
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
      this.winningNumbers = splittedNumbers;
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
}

const app = new App();
app.play();

module.exports = App;
