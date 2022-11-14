const { Random, Console } = require("@woowacourse/mission-utils");
const LOTTOPRICE = 1000;
const LOTTONUMCOUNT = 6;

class App {
  play() {}
  #purchaseAmount;
  #lottoNum;
  #winningNum = [];
  #bonusNum;

  constructor() {
    this.issuedLottoNum = [];
    this.winningResult = [];
    this.winningCountResult = [];
  }

  play() {
    this.inputAmount();
  }

  inputAmount() {
    Console.readLine("구입금액을 입력해 주세요. \n", (purchaseAmount) => {
      this.isValidInput(purchaseAmount);
      this.#purchaseAmount = purchaseAmount;
      this.issueLotto();
    });
  }

  isValidInput(purchaseAmount) {
    if (isNaN(purchaseAmount)) {
      throw "[EROR] 로또 구입금액은 숫자여야 합니다.";
    } else if (purchaseAmount % LOTTOPRICE !== 0) {
      throw "[EROR] 로또 구입금액은 1,000원 단위여야 합니다.";
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
    Console.print(`\n${this.#lottoNum}개를 구매했습니다.`);
    for (var count = 0; count < this.#lottoNum; count++) {
      Console.print(this.issuedLottoNum[count]);
    }
    this.inputWinningNum();
  }

  inputWinningNum() {
    Console.readLine("\n당첨 번호를 입력해 주세요. \n", (winningNum) => {
      const winningNumArr = winningNum.split(",");
      this.isValidWinningNum(winningNumArr);
      this.#winningNum = winningNumArr;
      this.inputBonusNum();
    });
  }

  isValidWinningNum(winningNumArr) {
    const winningNumSet = new Set(winningNumArr);
    if (winningNumArr.length !== 6) {
      throw "[EROR] 로또 번호는 6자리여야 합니다.";
    }
    winningNumArr.forEach((element) => {
      if (element < 1 || element > 45) {
        throw "[EROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.";
      }
    });
    if (winningNumArr.length !== winningNumSet.size) {
      throw "[EROR] 로또 번호는 중복되지 않아야 합니다.";
    }
  }

  inputBonusNum() {
    Console.readLine("\n보너스 번호를 입력해 주세요. \n", (bonusNum) => {
      this.isValidBonusNum(bonusNum);
      this.#bonusNum = bonusNum;
      this.compareLottoNum();
    });
  }

  isValidBonusNum(bonusNum) {
    if (isNaN(bonusNum)) {
      throw "[EROR] 로또 구입금액은 숫자여야 합니다.";
    } else if (bonusNum < 1 || bonusNum > 45) {
      throw "[EROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.";
    }
  }

  compareLottoNum() {
    for (var index = 0; index < this.#lottoNum; index++) {
      let count = 0;
      for (var winningIndex = 0; winningIndex < LOTTONUMCOUNT; winningIndex++) {
        this.issuedLottoNum[index].includes(
          parseInt(this.#winningNum[winningIndex])
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
    Console.print("\n당첨 통계\n---\n");
    Console.print(`3개 일치 (5,000원) - ${this.winningCountResult[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.winningCountResult[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.winningCountResult[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원)) - ${this.winningCountResult[3]}개`
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${this.winningCountResult[4]}개`
    );
  }
}

module.exports = App;
