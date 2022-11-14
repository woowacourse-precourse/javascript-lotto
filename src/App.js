const { Console, Random } = require("@woowacourse/mission-utils");
const {
  IS_NUMBER,
  IS_OVER_MIN_COST,
  IS_NO_CHARGE,
  IS_WINNER_NUMBER,
  IS_ENOUGH,
  IS_RANGE,
  IS_NOT_IN_WINNER_NUMBER,
} = require("../src/const/ErrorMessages");
const PRICES = require("./const/Prices");
const Lotto = require("./Lotto");
class App {
  #amount;
  #userLottos;
  #winnerNumbers;
  #bonusNumber;

  constructor() {
    this.#amount = 0;
    this.#userLottos = [];
    this.#winnerNumbers = [];
    this.#bonusNumber = 0;
  }

  getWinnerNumbers() {
    return this.#winnerNumbers;
  }

  setWinnerNumbers(numbers) {
    this.#winnerNumbers = numbers;
  }

  inputUserLottoAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.validateMoney(money);

      const AMOUNT = parseInt(money / 1000);
      this.#amount = AMOUNT;
      // Console.print("");
      Console.print(`${AMOUNT}개를 구매했습니다.`);
      this.inializeLottos(AMOUNT);
    });
  }

  inializeLottos(amount) {
    for (let i = 0; i < amount; i++) {
      const newLottoNums = Random.pickUniqueNumbersInRange(1, 45, 6);
      newLottoNums.sort((a, b) => a - b);

      const newLotto = new Lotto([...newLottoNums]);
      this.#userLottos.push(newLotto);
      newLotto.print();
    }
    // Console.print("");
    this.inputWinnerNumbers();
  }

  inputWinnerNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (numbers) => {
      this.validateWinnerNumbers(numbers);

      const NUMBER_LIST = [...new Set(numbers.split(","))].map((num) => +num);
      this.#winnerNumbers = NUMBER_LIST;

      this.inputBonusNumbers();
    });
  }

  inputBonusNumbers() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (number) => {
      this.validateBonusNumbers(number);
      this.#bonusNumber = +number;

      this.printResult();
    });
  }

  printResult() {
    Console.print("당첨 통계");
    Console.print("---");
    const RESULT_LIST = this.calculateResult();
    this.showResult(RESULT_LIST);
    Console.print(`총 수익률은 ${this.calculateBenefits(RESULT_LIST)}%입니다.`);
  }

  calculateResult() {
    const WINNER_NUMBERS = this.#winnerNumbers;
    const BONUS_NUMBER = +this.#bonusNumber;

    const RESULT_LIST = {};
    this.#userLottos.forEach((lotto) => {
      const RESULT = lotto.win(WINNER_NUMBERS, BONUS_NUMBER);

      if (!RESULT_LIST[`WIN_${RESULT}`]) RESULT_LIST[`WIN_${RESULT}`] = 0;
      RESULT_LIST[`WIN_${RESULT}`] += 1;
    });

    return RESULT_LIST;
  }

  showResult(resultList) {
    Console.print(`3개 일치 (5,000원) - ${resultList.WIN_5 || 0}개`);
    Console.print(`4개 일치 (50,000원) - ${resultList.WIN_4 || 0}개`);
    Console.print(`5개 일치 (1,500,000원) - ${resultList.WIN_3 || 0}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultList.WIN_2 || 0}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${resultList.WIN_1 || 0}개`);
    Console.close();
  }

  calculateBenefits(resultList) {
    const PAYED = this.#amount * 1000;
    let earned = 0;

    for (const [key, value] of Object.entries(resultList)) {
      if (PRICES[key]) {
        earned += PRICES[key] * value;
      }
    }

    const BENEFIT = ((earned / PAYED) * 100).toFixed(1);
    return BENEFIT;
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

  validateBonusNumbers(number) {
    if (!/^\d+$/.test(number)) throw Error(IS_NUMBER);
    if (!Number.isInteger(+number) || number < 1 || number >= 46)
      throw Error(IS_RANGE);
    console.log(this.#winnerNumbers);
    if (this.#winnerNumbers.includes(+number))
      throw Error(IS_NOT_IN_WINNER_NUMBER);
  }

  play() {
    this.inputUserLottoAmount();
  }
}

// const app = new App();
// app.play();

module.exports = App;
