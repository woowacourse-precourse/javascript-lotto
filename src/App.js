const MissionUtils = require("@woowacourse/mission-utils");
const {
  GUIDE_MESSAGE,
  LOTTO_PRICE,
  LOTTO_SIZE,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_RANKING_CONDITION,
  LOTTO_RANKING,
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
    const eachLottoRanking = eachResult.map(this.getLottoRaking.bind(this));

    const rankingTotal = this.getRankingTotal(eachLottoRanking);
    console.log(rankingTotal);
  }
  compareNumber(eachLotto) {
    const compareResult = eachLotto.filter((number) =>
      this.winnerNumber.includes(number)
    ).length;
    const bonusNumberStatus = this.hasBonusNumber(eachLotto);
    return { compareResult, bonusNumberStatus };
  }
  hasBonusNumber(eachLotto) {
    return eachLotto.includes(this.bonusNumber);
  }
  getLottoRaking(eachResult) {
    const { compareResult, bonusNumberStatus } = eachResult;
    if (compareResult === LOTTO_RANKING_CONDITION.FIRST_RANK)
      return LOTTO_RANKING.FIRST;
    if (
      compareResult === LOTTO_RANKING_CONDITION.THIRD_RANK &&
      bonusNumberStatus
    )
      return LOTTO_RANKING.SECOND;
    if (compareResult === LOTTO_RANKING_CONDITION.THIRD_RANK)
      return LOTTO_RANKING.THIRD;
    if (compareResult === LOTTO_RANKING_CONDITION.FOURTH_RANK)
      return LOTTO_RANKING.FOURTH;
    if (compareResult === LOTTO_RANKING_CONDITION.FIFTH_RANK)
      return LOTTO_RANKING.FIFTH;
    return LOTTO_RANKING.FAIL;
  }
  getRankingTotal(eachLottoRanking) {
    const rankingOverall = {
      "1등": 0,
      "2등": 0,
      "3등": 0,
      "4등": 0,
      "5등": 0,
      낙첨: 0,
    };
    eachLottoRanking.forEach((ranking) => (rankingOverall[ranking] += 1));
    return rankingOverall;
  }
}

module.exports = App;
