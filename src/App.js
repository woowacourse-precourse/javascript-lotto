const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LOTTOPRICE = 1000;
const LOTTONUMCOUNT = 6;
const PRIZEMONEY = [5000, 50000, 1500000, 30000000, 2000000000];

class App {
  play() {}
  #Lotto;
  #purchaseAmount; //입력금액
  #lottoNum; //구입한 로또 수
  #bonusNum;

  constructor() {
    this.issuedLottoNum = [];
    this.winningResult = [];
    this.winningCountResult = [];
    this.earningRate;
  }

  play() {
    this.inputAmount();
  }

  inputAmount() {
    Console.readLine("구입금액을 입력해 주세요.", (purchaseAmount) => {
      this.isValidInput(purchaseAmount);
      this.#purchaseAmount = purchaseAmount;
      this.issueLotto();
    });
  }

  isValidInput(purchaseAmount) {
    if (isNaN(purchaseAmount)) {
      throw new Error("[ERROR] 로또 구입금액은 숫자여야 합니다.");
    } else if (purchaseAmount % LOTTOPRICE !== 0) {
      throw new Error("[ERROR] 로또 구입금액은 1,000원 단위여야 합니다.");
    }
  }

  issueLotto() {
    this.#lottoNum = this.#purchaseAmount / LOTTOPRICE;
    for (var count = 0; count < this.#lottoNum; count++) {
      this.issuedLottoNum.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    this.printIssuedLotto();
  }

  printIssuedLotto() {
    Console.print(`${this.#lottoNum}개를 구매했습니다.`);
    for (var count = 0; count < this.#lottoNum; count++) {
      Console.print(this.issuedLottoNum[count]);
    }
    this.inputWinningNum();
  }

  inputWinningNum() {
    Console.readLine("당첨 번호를 입력해 주세요.", (winningNum) => {
      this.#Lotto = new Lotto(
        winningNum.split(",").map((number) => Number(number))
      );
      this.inputBonusNum();
    });
  }

  inputBonusNum() {
    Console.readLine("보너스 번호를 입력해 주세요.", (bonusNum) => {
      this.isValidBonusNum(bonusNum);
      this.#bonusNum = bonusNum;
      this.compareLottoNum();
    });
  }

  isValidBonusNum(bonusNum) {
    if (isNaN(bonusNum)) {
      throw new Error("[ERROR] 로또 구입금액은 숫자여야 합니다.");
    } else if (bonusNum < 1 || bonusNum > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  compareLottoNum() {
    for (var index = 0; index < this.#lottoNum; index++) {
      let count = 0;
      for (var winningIndex = 0; winningIndex < LOTTONUMCOUNT; winningIndex++) {
        this.issuedLottoNum[index].includes(
          this.#Lotto.getLottoNum()[winningIndex]
        )
          ? count++
          : "";
      }
      this.winningResult.push(count);
      if (count === 5) {
        this.checkBonus(index);
      }
    }
    this.countWinningResult();
  }

  checkBonus(index) {
    if (this.issuedLottoNum[index].includes(parseInt(this.#bonusNum))) {
      this.winningResult[index] = bonus;
    }
  }

  countWinningResult() {
    this.winningCountResult = [0, 0, 0, 0, 0];
    this.winningResult.forEach((element) => {
      switch (element) {
        case 3:
          this.winningCountResult[0]++;
          break;
        case 4:
          this.winningCountResult[1]++;
          break;
        case 5:
          this.winningCountResult[2]++;
          break;
        case "bonus":
          this.winningCountResult[3]++;
          break;
        case 6:
          this.winningCountResult[4]++;
        default:
          break;
      }
    });
    this.printResult();
  }

  printResult() {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${this.winningCountResult[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.winningCountResult[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.winningCountResult[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원)) - ${this.winningCountResult[3]}개`
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${this.winningCountResult[4]}개`
    );
    this.calcEaringsRate();
    Console.print(`총 수익률은 ${this.earningRate}%입니다.`);
    this.gameEnd();
  }

  calcEaringsRate() {
    let prizeMoneySum = 0;
    for (var index = 0; index < PRIZEMONEY.length; index++) {
      prizeMoneySum += PRIZEMONEY[index] * this.winningCountResult[index];
    }
    this.earningRate =
      Math.round((prizeMoneySum / this.#purchaseAmount) * 100 * 100) / 100;
  }

  gameEnd() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
