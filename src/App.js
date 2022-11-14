const { Console } = require("@woowacourse/mission-utils");
const DrawingMachine = require("./DrawingMachine");
const {
  validateMoney,
  validateNumbersRange,
  validateDuplicateNumbers,
  validateOnlyNumber,
  validateWinningNumbersLength,
  validateRangeOfNumber,
} = require("./Exception");
const LottoMachine = require("./LottoMachine");

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
  }

  play() {
    Console.readLine(
      "구입금액을 입력해 주세요.\n",
      function (money) {
        money = Number(money);
        validateMoney(money);
        this.lottos = this.lottoMachine.buyLottos(money);
        this.printLottos(this.lottos);
        this.getWinningNumbers();
      }.bind(this)
    );
  }

  printLottos() {
    Console.print(`\n${this.lottos.length}개를 구매했습니다.`);
    this.lottos.forEach(function (lotto) {
      lotto.printNumbers();
    });
  }

  printStatistics() {
    /* 당첨 통계 출력 함수 */
  }

  getWinningNumbers() {
    Console.readLine(
      "\n당첨 번호를 입력해 주세요.\n",
      function (numbers) {
        const winningNumbers = this.parseNumbers(numbers);
        this.validateWinningNumbers(winningNumbers);
        this.winnigNumbers = winningNumbers;
        this.getBonusNumber();
      }.bind(this)
    );
  }

  getBonusNumber() {
    Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      function (number) {
        this.validateBonusNumber(number);
        this.bonusNumbers = number;
        this.printStatistics();
      }.bind(this)
    );
  }

  parseNumbers(numbers) {
    let winningNumbers = numbers.split(",");
    winningNumbers = winningNumbers.map(Number);
    return winningNumbers;
  }

  validateWinningNumbers(winnigNumbers) {
    validateWinningNumbersLength(winnigNumbers);
    validateNumbersRange(winnigNumbers);
    validateDuplicateNumbers(winnigNumbers);
    validateOnlyNumber(winnigNumbers);
  }

  validateBonusNumber(number) {
    validateRangeOfNumber(number);
  }
}

module.exports = App;
