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
        this.lottoBuying(purchaseAmount);
        this.printLottoNumber(this.lotto);
      }
    );
  }
  lottoBuying(purchaseAmount) {
    const lottoCount = this.getLottoCount(purchaseAmount);
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
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
        this.getResult();
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
    this.lotto = Array.from({ length: lottoCount }, () => {
      const lottoNumber = this.randomLottoNumberPick();
      const ascLottoNumber = lottoNumber.sort((num1, num2) => num1 - num2);
      return new Lotto(ascLottoNumber);
    });
  }
  printLottoNumber(lotto) {
    lotto.forEach((lottoNumbers) => {
      const lottoList = lottoNumbers.getLottoNumber().join(", ");
      MissionUtils.Console.print(`[${lottoList}]`);
    });
  }
  getResult() {
    const singleLotto = this.lotto.map((lottoNumber) =>
      lottoNumber.getLottoNumber()
    );
    const eachResult = singleLotto.map(this.compareNumber.bind(this));
    console.log(eachResult);
    const bonusNumberStatus = singleLotto.map(this.hasBonusNumber.bind(this));
    console.log(bonusNumberStatus);
  }
  compareNumber(eachLotto) {
    return eachLotto.filter((number) => this.winnerNumber.includes(number))
      .length;
  }
  hasBonusNumber(eachLotto) {
    return eachLotto.includes(this.bonusNumber);
  }
}

module.exports = App;
