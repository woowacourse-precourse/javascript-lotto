const MissionUtils = require("@woowacourse/mission-utils");
const LottoUtils = require("src/Lotto.js");

class App {
  #money;

  constructor() {
    this.amountOfLotto = 0;
    this.userLotto = [];
    this.winLotto = [];
    this.lotto;
    this.bonusNumber = 0;
  }

  play() {
    this.getMoney();
  }

  getMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (userInput) => {
      this.validateMoney(userInput);
      this.#money = Number(userInput);
      this.getAmountOfLotto();
    });
  }

  getAmountOfLotto() {
    this.amountOfLotto = this.#money / 1000;
    this.buyLotto();
  }

  buyLotto() {
    for(let i = 0; i < this.amountOfLotto; i++){
      this.userLotto.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
      this.userLotto[i].sort(function compare(leftNum, rightNum){
        return leftNum - rightNum;
      });
    }
    this.printBoughtLotto();
  }

  printBoughtLotto() {
    MissionUtils.Console.print(`\n${this.amountOfLotto}개를 구매했습니다.`);
    for(let i = 0; i < this.userLotto.length; i++) {
      MissionUtils.Console.print(this.userLotto[i]);
    }
    MissionUtils.Console.print("\n");
  }

  getWinLotto() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (userInput) => {
      validateWinLottoDecimal(userInput);
      convertWinLottoStrToInt(userInput);
    });
  }

  convertWinLottoStrToInt(numbers) {
    for(let i = 0; i < numbers.length; i++) {
      this.winLotto.push(Number(numbers[i]));
    }
    lotto = new LottoUtils(winLotto);
    getBonusNumber();
  }

  getBonusNumber() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (userInput) => {
      lotto.validateBonusNumber(userInput);
    });
  }

  validateWinLottoDecimal(numbers) {
    for(let i = 0; i < numbers.length; i++) {
      if(Number(numbers)!== NaN && numbers[i].length !== 1) {
        throw new error("숫자는 십진수여야 합니다.");
      }
    }
  }

  validateMoney(money) {
    if(isNaN(money) || money === "" || money === " "){
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if(Number(money) % 1 !== 0){
      throw new Error("[ERROR] 실수가 아닌 금액을 입력해주세요.")
    }
    if(Number(money) < 1000){
      throw new Error("[ERROR] 천원 이상의 금액을 입력해주세요.");
    }
    if(Number(money) % 1000 !== 0){
      throw new Error("[ERROR] 천원 단위의 금액으로 입력해주세요.");
    }
  }
}

const app = new App();
app.play();

module.exports = App;
