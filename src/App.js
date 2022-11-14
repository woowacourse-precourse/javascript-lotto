const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { Console, Random } = MissionUtils;
const lotto = require("./Lotto");

class App {
  randomSixNumberArr = [];
  winningNumberArr = [];
  matchNumberArr = [];
  countMatchNumberArr = [];
  prizeMoneyArr = [5000, 50000, 1500000, 30000000, 2000000000];
  amountMoneyInputArr = [];

  play() {
    this.inputOfLottoPurchaseAmount();
    this.inputOfWinningNumber();
    this.inputOfBonusNumber();
    this.conditionOfWinning();
    this.printResult();
  }

  inputOfLottoPurchaseAmount() {
    let countLotto;
    Console.readLine("구입금액을 입력해 주세요.",(amountInput) => {
      amountInput = parseInt(amountInput);
      this.validationInputLottoPurchaseAmount(amountInput);
      this.amountMoneyInputArr.push(amountInput);
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
    // lotto = new Lotto(winningNumbers);
    this.winningNumberArr.push(winningNumbers);
  }

  inputOfBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.", (bonusNumber) => {
      bonusNumber = parseInt(bonusNumber);
      let lottos = new Lotto(bonusNumber);
      lottos.validationInputBounusNumber(bonusNumber);
      this.winningNumberArr.push([bonusNumber]);
    });
  }

  conditionOfWinning() {
    this.countProcess();
  }

  countProcess() {
    this.countOfThreeMatch();
    this.countOfFourMatch();
    this.countOfFiveMatch();
    this.countOfFiveAndBounsMatch();
    this.countOfSixMatch();
  }

  countOfThreeMatch() {
    let countThreeMatch = 0;
    for(let i=0; i<6; i++) {
      this.matchNumberArr.push(this.winningNumberArr.includes(this.randomSixNumberArr[i]));
      if(this.matchNumberArr.length === 3) {
        countThreeMatch++;
      }
    }
    this.countMatchNumberArr.push(countThreeMatch);
  }

  countOfFourMatch() {
    let countFourMatch = 0;
    for(let i=0; i<6; i++) {
      this.matchNumberArr.push(this.winningNumberArr.includes(this.randomSixNumberArr[i]));
      if(this.matchNumberArr.length === 4) {
        countFourMatch++;
      }
    }
    this.countMatchNumberArr.push(countFourMatch);
  }

  countOfFiveMatch() {
    let countFiveMatch = 0;
    for(let i=0; i<6; i++) {
      this.matchNumberArr.push(this.winningNumberArr.includes(this.randomSixNumberArr[i]));
      if(this.matchNumberArr.length === 5) {
        countFiveMatch++;
      }
    }
    this.countMatchNumberArr.push(countFiveMatch);
  }

  countOfFiveAndBounsMatch() {
    let countFiveAndBounsMatch = 0;
    for(let i=0; i<6; i++) {
      this.matchNumberArr.push(this.winningNumberArr.includes(this.randomSixNumberArr[i]));
      if((this.matchNumberArr.length === 5) && (this.randomSixNumberArr.includes(winningNumberArr[6]))) {
        countFiveAndBounsMatch++;
      }
    }
    this.countMatchNumberArr.push(countFiveAndBounsMatch);
  }

  countOfSixMatch() {
    let countSixMatch = 0;
    for(let i=0; i<6; i++) {
      this.matchNumberArr.push(this.winningNumberArr.includes(this.randomSixNumberArr[i]));
      if(this.matchNumberArr.length === 6) {
        countSixMatch++;
      }
    }
    this.countMatchNumberArr.push(countSixMatch);
  }

  printCountAll() {
    this.printCountOfThreeMatch();
    this.printCountOfFourMatch();
    this.printCountOfFiveMatch();
    this.printCountOfFiveAndBounsMatch();
    this.printCountOfSixMatch();
  }

  printCountOfThreeMatch() {
    Console.print(`3개 일치 (5,000원) - ${this.countMatchNumberArr[0]}개`);
  }

  printCountOfFourMatch() {
    Console.print(`4개 일치 (50,000원) - ${this.countMatchNumberArr[1]}개`);
  }

  printCountOfFiveMatch() {
    Console.print(`5개 일치 (1,500,000원) - ${this.countMatchNumberArr[2]}개`);
  }

  printCountOfFiveAndBounsMatch() {
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.countMatchNumberArr[3]}개`);
  }

  printCountOfSixMatch() {
    Console.print(`6개 일치 (2,000,000,000원) - ${this.countMatchNumberArr[4]}개`);
  }

  findingTheReturn() {
    let winningAmount = 0;
    let rateOfReturn;
    for(let i=0; i<this.prizeMoneyArr.length; i++) {
      winningAmount += parseInt(this.prizeMoneyArr[i] * this.countMatchNumberArr[i]); 
    }
    rateOfReturn = (winningAmount / this.amountMoneyInputArr[0] ) * 100;
    rateOfReturn = rateOfReturn.toFixed(1);
    Console.print(`총 수익율은 ${rateOfReturn}%입니다.`);
  }

  printResult() {
    Console.print("당첨 통계");
    Console.print("---");
    this.printCountAll();
    this.findingTheReturn();
  }
}

const app = new App();
app.play();

module.exports = App;
