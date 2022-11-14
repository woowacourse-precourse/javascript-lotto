const { Random, Console } = require("@woowacourse/mission-utils");
const { MESSAGES, REWARDS, REWARDS_TABLE } = require("./constraints");
const Lotto = require("./Lotto");
const {
  validatePurchaseAmount,
  validateWiningNumber,
  validateBonusNumber,
} = require("./utils/validator");

class App {
  constructor() {
    this.purchaseAmount = 0; // 구입 금액
    this.purchaseCount = 0; // 구매한 로또 개수
    this.lottoList = []; // 구매한 로또 목록

    this.winningNumbers = []; // 당첨 번호
    this.bonusNumber = 0; // 보너스 번호

    this.results = new Map(REWARDS_TABLE); // 각 로또의 결과
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
    this.lottoList.map((lotto) => lotto.printNumbers());
  }

  setWinningNumbers() {
    Console.readLine("당첨 번호를 입력해주세요.", (numbers) => {
      this.winningNumbers = [...validateWiningNumber(numbers)];

      return this.setBonusNumber();
    });
  }

  setBonusNumber() {
    Console.readLine("보너스 번호를 입력해주세요.", (number) => {
      this.bonusNumber = validateBonusNumber(number, this.winningNumbers);
      Console.close();

      return this.getResults();
    });
  }

  getResults() {
    this.lottoList.map((lotto) => {
      const result = lotto.compareNumbers(
        this.winningNumbers,
        this.bonusNumber
      );

      if (result !== undefined) {
        this.results.set(result, this.results.get(result) + 1);
      }
    });

    return this.getWinningPrize();
  }

  getWinningPrize() {
    this.results.forEach((value, key) => {
      this.rewards += REWARDS[key] * value;
    });

    return this.printStatistics();
  }

  printStatistics() {
    Console.print(MESSAGES.STATISTICS.INIT);
    this.results.forEach((value, key) => {
      Console.print(`${MESSAGES.STATISTICS[key]}${value}개`);
    });

    return this.getYield();
  }

  getYield() {
    const total_yield = (this.rewards / this.purchaseAmount) * 100;
    const formatted_total_yield = this.formatYieldForPrint(total_yield);
    Console.print(`총 수익률은 ${formatted_total_yield}%입니다.`);
  }

  formatYieldForPrint(total_yield) {
    const integerPart = parseInt(total_yield).toLocaleString("ko-KR");
    const fractionalPart = (total_yield - parseInt(total_yield))
      .toFixed(1)
      .slice(1);
    return integerPart + fractionalPart;
  }
}

module.exports = App;
