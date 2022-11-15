const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { WINMESSAGE, LottoAnswer } = require("./LottoAnswer");
const { parseAnswerInput, parseBonusInput } = require("./Utils");

class Store {
  constructor() {
    this.price = 0;
    this.candidates = [];
    this.answer = null;
    this.result = new Map([
      [WINMESSAGE[3], [5000, 0]],
      [WINMESSAGE[4], [50000, 0]],
      [WINMESSAGE[5], [1500000, 0]],
      [WINMESSAGE["5+"], [30000000, 0]],
      [WINMESSAGE[6], [2000000000, 0]],
    ]);
    this.prizeMoney = 0;
  }

  issue() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => a - b);
    const lotto = new Lotto(numbers);
    this.candidates.push(lotto);
  }

  validatePrice(price) {
    if (price === "" || isNaN(price))
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
    if (price % 1000 !== 0)
      throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
    if (price <= 0) throw new Error("[ERROR] 양의 정수를 입력해 주세요.");
  }

  buy() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userInput) => {
      this.validatePrice(Number(userInput));
      this.price = Number(userInput);
      const lottoMaxCount = this.price / 1000;
      MissionUtils.Console.print(`${lottoMaxCount}개를 구매했습니다.`);
      for (let lottoCount = 0; lottoCount < lottoMaxCount; lottoCount++) {
        this.issue();
      }
      return this.printCandidates();
    });
  }

  printCandidates() {
    this.candidates.forEach((candidate) => {
      MissionUtils.Console.print(candidate.numbers);
    });
    this.setAnswer();
  }

  setAnswer() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (userInput) => {
      this.answer = new LottoAnswer(parseAnswerInput(userInput));
      return this.setBonus();
    });
  }

  setBonus() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.",
      (userInput) => {
        this.answer.bonus = parseBonusInput(userInput);
        return this.setResult();
      }
    );
  }

  setResult() {
    this.candidates.forEach((candidate) => {
      const candidateResult = this.answer.compare(candidate);
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
  }
}

module.exports = Store;
