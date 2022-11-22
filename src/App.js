const { Console } = require("@woowacourse/mission-utils");
const {
  printUserPurchaseAmount,
  printLottoResult,
  printProfit,
} = require("./LottoOutput.js");
const {
  validateSixLength,
  validatePurchaseAmount,
  validateNumberArray,
  validateBonusDuplicate,
  validateBlank,
} = require("./LottoValidate.js");
const { createLotto } = require("./LottoUtils.js");
const { RESULT_WINNINGS } = require("./ResultMessage.js");
class App {
  $purchaseAmount;
  $lottos;
  $winNum;
  $bonus;
  $lottoResult = [];
  play() {
    this.savePurchaseAmount();
  }
  savePurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (ans) => {
      if (isNaN(ans)) throw new Error("[ERROR] 숫자 입력");
      this.$purchaseAmount = validatePurchaseAmount(ans);
      printUserPurchaseAmount(this.$purchaseAmount);
      this.$lottos = createLotto(this.$purchaseAmount);
      this.saveWinningNumber();
    });
  }
  saveWinningNumber() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (ans) => {
      let splitedData = ans.split(",");
      validateSixLength(splitedData);
      validateNumberArray(splitedData);
      validateBlank(splitedData);
      this.$winNum = splitedData.map((v) => +v);
      this.saveBonusNumber();
    });
  } //나눌 때 예외처리, 숫자,6개인지
  saveBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (ans) => {
      validateNumberArray(ans.split(""));
      validateBonusDuplicate(+ans, this.$winNum);
      this.$bonus = +ans;
      this.saveLottoResult();
    });
  }
  saveLottoResult() {
    this.$lottos.forEach((el, i) => {
      this.$lottoResult.push(el.checkCorrespond(this.$winNum, this.$bonus));
    });
    let sortedResult = this.sortResult(this.$lottoResult);
    printLottoResult(sortedResult);
    this.calculateProfit(sortedResult);
  }
  sortResult(lottoResult) {
    let result = [];
    for (let i = 5; i >= 1; i--) {
      result.push(lottoResult.filter((el) => el === i).length);
    }
    return result;
  }
  calculateProfit(sorted) {
    let profit = 0;
    sorted.forEach((el, i) => (profit += RESULT_WINNINGS[i] * el));
    printProfit(profit, this.$purchaseAmount * 1000);
  }
}

let app = new App();
app.play();

module.exports = App;
