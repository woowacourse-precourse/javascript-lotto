const MissionUtils = require("@woowacourse/mission-utils");
const {
  GUIDE_MESSAGE,
  LOTTO_PRICE,
  LOTTO_SIZE,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
} = require("./Constants");
const Lotto = require("./Lotto");
const Validation = require("./validation");

class App {
  winnerNumber;
  bonusNumber;
  lotto;
  play() {
    this.inputPurchaseAmount();
    this.inputWinnerNumber();
    this.inputBonusNumber();
  }
  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      GUIDE_MESSAGE.PURCHASEAMOUNT_INPUT,
      (purchaseAmount) => {
        Validation.checkPurchaseAmount(purchaseAmount);
        console.log(purchaseAmount);
        this.lottoBuying(purchaseAmount);
      }
    );
  }
  lottoBuying(purchaseAmount) {
    const lottoCount = this.getLottoCount(purchaseAmount);
    this.getTotalLottoNumber(lottoCount);
  }
  getLottoCount(purchaseAmount) {
    return parseInt(purchaseAmount, 10) / LOTTO_PRICE;
  }
  inputWinnerNumber() {
    MissionUtils.Console.readLine(
      GUIDE_MESSAGE.WINNERNUMBER_INPUT,
      (winnerNumberElement) => {
        const winnerNumberArr = winnerNumberElement.split(",");
        Validation.checkInputWinnerNumber(winnerNumberArr);
        this.winnerNumber = winnerNumberElement;
      }
    );
  }
  inputBonusNumber() {
    MissionUtils.Console.readLine(
      GUIDE_MESSAGE.BONUSNUMBER_INPUT,
      (bonusNumberElement) => {
        const bonusNumberArr = bonusNumberElement.split("");
        Validation.checkBonusNumber(bonusNumberArr, this.winnerNumber);
        this.bonusNumber = bonusNumberElement;
      }
    );
  }
  randomLottoNumberPick() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_MIN_NUMBER,
      LOTTO_MAX_NUMBER,
      LOTTO_SIZE
    );
  }
  getTotalLottoNumber(lottoCount) {
    const lottoNumber = this.randomLottoNumberPick();
    this.lotto = Array.from(
      { length: lottoCount },
      () => new Lotto(lottoNumber)
    );
  }
}

module.exports = App;
