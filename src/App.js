const MissionUtils = require("@woowacourse/mission-utils");
const ERROR_MESSAGES = require("../src/const/ErrorMessages");
const { Console, Random } = MissionUtils;
const { IS_NUMBER, IS_OVER_MIN_COST, IS_NO_CHARGE } = ERROR_MESSAGES;

class App {
  #userPurchaseAmount;

  constructor() {
    this.#userPurchaseAmount = 0;
  }

  getUserLottoAmount() {
    return this.#userPurchaseAmount;
  }

  setUserPurchaseAmount(amount) {
    this.#userPurchaseAmount = amount;
  }

  setUserPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.validateMoney(money);

      this.setUserPurchaseAmount(parseInt(money / 1000));
      Console.print(`\n${this.getUserLottoAmount()}개를 구매했습니다.`);
    });
  }

  validateMoney(money) {
    if (!/^\d+$/.test(money)) throw Error(IS_NUMBER);
    if (money < 1000) throw Error(IS_OVER_MIN_COST);
    if (money % 1000 !== 0) throw Error(IS_NO_CHARGE);
    return;
  }

  play() {
    this.setUserPurchaseAmount();
  }
}

// const app = new App();
// app.play();

module.exports = App;
