const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
const lotto = require("./Lotto");

class App {
  randomSixNumberArr = [];
  winningNumberArr = [];
  matchNumberArr = [];

  play() {
    this.inputOfLottoPurchaseAmount();
    this.conditionOfWinning();
  }

  inputOfLottoPurchaseAmount() {
    let countLotto;
    Console.readLine("구입금액을 입력해 주세요.",(amountInput) => {
      amountInput = parseInt(amountInput);
      this.validationInputLottoPurchaseAmount(amountInput);
      countLotto = amountInput % 1000;
      this.printPurchaseCountMessage(countLotto);
      this.createRandomSixNumber(countLotto);
    });
  }

  validationInputLottoPurchaseAmount(amountInput) {
    const COUNT_LOTTO = amountInput % 1000
    if (amountInput < 0) {
      throw new Error(`[ERROR] 입력한 금액 ${amountInput}원은 음수가 될 수 없습니다.`);
    }

    if (amountInput < 1000) {
      throw new Error(`[ERROR] 입력한 금액 ${amountInput}원은 1,000원보다 작을 수 없습니다.`);
    }

    if (isNaN(amountInput)) {
      throw new Error(`[ERROR] 입력한 금액 ${amountInput}원은 숫자 이외의 값이 될 수 없습니다.`)
    }

    if (COUNT_LOTTO != 0) {
      throw new Error(`[ERROR] 입력한 금액 ${amountInput}원은 1,000원 단위로 나누어 떨어지지 않습니다.`)
    }
  }

  printPurchaseCountMessage(COUNT_LOTTO) {
    Console.print(`${COUNT_LOTTO}개를 구매했습니다.`);
  }

  createRandomSixNumber(COUNT_LOTTO) {
    for(let i=0; i<COUNT_LOTTO; i++) {
      randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6)
      this.randomSixNumberArr.push(randomNumber);
      this.printRandomSixNumber();
    }
  }

  printRandomSixNumber() {
    Console.print(this.randomSixNumberArr);
  }

  inputOfWinningNumber() {
    let winningNumbers;
    Console.readLine("당첨 번호를 입력해 주세요.", (winNumber) => {
      winningNumbers = winNumber.split(",").map(Number).sort((idx1,idx2) => idx1-idx2 );
    });
    lotto = new Lotto(winningNumbers);
    this.winningNumberArr.push(winningNumbers);
  }

  inputOfBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.", (bonusNumber) => {
      bonusNumber = parseInt(bonusNumber);
    })
    lotto.validationInputBounusNumber(bonusNumber);
    this.winningNumberArr.push([bonusNumber]);
  }

  conditionOfWinning() {
    this.countProcess();
  }

  countProcess() {
    this.countOfThreeMatch;
    this.countOfFourMatch;
    this.countOfFiveMatch;
    this.countOfFiveAndBounsMatch;
    this.countOfSixMatch;
  }

  countOfThreeMatch() {
    let countThreeMatch = 0;
    for(let i=0; i<6; i++) {
      this.matchNumberArr.push(this.winningNumberArr.includes(this.randomSixNumberArr[i]));
      if(this.matchNumberArr.length === 3) {
        countThreeMatch++;
      }
    }
  }

  countOfFourMatch() {
    let countFourMatch = 0;
    for(let i=0; i<6; i++) {
      this.matchNumberArr.push(this.winningNumberArr.includes(this.randomSixNumberArr[i]));
      if(this.matchNumberArr.length === 4) {
        countFourMatch++;
      }
    }
  }

  countOfFiveMatch() {
    let countFiveMatch = 0;
    for(let i=0; i<6; i++) {
      this.matchNumberArr.push(this.winningNumberArr.includes(this.randomSixNumberArr[i]));
      if(this.matchNumberArr.length === 5) {
        countFiveMatch++;
      }
    }
  }

  countOfFiveAndBounsMatch() {
    let countFiveAndBounsMatch = 0;
    for(let i=0; i<6; i++) {
      this.matchNumberArr.push(this.winningNumberArr.includes(this.randomSixNumberArr[i]));
      if((this.matchNumberArr.length === 5) && (this.randomSixNumberArr.includes(winningNumberArr[6]))) {
        countFiveAndBounsMatch++;
      }
    }
  }

  countOfSixMatch() {
    let countSixMatch = 0;
    for(let i=0; i<6; i++) {
      this.matchNumberArr.push(this.winningNumberArr.includes(this.randomSixNumberArr[i]));
      if(this.matchNumberArr.length === 6) {
        countSixMatch++;
      }
    }
  }

  printCountAll() {
    this.printCountOfThreeMatch();
    this.printCountOfFourMatch();
    this.printCountOfFiveMatch();
    this.printCountOfFiveAndBounsMatch();
    this.printCountOfSixMatch();
  }

  printCountOfThreeMatch() {
    Console.print(`3개 일치 (5,000원) - ${this.countThreeMatch}개`);
  }

  printCountOfFourMatch() {
    Console.print(`4개 일치 (50,000원) - ${this.countFourMatch}개`);
  }

  printCountOfFiveMatch() {
    Console.print(`5개 일치 (1,500,000원) - ${this.countFiveMatch}개`);
  }

  printCountOfFiveAndBounsMatch() {
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.countFiveAndBounsMatch}개`);
  }

  printCountOfSixMatch() {
    Console.print(`6개 일치 (2,000,000,000원) - ${this.countSixMatch}개`);
  }

  printResult() {
    Console.print("당첨 통계");
    Console.print("---");
    this.printCountAll();
  }
}

const app = new App();
app.play();

module.exports = App;
