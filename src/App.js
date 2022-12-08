const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoMachine = require("./LottoMachine");
const Validation = require("./Validation");

class App {
  constructor() {
    this.lottomachine = new LottoMachine();
    this.purchaseAmount;
    this.lottoQuantity;
    this.lottoList;
    this.winningList;
    this.bonusNumber;
    this.result = [0, 0, 0, 0, 0];
    this.rateOfReturn;
  }
  play() {
    this.getMoney();
  }

  getMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.purchaseAmount = parseInt(money);
      const numberPattern = /^[0-9]*$/
      if (numberPattern.test(this.purchaseAmount)) {
        throw new Error("[ERROR] 숫자만 입력하세요.");
      }
      if (this.purchaseAmount < 1000) {
        throw new Error("[ERROR] 1000원 이상 금액을 입력하세요.");
      }
      if (this.purchaseAmount % 1000 !== 0) {
        throw new Error("[ERROR] 1000원 단위로 입력하세요.");
      }

      this.lottoQuantity = this.lottomachine.lottoQuantity(this.purchaseAmount);
      this.printQuantity();
    });
  }

  printQuantity() {
    MissionUtils.Console.print(`\n${this.lottoQuantity}개를 구매했습니다.`);
    this.printLottoList();
  }

  printLottoList() {
    this.lottoList = this.lottomachine.makeLottoNumbers();
    this.lottoList.forEach((ele) => MissionUtils.Console.print(ele));
    this.getWinningNumbers();
  }

  getWinningNumbers() {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해 주세요.\n",
      (number) => {
        const winningNumber = number
          .split(",")
          .map((v) => parseInt(v))
          .sort((a, b) => a - b);
        const vaildWinningNum = new Lotto(winningNumber);
        vaildWinningNum.validate(winningNumber);

        this.winningList = winningNumber;
        this.getBonusNumber();
      }
    );
  }

  getBonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (number) => {
        const bonusNum = parseInt(number);
        const validation = new Validation(bonusNum);
        validation.isValidBounsNumber(bonusNum);
        this.bonusNumber = bonusNum;
        if (this.winningList.includes(this.bonusNumber)) {
          throw new Error(
            "[ERROR] 보너스번호는 당첨번호와 중복되지 않게 입력하세요."
          );
        }
        this.printResult();
      }
    );
  }

  printResult() {
    this.getMatchCount();
    this.getRateOfReturn();
    MissionUtils.Console.print(
      ` \n당첨 통계\n` +
        `---\n` +
        `3개 일치 (5,000원) - ${this.result[4]}개\n` +
        `4개 일치 (50,000원) - ${this.result[3]}개\n` +
        `5개 일치 (1,500,000원) -${this.result[2]}개\n` +
        `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result[1]}개\n` +
        `6개 일치 (2,000,000,000원) - ${this.result[0]}개\n` +
        `총 수익률은 ${this.rateOfReturn}%입니다.`
    );
    MissionUtils.Console.close();
  }

  getMatchCount() {
    this.lottoList.forEach((lottoNums) => {
      let isMatch = lottoNums.filter((nums) => this.winningList.includes(nums));

      if (isMatch.length === 6) this.result[0] += 1;
      if (isMatch.length === 5) this.getMatchBounsNum(lottoNums);
      if (isMatch.length === 4) this.result[3] += 1;
      if (isMatch.length === 3) this.result[4] += 1;
    });
  }
  getMatchBounsNum(lottoNums) {
    if (lottoNums.includes(this.bonusNumber)) this.result[1] += 1;
    else this.result[2] += 1;
  }

  getRateOfReturn() {
    const prizeMoney = [2000000000, 30000000, 1500000, 50000, 5000];
    const returnList = prizeMoney.map(
      (prize, index) => prize * this.result[index]
    );
    const rateOfReturn = (
      returnList.reduce((acc, cur) => acc + cur) / this.purchaseAmount
      * 100).toFixed(1) ;
    this.rateOfReturn = rateOfReturn;
  }
}
const app = new App();
app.play()
module.exports = App;
