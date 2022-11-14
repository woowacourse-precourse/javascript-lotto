const { Console } = require("@woowacourse/mission-utils");
const { GRADE, MESSAGE, LOTTO } = require("./constant/constant");
const NumberGenerator = require("./NumberGenerator");
const Lotto = require("./Lotto");
const LottoSimulator = require("./LottoSimulator");
const Validator = require("./Validator");
const { changePrintFormat, toLocaleMoney } = require("./utils/utils");

class App {
  lottos;
  purchaseMoney;
  winningLotto;
  bonusNumber;

  constructor() {
    this.lottos = [];
    this.lottoSimulator = new LottoSimulator();
    this.validator = new Validator();
  }

  play() {
    Console.readLine(MESSAGE.INPUT_PURCHASE_MONEY, this.handleGameStart.bind(this));
  }

  handleGameStart(purchaseMoney) {
    this.validator.checkPurchaseMoney(purchaseMoney);
    this.purchaseMoney = Number(purchaseMoney);
    this.issueLotto();
    changePrintFormat();
    this.printMyLottos();
    this.getWinningNumber();
  }

  issueLotto() {
    const numberGenerator = new NumberGenerator();
    for (let purchaseCount = 0; purchaseCount < this.purchaseMoney / LOTTO.PRICE; purchaseCount++){
      this.lottos.push(new Lotto(numberGenerator.createRandomNumber()));
    }
  }

  printMyLottos() {
    Console.print(MESSAGE.PRINT_LOTTOS.format(this.lottos.length));
    this.lottos.forEach(lotto => lotto.print());
  }

  getWinningNumber() {
    Console.readLine(MESSAGE.INPUT_WINNING_NUMBER, (winningNumber) => {
      this.validator.checkWinningNumber(winningNumber);
      this.winningLotto = new Lotto(winningNumber.split(',').map(num => Number(num)));
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      this.validator.checkBonusNumber(this.winningLotto.numbers, bonusNumber);
      this.bonusNumber = Number(bonusNumber);
      this.handleGameEnd();
    });
  }

  handleGameEnd() {
    this.lottoSimulator.checkWinningResult(this.lottos, this.winningLotto, this.bonusNumber);
    Console.print(MESSAGE.PRINT_RESULT_TITLE);
    this.printWinningResult();
    this.printReturnRate();
    Console.close();
  }

  printWinningResult() {
    this.lottoSimulator.gradeCount.forEach((gradeCount, grade) => {
      const gradeUpperCase = grade.toUpperCase();
      Console.print(MESSAGE.PRINT_WINNING_RESULT.format(
        GRADE[gradeUpperCase].DUPLICATE_COUNT,
        GRADE[gradeUpperCase].EXTRA_TEXT,
        toLocaleMoney(GRADE[gradeUpperCase].PRIZE_MONEY),
        gradeCount,
        )
      );
    });
  }

  printReturnRate() {
    Console.print(
      MESSAGE.PRINT_RETURN_RATE.format(
        this.lottoSimulator.calcReturnRate(this.purchaseMoney)
      ) 
    );
  }
}

module.exports = App;

const ap = new App();
ap.play();