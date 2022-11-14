const Lotto = require("./Lotto.js");
const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  unit;
  lottos;
  winningNumbers;
  bonusNumber;

  constructor() {
    this.money = null;
    this.unit = 1000;
    this.lottos = [];
    this.winningNumbers = null;
    this.bonusNumber = null;
    this.ranks = Array.from({ length: 8 }, (_) => 0);
  }
  play() {
    this.buyLottos();
  }

  validateMoney(money) {
    let parsedMoney = money;
    if (typeof money === "string") {
      parsedMoney = parseInt(money, 10);
    }
    for (let i = 0; i < money.length; i++) {
      if (isNaN(money[i])) throw new Error("[ERROR] 숫자가 아닙니다.");
    }
    const remains = parsedMoney % this.unit;
    if (remains !== 0) {
      throw new Error(`[ERROR] 1000원 단위로 금액을 입력해주세요.`);
    }
    return parsedMoney;
  }
  createLottos(money) {
    const lottoNum = money / this.unit;

    for (let idx = 0; idx < lottoNum; idx++) {
      const newLottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const newLotto = new Lotto(newLottoNumbers);
      this.lottos.push(newLotto);
    }

    const lottosPrint = this.lottos
      .map((lotto) => `[${lotto.numbers.join(", ")}]`)
      .join("\n");

    Console.print(`
    ${lottoNum}개를 구매했습니다.
    ${lottosPrint}`);
  }
  buyLottos() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      const validatedMoney = this.validateMoney(money);
      this.money = validatedMoney;
      this.createLottos(this.money);
      this.askWinningNumbers();
    });
  }

  isInRange(num) {
    let parsedNum = num;
    if (typeof num === "string") {
      parsedNum = parseInt(num, 10);
    }
    if (parsedNum < 1 || parsedNum > 45) return false;
    return true;
  }
  isValidLottoNumbers(numbers) {
    for (let number of numbers) {
      if (isNaN(number)) return false;
      if (!this.isInRange(number)) return false;
    }
    return true;
  }
  isReapted(arr) {
    const lottoVisited = Array.from({ length: 46 }, (_) => false);

    for (let idx = 0; idx < arr.length; idx++) {
      const elem = arr[idx];
      if (lottoVisited[elem]) return true;
      lottoVisited[elem] = true;
    }
    return false;
  }
  validateWinningNumbers(winningNumbers) {
    const split = winningNumbers
      .split(",")
      .map((number) => number.trim())
      .filter((v) => v !== "");

    if (split.length !== 6) {
      throw new Error(`[ERROR] 당첨 로또 번호의 길이는 6개입니다.`);
    }
    if (!this.isValidLottoNumbers(split)) {
      throw new Error(`[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`);
    }
    if (this.isReapted(split)) {
      throw new Error(`[ERROR] 동일한 숫자가 포함되어 있습니다.`);
    }
    return split.map((v) => parseInt(v, 10));
  }
  askWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (winningNumbers) => {
      const validatedNumbers = this.validateWinningNumbers(winningNumbers);
      this.winningNumbers = validatedNumbers;
      this.askBonusNumber();
    });
  }

  validateBonusNumber(bonusNumber, winningNumbers) {
    if (isNaN(bonusNumber)) {
      throw new Error(`[ERROR] 숫자를 입력해 주세요.`);
    }
    if (!this.isInRange(bonusNumber)) {
      throw new Error(`[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`);
    }
    if (this.isReapted([...winningNumbers, bonusNumber])) {
      throw new Error(`[ERROR] 동일한 숫자가 포함되어 있습니다.`);
    }

    return parseInt(bonusNumber, 10);
  }
  askBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      const validatedNum = this.validateBonusNumber(
        bonusNumber,
        this.winningNumbers
      );
      this.bonusNumber = validatedNum;
      this.drawLots();
    });
  }

  compareElem(pivot, arr) {
    for (let idx = 0; idx < arr.length; idx++) {
      const cur = arr[idx];
      if (pivot === cur) {
        return 1;
      }
    }
    return 0;
  }
  compareArr(pivotArr, couterArr) {
    let matched = 0;
    for (let idx = 0; idx < pivotArr.length; idx++) {
      const pivot = pivotArr[idx];
      matched += this.compareElem(pivot, couterArr);
    }
    return matched;
  }
  caculateWhenFiveMatches(lottoNumbers) {
    if (this.compareArr(lottoNumbers, [this.bonusNumber]) === 1) {
      this.ranks[2] += 1;
      return;
    }
    this.ranks[3] += 1;
  }
  assignRanks(matched, lottoNumbers) {
    if (matched === 6) {
      this.ranks[1] += 1;
      return;
    }
    if (matched === 5) {
      this.caculateWhenFiveMatches(lottoNumbers);
      return;
    }

    this.ranks[8 - matched] += 1;
  }
  printRanks() {
    const ranksString = `
    당첨 통계
    ---
    3개 일치 (5,000원) - ${this.ranks[5]}개
    4개 일치 (50,000원) - ${this.ranks[4]}개
    5개 일치 (1,500,000원) - ${this.ranks[3]}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.ranks[2]}개
    6개 일치 (2,000,000,000원) - ${this.ranks[1]}개
    `.trim();
    Console.print(ranksString);
  }
  getSum(ranks) {
    const reward = [0, 2000000000, 30000000, 1500000, 50000, 5000];
    let sum = 0;
    for (let idx = 0; idx < reward.length; idx++) {
      sum += ranks[idx] * reward[idx];
    }
    return sum;
  }
  getRateOfReturn(inputMoney, sum) {
    const rounded = Math.round((sum / inputMoney) * 1000);
    const result = (rounded / 10).toFixed(1);
    return result;
  }
  printRateOfReturn() {
    Console.print(
      `총 수익률은 ${this.getRateOfReturn(
        this.money,
        this.getSum(this.ranks)
      )}%입니다.`
    );
  }
  drawLots() {
    this.lottos.forEach((lotto) => {
      const lottoNumbers = lotto.numbers;
      let matched = this.compareArr(lottoNumbers, this.winningNumbers);
      this.assignRanks(matched, lottoNumbers);
    });
    this.printRanks();
    this.printRateOfReturn();
    Console.close();
  }
}

module.exports = App;
