const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const Validation = require("./utils/Validation");
const { MAX_LENGTH, MESSAGE } = require("./utils/Constants");

const validation = new Validation();
class App {
  #amount;
  #count;
  #lotto;
  #bonus;
  #numbers = [];
  #winList = { three: 0, four: 0, five: 0, bonus: 0, six: 0 };

  countLotto(money) {
    this.#count = money / 1000;
    Console.print(`${this.#count}` + MESSAGE.USER_BOUGHT);
  }

  arrayToString(array) {
    let tempString = "[";
    tempString += array.join(", ");
    tempString += "]";
    return tempString;
  }

  inputPurchase() {
    Console.readLine(MESSAGE.USER_ENTER_PURCHASE, (money) => {
      this.#amount = money;
      if (validation.isValidateMoney(money)) this.countLotto(money);
      // this.#count = money / 1000;
    });
  }

  inputWinNumber() {
    Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      this.#lotto = new Lotto(input.split(",").map((item) => parseInt(item)));
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.", (bonus) => {
      this.#lotto.validateBonus(bonus);
      this.#bonus = bonus;
    });
  }

  createLottos() {
    for (let i = 0; i < this.#count; i++) {
      this.createLottoNumber();
    }
  }

  createLottoNumber() {
    let lottos = Random.pickUniqueNumbersInRange(1, 45, 9);
    this.#numbers.push(lottos);
    Console.print(this.arrayToString(lottos));
  }

  calculateCount(count) {
    if (count === 3) this.#winList.three++;
    else if (count === 4) this.#winList.four++;
    else if (count === 5) this.#winList.five++;
    else if (count === 6) this.#winList.six++;
  }

  getResult() {
    this.#numbers.map((userLotto) => {
      let count = this.#lotto.matchNumber(userLotto);
      this.calculateCount(count);
    });
  }

  play() {
    this.inputPurchase();
    this.inputWinNumber();
    this.createLottos();
    this.getResult();
  }
}

module.exports = App;
