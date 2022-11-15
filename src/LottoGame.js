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
    // 시작함수
    Console.readLine(PURCHASE.INPUT_PRICE, (input) => this.purchase(input));
  }

  purchase(input) {
    // 구매
    this.setNumberPurchase(input);
    this.drawNumber(this.#money / LOTTO_PRICE);
  }

  setNumberPurchase(input) {
    //구매 및 구매 금액 확인
    this.#money = this.validateMoney(input);
  }

  validateMoney(input) {
    // 구매 유효성 확인
    checkIsNumber(input);
    checkZero(input);
    isUnit(input, LOTTO_PRICE);
    return input;
  }

  drawNumber(number) {
    // 로또 뽑기 셋
    this.#number_Purchase = this.#money / LOTTO_PRICE;
    this.#lotteries = this.draw(number);
    this.printDrawNumber();
    this.setWinningNumber();
  }

  draw(number) {
    // 랜덤 숫자 뽑기
    return Array(number)
      .fill(0)
      .map(() => Random.pickUniqueNumbersInRange(1, 45, 6).sort((current, next) => current - next));
  }

  printDrawNumber() {
    // 뽑은 숫자 출력
    Console.print(RESULT_MESSAGE.PURCHASE(this.#number_Purchase));
    this.#lotteries.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(", ")}]`);
    });
  }

  setWinningNumber() {
    // 당첨 로또 번호 셋
    Console.readLine(SET_WINNGNUMBER.INPUT_NUMBER, (winningNumbers) => {
      this.#winningNumber = new Lotto(winningNumbers.split(","));
      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    // 당첨 로또 보너스 번호 셋
    Console.readLine(SET_WINNGNUMBER.INPUT_BONUS_NUMBER, (bonusNumber) => {
      this.#winningNumber.setBonusNumber(bonusNumber);
      this.printResult();
    });
  }

  printResult() {
    // 결과 출력
    this.#lottoResult.print(this.#winningNumber.getNumbers(), this.#lotteries);
    Console.close();
  }
}

lottoGame = new LottoGame();
lottoGame.start();
module.exports = LottoGame;
