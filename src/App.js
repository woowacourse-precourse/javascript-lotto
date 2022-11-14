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
        const lottos = this.lottoMachine.buyLottos(money);
        this.printLottos(lottos);
        this.getWinningNumbers();
        /* 당첨 통계 출력 */
      }.bind(this)
    );
  }

  printLottos(lottos) {
    lottos.forEach(function (lotto) {
      lotto.printNumbers();
    });
  }

  printStatistics() {
    /* 당첨 통계 출력 함수 */
  }

  getWinningNumbers() {
    Console.readLine(
      "당첨 번호를 입력해 주세요.\n",
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
      "보너스 번호를 입력해 주세요.\n",
      function (number) {
        this.validateBonusNumber(number);
        this.bonusNumbers = number;
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
