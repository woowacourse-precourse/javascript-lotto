const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoAnswer = require("./LottoAnswer");
const {
  CONSTANT,
  ERROR_MESSAGE,
  WINMESSAGE,
  WINMONEY,
  parseAnswerInput,
  parseBonusInput,
  parsePrintNumber,
  getPercentage,
  MESSAGE,
} = require("./Utils");

class Store {
  constructor() {
    this.cost = 0;
    this.candidates = [];
    this.answer = null;
    this.result = new Map([
      [WINMESSAGE.FIFTH, [WINMONEY.FIFTH, 0]],
      [WINMESSAGE.FOURTH, [WINMONEY.FOURTH, 0]],
      [WINMESSAGE.THIRD, [WINMONEY.THIRD, 0]],
      [WINMESSAGE.SECOND, [WINMONEY.SECOND, 0]],
      [WINMESSAGE.FIRST, [WINMONEY.FIRST, 0]],
    ]);
    this.prizeMoney = 0;
  }

  issue() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      CONSTANT.LOTTO_RANGE_START,
      CONSTANT.LOTTO_RANGE_END,
      CONSTANT.LOTTO_LENGTH
    );
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const lotto = new Lotto(sortedNumbers);
    this.candidates.push(lotto);
  }

  validateCost(cost) {
    if (cost === "" || isNaN(cost)) throw new Error(ERROR_MESSAGE.LOTTO_COST.NAN);
    if (cost % CONSTANT.LOTTO_PRICE !== 0)
      throw new Error(ERROR_MESSAGE.LOTTO_COST.NOT_THOUSAND);
    if (cost <= 0) throw new Error(ERROR_MESSAGE.LOTTO_COST.NEGATIVE);
  }

  buy() {
    MissionUtils.Console.readLine(MESSAGE.GET_USER_COST, (userInput) => {
      this.validateCost(Number(userInput));
      this.cost = Number(userInput);
      const lottoMaxCount = this.cost / CONSTANT.LOTTO_PRICE;
      MissionUtils.Console.print(`${lottoMaxCount}개를 구매했습니다.`);
      for (let lottoCount = 0; lottoCount < lottoMaxCount; lottoCount++) {
        this.issue();
      }
      return this.printCandidates();
    });
  }

  printCandidates() {
    this.candidates.forEach((candidate) => {
      MissionUtils.Console.print(parsePrintNumber(candidate.numbers));
    });
    this.setAnswer();
  }

  setAnswer() {
    MissionUtils.Console.readLine(MESSAGE.GET_LOTTO_ANSWER, (userInput) => {
      this.answer = new LottoAnswer(parseAnswerInput(userInput));
      return this.setBonus();
    });
  }

  setBonus() {
    MissionUtils.Console.readLine(MESSAGE.GET_LOTTO_BONUS, (userInput) => {
      this.answer.bonus = parseBonusInput(userInput);
      return this.setResult();
    });
  }

  setResult() {
    this.candidates.forEach((candidate) => {
      const candidateResult = this.answer.compare(candidate.numbers);
      if (candidateResult) {
        this.result.set(candidateResult, [
          this.result.get(candidateResult)[0],
          this.result.get(candidateResult)[1] + 1,
        ]);
      }
    });
    this.setPrizeMoney();
  }

  setPrizeMoney() {
    let prize = 0;
    this.result.forEach(([winMoney, winCount]) => {
      prize += winMoney * winCount;
    });
    this.prizeMoney = prize;
    this.printReport();
  }

  getEarningRate() {
    return getPercentage(this.prizeMoney, this.cost);
  }

  printReport() {
    MissionUtils.Console.print(MESSAGE.REPORT_TITLE);
    this.result.forEach(([winMoney, winCount], winMessage) => {
      MissionUtils.Console.print(
        `${winMessage} (${winMoney.toLocaleString("kr")}원) - ${winCount}개`
      );
    });
    MissionUtils.Console.print(`총 수익률은 ${this.getEarningRate()}%입니다.`);
    this.exit();
  }

  exit() {
    MissionUtils.Console.close();
  }
}

module.exports = Store;
