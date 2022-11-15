const LottoArray = require("./LottoArray");
const Stats = require("./Stats");
const ErrorCase = require("./ErrorCase");
const { NOTICE_MESSAGE, ERROR_MESSAGE } = require("./Constants");
const { Console } = require("@woowacourse/mission-utils");

const formatWinningNumbers = (winningNumbers) => {
  return winningNumbers
    .split(" ")
    .join("")
    .split(",")
    .map((number) => parseInt(number));
};

const makeStatsBoard = (data, performance) => {
  return `당첨 통계
---
3개 일치 (5,000원) - ${data.three}개
4개 일치 (50,000원) - ${data.four}개
5개 일치 (1,500,000원) - ${data.five}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${data.fivePlusBonus}개
6개 일치 (2,000,000,000원) - ${data.six}개
총 수익률은 ${performance}%입니다.
  `;
};

class App {
  cash;
  purchased;
  winningNumbers;
  bonusNumber;

  play() {
    this.getInformation();
  }

  getInformation() {
    Console.readLine(NOTICE_MESSAGE.CASH, (userInput) => {
      this.receiveCash(userInput);
      this.purchaseLotto();
      this.getWinningNumbers();
    });
  }

  receiveCash(userInput) {
    this.checkWrongInput(userInput, ErrorCase.isWrongCashInput, ERROR_MESSAGE.CASH);

    this.cash = Number(userInput);
  }

  purchaseLotto() {
    this.purchased = new LottoArray(this.cash);

    this.printPurchasedLottoStatus(this.purchased);
  }

  getWinningNumbers() {
    Console.readLine(NOTICE_MESSAGE.WINNING_NUMBERS, (userInput) => {
      this.receiveWinningNumbers(userInput);

      this.getBonusNumber();
    });
  }

  receiveWinningNumbers(userInput) {
    this.checkWrongInput(userInput, ErrorCase.isWrongWinningNumbersInput, ERROR_MESSAGE.WINNING_NUMBERS);

    const winningNumbers = formatWinningNumbers(userInput);
    this.winningNumbers = winningNumbers;
  }

  getBonusNumber() {
    Console.readLine(NOTICE_MESSAGE.BONUS_NUMBER, (userInput) => {
      this.receiveBonusNumber(userInput);

      this.checkBonusNumberDuplicated();

      this.produceStats();
    });
  }

  receiveBonusNumber(userInput) {
    this.checkWrongInput(userInput, ErrorCase.isWrongBonusNumberInput, ERROR_MESSAGE.BONUS_NUMBER);

    const bonusNumber = Number(userInput);
    this.bonusNumber = bonusNumber;
  }

  produceStats() {
    this.totalStats = new Stats({
      winningNumbers: this.winningNumbers,
      bonusNumber: this.bonusNumber,
      purchased: this.purchased,
      cash: this.cash,
    });

    this.printTotalStats();

    this.terminate();
  }

  terminate() {
    Console.close();
  }

  checkWrongInput(userInput, errorHandler, errorMessage) {
    const isWrongInput = errorHandler(userInput);
    if (isWrongInput) throw new Error(errorMessage);
  }

  printPurchasedLottoAmount(purchased) {
    Console.print(purchased.amount + NOTICE_MESSAGE.PURCHASE_AMOUNT);
  }

  printPurchasedLottoList(purchased) {
    purchased.lottoArray.forEach((lotto) => {
      const lottoNumbers = lotto.showNumbers().join(", ");
      Console.print(`[${lottoNumbers}]`);
    });
  }

  printPurchasedLottoStatus(purchased) {
    this.printPurchasedLottoAmount(purchased);
    this.printPurchasedLottoList(purchased);
  }

  checkBonusNumberDuplicated() {
    const isDuplicated = ErrorCase.isDuplicatedBonusNumber(this.winningNumbers, this.bonusNumber);

    if (isDuplicated) throw new Error(ERROR_MESSAGE.DUPLICATED_BONUS_NUMBER);
  }

  printTotalStats() {
    const { data, performance } = this.totalStats;
    const statsBoard = makeStatsBoard(data, performance);
    Console.print(statsBoard);
  }
}

module.exports = App;
