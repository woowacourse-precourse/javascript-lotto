const Lotto = require("./Lotto.js");
const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  unit;
  lottos;
  winningNumbers;
  bonusNumber;

  constructor() {
    this.unit = 1000;
    this.lottos = [];
    this.winningNumbers = null;
    this.bonusNumber = null;
  }
  createLottos(money) {
    const lottoNum = money / this.unit;

    for (let idx = 0; idx < lottoNum; idx++) {
      const newLottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const newLotto = new Lotto(newLottoNumbers);
      this.lottos = newLotto;
    }

    Console.print(`${lottoNum}개를 구매했습니다.\n`);
    Console.print(`${this.lottos.join("\n")}`);
  }

  validateMoney(money) {
    const remains = money % this.unit;
    if (remains !== 0) {
      throw new Error(`[ERROR] 1000원 단위로 금액을 입력해주세요.`);
    }
  }
  buyLottos() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.validateMoney(money);
      this.createLottos(money);
    });
  }

  isReapted(arr) {
    const lottoVisited = Array.from({ length: 46 }, (_) => false);
    arr.forEach((num) => {
      if (lottoVisited[num]) return true;
      lottoVisited[num] = true;
    });
    return false;
  }
  isInRange(num) {
    let parsedNum = num;
    if (typeof num === "string") {
      parsedNum = parseInt(num, 10);
    }
    if (num < 1 || num > 45) return false;
    return true;
  }
  isValidLottoNumbers(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number)) return false;
      if (this.isInRange(parsedNum)) return false;
    });
    return true;
  }
  validateWinningNumbers(winningNumbers) {
    const split = winningNumbers.split(",").map((number) => number.trim());

    if (split.length !== 6) {
      throw new Error(`[ERROR] 당첨 로또 번호의 길이는 6개입니다.`);
    }
    if (!this.isValidLottoNumber(split)) {
      throw new Error(`[Error] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`);
    }
    if (this.isReapted(split)) {
      throw new Error(`[Error] 동일한 숫자가 포함되어 있습니다.`);
    }
    return split;
  }
  askWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (winningNumbers) => {
      const validatedNumbers = this.validateWinningNumbers(winningNumbers);
      this.winningNumbers = validatedNumbers;
    });
  }

  validateBonusNumber(bonusNumber) {
    if (bonusNumber.length !== 1) {
      throw new Error(`[Error] 보너스 번호는 한 개입니다.`);
    }
    if (isNaN(bonusNumber)) {
      throw new Error(`[Error] 숫자를 입력해 주세요.`);
    }
    if (this.isInRange(parsedNum)) {
      throw new Error(`[Error] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`);
    }
    return parsedNum;
  }
  askBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.", (bonusNumber) => {
      const validatedNum = this.validateBonusNumber(bonusNumber);
      this.bonusNumber = validatedNum;
    });
  }

  play() {}
}

module.exports = App;
