const { PURCHASE, LOTTO_PRICE, RESULT_MESSAGE, SET_WINNGNUMBER } = require("./constants");
const { LottoValidation, checkIsNumber, checkZero, isUnit } = require("./LottoValidation");
const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoResult = require("./LottoResult");

class LottoGame {
  #money;
  #number_Purchase;
  #lotteries;
  #winningNumber;
  #lottoResult = new LottoResult();
  start() {
    Console.readLine(PURCHASE.INPUT_PRICE, (input) => this.purchase(input));
  }

  purchase(input) {
    this.setNumberPurchase(input);
    this.drawNumber(this.#money / LOTTO_PRICE);
  }

  setNumberPurchase(input) {
    this.#money = this.validateMoney(input);
  }

  validateMoney(input) {
    checkIsNumber(input);
    checkZero(input);
    isUnit(input, LOTTO_PRICE);
    return input;
  }

  drawNumber(number) {
    this.#number_Purchase = this.#money / LOTTO_PRICE;
    this.#lotteries = this.draw(number);
    this.printDrawNumber();
    this.setWinningNumber();
  }

  draw(number) {
    return Array(number)
      .fill(0)
      .map(() => Random.pickUniqueNumbersInRange(1, 45, 6).sort((current, next) => current - next));
  }

  printDrawNumber() {
    Console.print(RESULT_MESSAGE.PURCHASE(this.#number_Purchase));
    this.#lotteries.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(", ")}]`);
    });
  }

  setWinningNumber() {
    Console.readLine(SET_WINNGNUMBER.INPUT_NUMBER, (winningNumbers) => {
      this.#winningNumber = new Lotto(winningNumbers.split(","));
      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    Console.readLine(SET_WINNGNUMBER.INPUT_BONUS_NUMBER, (bonusNumber) => {
      this.#winningNumber.setBonusNumber(bonusNumber);
      this.printResult();
    });
  }

  printResult() {
    this.#lottoResult.print(this.#winningNumber.getNumbers(), this.#lotteries);
    Console.close();
  }
}

lottoGame = new LottoGame();
lottoGame.start();
module.exports = LottoGame;
