const { Random, Console } = require("@woowacourse/mission-utils");
const {
  validatePurchaseAmount,
  validateWiningNumber,
  validateBonusNumber,
} = require("./utils/validator");

const Lotto = require("./Lotto");
const { MESSAGES, REWARDS } = require("./constraints");
class App {
  constructor() {
    this.purchaseAmount = 0; // 구입 금액
    this.purchaseCount = 0; // 구매한 로또 개수
    this.lottoList = []; // 구매한 로또 목록
    this.results = new Map([
      ["FIFTH", 0],
      ["FOURTH", 0],
      ["THIRD", 0],
      ["SECOND", 0],
      ["FIRST", 0],
    ]); // 각 로또의 결과
    this.winningNumbers = []; // 당첨 번호
    this.bonusNumber = 0; // 보너스 번호
    this.rewards = 0; // 당첨금 합계
  }

  play() {
    this.setPurchaseAmount();
  }

  setPurchaseAmount() {
    Console.readLine("구입 금액을 입력해주세요.", (money) => {
      if (validatePurchaseAmount(money)) {
        // 구입 금액 유효성 검증을 통과한다면, 구입 금액 저장 후 출력
        this.purchaseAmount = +money;
        this.purchaseCount = +money / 1000;
        this.setLottoNumbers().printLottoList();
        this.setWinningNumbers();
      }
    });
  }

  setWinningNumbers() {
    Console.readLine("당첨 번호를 입력해주세요.", (numbers) => {
      this.winningNumbers = [...validateWiningNumber(numbers)];
      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    Console.readLine("보너스 번호를 입력해주세요.", (number) => {
      this.bonusNumber = validateBonusNumber(number, this.winningNumbers);
      Console.close();
      this.getResult();
    });
  }

  setLottoNumbers() {
    for (let i = 0; i < this.purchaseCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      this.lottoList.push(lotto);
    }
    return this;
  }

  printLottoList() {
    Console.print(`${this.purchaseCount}개를 구매했습니다.`);
    this.lottoList.map((lotto) =>
      Console.print(`[${lotto.getNumbers().join(", ")}]`)
    );
  }

  getResult() {
    this.lottoList.map((lotto) => {
      const result = lotto.compareNumbers(
        this.winningNumbers,
        this.bonusNumber
      );
      if (result !== undefined) {
        this.results.set(result, this.results.get(result) + 1);
      }
    });

    this.getRewards();
  }

  getRewards() {
    this.results.forEach((value, key) => {
      this.rewards += REWARDS[key] * value;
    });

    this.printStatistics();
  }

  getYield() {
    const total_yield = ((this.rewards / this.purchaseAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${total_yield}%입니다.`);
  }

  printStatistics() {
    Console.print(MESSAGES.STATISTICS.INIT);
    this.results.forEach((value, key) => {
      Console.print(`${MESSAGES.STATISTICS[key]}${value}개`);
    });
    this.getYield();
  }
}

// const app = new App();
// app.play();

module.exports = App;
