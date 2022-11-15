const {
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  RESULT_MESSAGE,
  LOTTO,
} = require("../src/Constants");

const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let inputMessage = "";
    MissionUtils.Console.readLine(INPUT_MESSAGE.MONEY, (input) => {
      inputMessage = input;
    });
    this.inputMoney(inputMessage);
  }

  inputMoney(input) {
    let inputValue = "";
    if (isNaN(Number(input))) throw new Error(ERROR_MESSAGES.NAN);
    const money = Number(input);
    if (money % LOTTO.MONEY_UNIT !== 0) throw new Error(ERROR_MESSAGE.UNIT);
    if (money <= 0) throw new Error(ERROR_MESSAGE.POSITIVE_NUMBER);
    this.money = input;
    return inputValue;
  }

  setMoneyCount() {
    this.count = this.money / LOTTO_MONEY_UNIT;
  }
  issueLotto() {
    for (let i = 0; i < this.count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_VALUE_MIN,
        LOTTO_VALUE_MAX,
        LOTTO_SIZE
      ).sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      this.lottoList.push(lotto);
    }
  }
  showLotto() {
    MissionUtils.Console.print(`${this.inputCount}${RESULT_MESSAGE.PURCHASE}`);
    this.lottoList.forEach((lotto) =>
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`)
    );
  }
  inputWinningNumbers(winningNumbers) {
    this.#winningNumberList = winningNumbers.split(",").map((number) => {
      if (number < 1 || number > 45) throw new Error(ERROR_MESSAGE.RANGE);
      return +number;
    });
  }
}

module.exports = App;
