const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  randomSixNumberArr = [];

  play() {
    this.inputOfLottoPurchaseAmount();
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
    this.validationInputWinningNumber(winningNumbers);
  }
  
  validationInputWinningNumber(WINNINGNUMBERS) {
    if (WINNINGNUMBERS.length !== 6) {
      throw new Error("[ERROR] 당첨 번호 6개를 입력해주세요. 예시) 1,2,3,4,5,6");
    }
    if (isNaN(WINNINGNUMBERS)) {
      throw new Error("[ERROR] 당첨 번호는 숫자만 입력해주세요.");
    }

    if (WINNINGNUMBERS[i] < 1 || WINNINGNUMBERS[i] > 45) {
      throw new Error("[ERROR] 당첨 번호는 1 ~ 45 사이의 숫자를 입력해주세요.");
    }

    for(let i=0; i<WINNINGNUMBERS.length; i++) {
      if(WINNINGNUMBERS[i] === WINNINGNUMBERS[i+1]) {
        throw new Error("[ERROR] 중복되지 않는 값을 입력해주세요.");
      }
    }
  }

}

const app = new App();
app.play();

module.exports = App;
