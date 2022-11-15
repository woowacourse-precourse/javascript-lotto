const LottoArray = require("./LottoArray");
const Stats = require("./Stats");
const Print = require("./Print");
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

    Print.purchasedLottoStatus(this.purchased);
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

    Print.totalStats(this.totalStats);

    this.terminate();
  }

  terminate() {
    Console.close();
  }

  checkWrongInput(userInput, errorHandler, errorMessage) {
    const isWrongInput = errorHandler(userInput);
    if (isWrongInput) throw new Error(errorMessage);
  }

  checkBonusNumberDuplicated() {
    const isDuplicated = ErrorCase.isDuplicatedBonusNumber(this.winningNumbers, this.bonusNumber);

    if (isDuplicated) throw new Error(ERROR_MESSAGE.DUPLICATED_BONUS_NUMBER);
  }
}

module.exports = App;
