const Lotto = require("./Lotto.js");
const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  unit;
  lottos;
  winningNumber;
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
  askWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (winningNumbers) => {
      const splitWinningNumbers = winningNumbers
        .split(",")
        .map((number) => parseInt(number.trim(), 10));
      this.winningNumbers = splitWinningNumbers;
    });
  }
  askBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.", (bonusNumber) => {
      this.bonusNumber = bonusNumber;
    });
  }
  validateWinningNumbers(winningNumbers) {
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 당첨 로또 번호의 길이가 6개 이상입니다.");
    }
  }
  validateBonusNumber(bonusNumber) {}
  play() {}
}

module.exports = App;
