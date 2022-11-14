const { Console } = require("@woowacourse/mission-utils");
const { GRADE, MESSAGE, LOTTO } = require("./constant/constant");
const NumberGenerator = require("./NumberGenerator");
const Lotto = require("./Lotto");
const LottoSimulator = require("./LottoSimulator");
const Validator = require("./Validator");
const { changePrintFormat } = require("./utils/utils");

class App {
  lottos;
  purchaseMoney;
  winningNumber;
  bonusNumber;

  constructor() {
    this.lottos = [];
    this.winningNumber = [];
    this.lottoSimulator = new LottoSimulator();
    this.validator = new Validator();
  }

  play() {
    Console.readLine(MESSAGE.INPUT_PURCHASE_MONEY, this.handleGameStart.bind(this));
  }

  handleGameStart(purchaseMoney) {
    validator.checkPurchaseMoney(purchaseMoney);
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
      validator.checkWinningNumber(winningNumber);
      this.winningNumber = winningNumber.split(',').map(num => Number(num));
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      validator.checkBonusNumber(bonusNumber);
      this.bonusNumber = Number(bonusNumber);
      this.handleGameEnd();
    });
  }

  handleGameEnd() {
    this.lottoSimulator.checkWinningResult(this.lottos, this.winningNumber, this.bonusNumber);
    Console.print(MESSAGE.PRINT_RESULT_TITLE);
    this.printWinningResult();
    this.printReturnRate();
    Console.close();
  }

  printWinningResult() {
    this.lottoSimulator.gradeCount.forEach((count, rank) => {
      const rankUpperCase = rank.toUpperCase();
      Console.print(MESSAGE.PRINT_WINNING_RESULT.format(
        GRADE[rankUpperCase].DUPLICATE_COUNT,
        GRADE[rankUpperCase].EXTRA_TEXT,
        GRADE[rankUpperCase].PRIZE_MONEY,
        count,
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