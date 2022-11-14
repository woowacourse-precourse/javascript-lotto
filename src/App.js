const MissionUtils = require("@woowacourse/mission-utils");
const ERROR_MESSAGES = require("../src/const/ErrorMessages");
const Lotto = require("./Lotto");
const { Console, Random } = MissionUtils;
const {
  IS_NUMBER,
  IS_OVER_MIN_COST,
  IS_NO_CHARGE,
  IS_WINNER_NUMBER,
  IS_ENOUGH,
  IS_RANGE,
} = ERROR_MESSAGES;

class App {
  #amount;
  #userLottos;
  #winnerNumbers;

  constructor() {
    this.#amount = 0;
    this.#userLottos = [];
    this.#winnerNumbers = null;
  }

  setUserLottoAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.validateMoney(money);

      const AMOUNT = parseInt(money / 1000);
      this.#amount = AMOUNT;
      // Console.print("");
      Console.print(`${AMOUNT}개를 구매했습니다.`);
      this.setLottos(AMOUNT);
    });
  }

  setLottos(amount) {
    for (let i = 0; i < amount; i++) {
      const newLottoNums = Random.pickUniqueNumbersInRange(1, 45, 6);
      newLottoNums.sort((a, b) => a - b);

      const newLotto = new Lotto([...newLottoNums]);
      this.#userLottos.push(newLotto);
      newLotto.print();
    }
    // Console.print("");
    this.setWinnerNumbers();
  }

  setWinnerNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (numbers) => {
      this.validateWinnerNumbers(numbers);

      const NUMBER_LIST = [...new Set(numbers.split(","))];
      this.#winnerNumbers = NUMBER_LIST;
    });
  }

  validateMoney(money) {
    if (!/^\d+$/.test(money)) throw Error(IS_NUMBER);
    if (money < 1000) throw Error(IS_OVER_MIN_COST);
    if (money % 1000 !== 0) throw Error(IS_NO_CHARGE);
    return;
  }

  validateWinnerNumbers(numbers) {
    if (!/^([0-9]+,){5}\d+$/.test(numbers)) throw Error(IS_WINNER_NUMBER);

    const NUMBER_LIST = [...new Set(numbers.split(","))];
    if (NUMBER_LIST.length !== 6) throw Error(IS_ENOUGH);
    NUMBER_LIST.forEach((number) => {
      if (!Number.isInteger(+number) || number < 1 || number >= 46)
        throw Error(IS_RANGE);
    });
  }

  play() {
    this.setUserLottoAmount();
  }
}

const app = new App();
app.play();

module.exports = App;
