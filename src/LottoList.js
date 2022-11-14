const { Console, Random } = require("@woowacourse/mission-utils");
const checkValidation = require("./errors/checkValidation");
const Lotto = require("./Lotto");

class LottoList {
  constructor() {
    this.lottoCount = null;
    this.lottoList = [];
    this.winningNumberList = null;
  }
  setLottoCount(money) {
    this.validateMoney(money);
    this.lottoCount = money / 1000;
    this.setLotto(this.lottoCount);
    this.bonusNumber = null;
  }
  throwError(money) {
    if (money < 1000) {
      throw new Error("[Error] 최소 구입 금액은 1000원입니다.");
    }
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 로또를 구입해야 합니다.");
    }
    if (isNaN(money)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }
  }

  printLottoCount() {
    Console.print(`\n${this.lottoCount}개를 구매했습니다.`);
  }
  setLotto(lottoCount) {
    for (let num = 0; num < lottoCount; num++) {
      const newLotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      this.lottoList.push(newLotto);
    }
  }
  printLottoList() {
    this.lottoList.forEach((lotto) => {
      lotto.printNumbers();
    });
  }
  setWinningNumbers(numbers) {
    numbers = numbers.split(",").map((item) => Number(item));
    this.checkWinningNumbers(numbers);

    this.winningNumberList = numbers;
  }
  checkWinningNumbers(numbers) {
    checkValidation.checkLottoList(numbers);
  }
  setBonusNumber(number) {
    number = Number(number);
    this.checkBonusNumber(number);

    this.bonusNumber = number;
  }
  checkBonusNumber(number) {
    checkValidation.checkBonusNumber(number, this.winningNumberList);
  }
}

module.exports = LottoList;
