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
    validation.isValidateLength(lottos);
    lottos.map((item, index) => {
      validation.isDuplicate(lottos, item, index);
      validation.isNotNumber(item);
    });
    this.#numbers.push(lottos);
    Console.print(this.arrayToString(lottos));
  }

  calculateCount(count, bonusCheck) {
    if (count === 3) this.#winList.three++;
    else if (count === 4) this.#winList.four++;
    else if (count === 5 && bonusCheck) this.#winList.bonus++;
    else if (count === 5) this.#winList.five++;
    else if (count === 6) this.#winList.six++;
  }

  matchBonus(user) {
    if (user.indexOf(parseInt(this.#bonus)) !== -1) {
      return true;
    }
    return false;
  }

  getResult() {
    this.#numbers.map((userLotto) => {
      let count = this.#lotto.matchNumber(userLotto);
      let bonusCheck = this.matchBonus(userLotto);
      this.calculateCount(count, bonusCheck);
    });
  }

  getTotalProfit() {
    return (
      this.#winList.three * 5000 +
      this.#winList.four * 50000 +
      this.#winList.five * 1500000 +
      this.#winList.bonus * 30000000 +
      this.#winList.six * 2000000000
    );
  }

  printResult() {
    Console.print(MESSAGE.WINNING_STATISTICS);
    Console.print(MESSAGE.MATCH_THREE + `${this.#winList.three}개`);
    Console.print(MESSAGE.MATCH_FOUR + `${this.#winList.four}개`);
    Console.print(MESSAGE.MATCH_FIVE + `${this.#winList.five}개`);
    Console.print(MESSAGE.MATCH_BONUS + `${this.#winList.bonus}개`);
    Console.print(MESSAGE.MATCH_ALL + `${this.#winList.six}개`);
    Console.print(
      `총 수익률은 ${(this.getTotalProfit() / this.#amount) * 100}%입니다.`
    );
  }

  play() {
    this.inputPurchase();
    this.inputWinNumber();
    this.createLottos();
    this.getResult();
    this.printResult();
  }
}

module.exports = App;
