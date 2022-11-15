const { PURCHASE, LOTTO_PRICE } = require("./constants");
const { LottoValidation, checkIsNumber, checkZero, isUnit } = require("./LottoValidation");

class LottoGame {
  constructor() {
    this.profit = 0;
    this.lottoMatch = {
      three: 0,
      four: 0,
      five: 0,
      five_Bonus: 0,
      six: 0,
      out: 0,
    };
  }
  #money;
  #number_Purchase;
  #lotteries;
  #winningNumber;
  #lottoResult;
  #lottoIssuer;

  start() {
    Console.readLine(PURCHASE.INPUT_PRICE, (input) => this.purchase(input));
  }
  purchase(input) {
    this.setNumberPurchase(input);
    this.drawNumber(this.money / LOTTO_PRICE);
  }
  setNumberPurchase(input) {
    this.money = this.validateMoney(input);
  }
  validateMoney(input) {
    checkIsNumber(input);
    checkZero(input);
    isUnit(input, LOTTO_PRICE);
    return input;
  }
  drawNumber(number) {
    this.lotteries = this.draw(number);
    this.printDrawNumber();
    this.setWinningNumber();
  }
  draw(number) {
    return Array(number)
      .fill(0)
      .map(() => Random.pickUniqueNumbersInRange(1, 45, 6).sort((current, next) => current - next));
  }
  printDrawNumber() {
    Console.print(RESULT_MESSAGE.PURCHASE(number_Purchase));
    this.#lotteries.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(", ")}]`);
    });
  }
  setWinningNumber() {
    Console.readLine(INPUT_MESSAGE.winning, (winningNumbers) => {
      this.#winningNumber = new Lotto(winningNumbers.split(","));
      this.drawBonusNumber();
    });
  }
  setBonusNumber() {
    Console.readLine(INPUT_MESSAGE.bonus, (bonusNumber) => {
      this.#winningNumber.setBonusNumber(bonusNumber);
      this.printResult();
    });
  }
}
