const {
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  RESULT_MESSAGE,
  LOTTO,
  LOTTO_PRIZE,
} = require("../src/Constants");

const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  #winningNumberList;
  play() {
    let inputMessage = "";
    MissionUtils.Console.readLine(INPUT_MESSAGE.MONEY, (input) => {
      inputMessage = input;
    });
    this.inputMoney(inputMessage);
    this.setMoneyCount();
    this.issueLotto();
    this.showLotto();
    MissionUtils.Console.readLine(
      INPUT_MESSAGE.WINNING_NUMBER,
      (winningNumbers) => {
        this.inputWinningNumbers(winningNumbers);
      }
    );
    MissionUtils.Console.readLine(INPUT_MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      this.inputBonusNumber(bonusNumber);
      this.showResult();
      this.ResultPrize();
    });
  }

  inputMoney(input) {
    if (isNaN(Number(input))) throw new Error(ERROR_MESSAGE.NAN);
    const money = Number(input);
    if (money % LOTTO.MONEY_UNIT !== 0) throw new Error(ERROR_MESSAGE.UNIT);
    if (money <= 0) throw new Error(ERROR_MESSAGE.POSITIVE_NUMBER);
    this.money = input;
  }

  setMoneyCount() {
    this.inputCount = this.money / LOTTO.MONEY_UNIT;
  }

  issueLotto() {
    this.lottoList = [];

    for (let i = 0; i < this.inputCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO.VALUE_MIN,
        LOTTO.VALUE_MAX,
        LOTTO.SIZE
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

  inputBonusNumber(bonusNumber) {
    this.bonusNumber = (bonusNumber) => {
      if (number < 1 || number > 45) throw new Error(ERROR_MESSAGE.RANGE);
    };
  }

  showResult(LOTTO_PRIZE, finalPrize) {
    for (let key in LOTTO_PRIZE) {
      MissionUtils.Console.print(
        `${LOTTO_PRIZE[key].MATCHED} (${parseInt(
          LOTTO_PRIZE[key].MONEY
        ).toLocaleString()}원) - ${LOTTO_PRIZE[key].count}개`
      );
    }
  }

  ResultPrize() {
    let count = 0;
    let finalPrize = 0;
    // this.countLottoArray = Array.from({ length: 5 });
    this.countLottoArray = this.lottoList;
    this.countLottoArray.forEach((lotto) => {
      lotto.getNumbers().forEach((test) => {
        if (this.#winningNumberList.includes(test)) count++;
      });
      if (count === 3) LOTTO_PRIZE[5].count++;
      if (count === 4) LOTTO_PRIZE[4].count++;
      if (count === 5)
        lotto.includes(this.bonusNumber)
          ? LOTTO_PRIZE[2].count++
          : LOTTO_PRIZE[3].count++;
      if (count === 6) LOTTO_PRIZE[1].count++;
      count = 0;
    });

    for (let i = 1; i < 6; i++) {
      finalPrize += LOTTO_PRIZE[i].MONEY * LOTTO_PRIZE[i].count;
    }
    MissionUtils.Console.print(RESULT_MESSAGE.DRAW);

    this.showResult(LOTTO_PRIZE, finalPrize);
    MissionUtils.Console.print(
      `총 수익률은 ${((finalPrize / this.money) * 100).toFixed(1)}%입니다.`
    );
  }
}
module.exports = App;
