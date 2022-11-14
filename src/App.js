const MissionUtils = require("@woowacourse/mission-utils");
const ERROR_MESSAGES = require("../src/const/ErrorMessages");
const Lotto = require("./Lotto");
const { Console, Random } = MissionUtils;
const { IS_NUMBER, IS_OVER_MIN_COST, IS_NO_CHARGE } = ERROR_MESSAGES;

class App {
  #amount;
  #userLottos;

  constructor() {
    this.#amount = 0;
    this.#userLottos = [];
  }

  getAmount() {
    return this.#amount;
  }

  setAmount(amount) {
    this.#amount = amount;
  }

  getUserLottos() {
    return this.#userLottos;
  }

  addUserLottos(newLotto) {
    this.#userLottos.push(newLotto);
  }

  setUserLottoAmount() {
    return new Promise((resolve) =>
      Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
        this.validateMoney(money);

        const AMOUNT = parseInt(money / 1000);
        this.setAmount(AMOUNT);
        Console.print(`\n${AMOUNT}개를 구매했습니다.`);
        return resolve(AMOUNT);
      }),
    );
  }

  setLottos(amount) {
    for (let i = 0; i < amount; i++) {
      const newLottoNums = Random.pickUniqueNumbersInRange(1, 45, 6);
      newLottoNums.sort((a, b) => a - b);

      const newLotto = new Lotto([...newLottoNums]);
      this.addUserLottos(newLotto);
      newLotto.print();
    }
  }

  validateMoney(money) {
    if (!/^\d+$/.test(money)) throw Error(IS_NUMBER);
    if (money < 1000) throw Error(IS_OVER_MIN_COST);
    if (money % 1000 !== 0) throw Error(IS_NO_CHARGE);
    return;
  }

  play() {
    this.setUserLottoAmount().then((amount) => {
      this.setLottos(amount);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
