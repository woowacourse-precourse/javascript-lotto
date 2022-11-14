const {
  getPurchaseAmount,
  getWinningNumber,
  getBonusNumber,
} = require("./UserInput.js");
const { printUserPurchaseAmount, printLottoResult } = require("./Output.js");
const { Print } = require("./lib/MissionUtils.js");
const { createLotto } = require("./Random.js");
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
    this.$purchaseAmount = await getPurchaseAmount().then(
      (data) => Number(data) / 1000
    );
    printUserPurchaseAmount(this.$purchaseAmount);
  }
  async saveWinningNumber() {
    this.$winNum = await getWinningNumber().then((data) =>
      data.split(",").map((v) => +v)
    );
  } //나눌 때 예외처리, 숫자,6개인지
  async saveBonusNumber() {
    this.$bonus = await getBonusNumber().then((data) => +data);
  }
  saveLottoResult() {
    this.$lottos.forEach((el, i) => {
      this.$lottoResult.push(el.checkCorrespond(this.$winNum, this.$bonus));
    });
    printLottoResult(this.sortResult(this.$lottoResult));
  }
  sortResult(lottoResult) {
    let result = [];
    for (let i = 5; i >= 1; i--) {
      result.push(lottoResult.filter((el) => el === i).length);
    }
    return result;
  }
}

let app = new App();
app.play();

module.exports = App;
