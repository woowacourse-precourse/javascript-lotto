const { Random, Console } = require("@woowacourse/mission-utils");
const {
  validatePurchaseAmount,
  validateWiningNumber,
  validateBonusNumber,
} = require("./utils/validator");

const Lotto = require("./Lotto");
const { MESSAGES, REWORDS } = require("./constraints");
class App {
  constructor() {
    this.purchaseAmount = 0; // 구입 금액
    this.purchaseCount = 0; // 구매한 로또 개수
    this.lottoList = []; // 구매한 로또 목록
    this.results = []; // 각 로또의 결과
    this.winningNumbers = []; // 당첨 번호
    this.bonusNumber = 0; // 보너스 번호
    this.rewards = 0;
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
        Console.print(this.purchaseAmount);
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
    Console.print(this.purchaseCount + MESSAGES.BUY);
    this.lottoList.map((lotto) => console.log(lotto.getNumbers()));
  }

  getResult() {
    this.lottoList.map((lotto) =>
      this.results.push(
        lotto.compareNumbers(this.winningNumbers, this.bonusNumber)
      )
    );
    this.getRewards();
  }

  getRewards() {
    this.results.forEach((result) => {
      console.log(result);
      switch (result) {
        case "FIFTH":
          this.rewards += REWORDS.FIFTH;
          break;
        case "FOURTH":
          this.rewards += REWORDS.FOURTH;
          break;
        case "THIRD":
          this.rewards += REWORDS.THIRD;
          break;
        case "SECOND":
          this.rewards += REWORDS.SECOND;
          break;
        case "FIRST":
          this.rewards += REWORDS.FIRST;
          break;
        default:
          break;
      }
    });
  }
}

const app = new App();
app.play();

// module.exports = App;
