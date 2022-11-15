const {
  getPurchaseAmount,
  getWinningNumber,
  getBonusNumber,
} = require("./UserInput.js");
const {
  printUserPurchaseAmount,
  printLottoResult,
  printProfit,
} = require("./Output.js");
const {
  validateSixLength,
  validatePurchaseAmount,
  validateNumber,
  validateBonusDuplicate,
  validateBlank,
} = require("./Exception.js");
const { Print } = require("./lib/MissionUtils.js");
const { createLotto } = require("./Random.js");
const { RESULT_WINNINGS } = require("./ResultMessage.js");
class App {
  $purchaseAmount;
  $lottos;
  $winNum;
  $bonus;
  $lottoResult = [];
  async play() {
    await this.savePurchaseAmount();
    this.$lottos = createLotto(this.$purchaseAmount);
    await this.saveWinningNumber();
    await this.saveBonusNumber();
    this.saveLottoResult();
  }
  async savePurchaseAmount() {
    this.$purchaseAmount = await getPurchaseAmount().then((data) =>
      validatePurchaseAmount(Number(data))
    );
    printUserPurchaseAmount(this.$purchaseAmount);
  }
  async saveWinningNumber() {
    this.$winNum = await getWinningNumber().then((data) => {
      let splitedData = data.split(",");
      validateSixLength(splitedData);
      validateNumber(splitedData);
      validateBlank(splitedData);
      return splitedData.map((v) => +v);
    });
  } //나눌 때 예외처리, 숫자,6개인지
  async saveBonusNumber() {
    this.$bonus = await getBonusNumber().then((data) => {
      validateNumber(data.split(""));
      validateBonusDuplicate(+data, this.$winNum);
      return +data;
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
