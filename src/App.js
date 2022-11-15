const MissionUtils = require("@woowacourse/mission-utils");
const {
  GUIDE_MESSAGE,
  LOTTO_PRICE,
  LOTTO_SIZE,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_RANKING_CONDITION,
  LOTTO_RANKING,
  LOTTO_MONEY,
} = require("./Constants");
const Lotto = require("./Lotto");
const LottoUI = require("./LottoUI");
const Validation = require("./validation");

class App {
  winnerNumber;
  bonusNumber;
  lotto;
  purchaseAmount;
  constructor() {
    this.LottoUI = new LottoUI();
  }
  play() {
    this.inputPurchaseAmount();
  }
  inputPurchaseAmount() {
    this.LottoUI.inputRequest(
      GUIDE_MESSAGE.PURCHASEAMOUNT_INPUT,
      (inputPurchaseAmount) => {
        Validation.checkPurchaseAmount(inputPurchaseAmount);
        this.purchaseAmount = Number(inputPurchaseAmount);
        this.lottoBuying(this.purchaseAmount);
        this.inputWinnerNumber();
      }
    );
  }
  lottoBuying(purchaseAmount) {
    const lottoCount = this.getLottoCount(purchaseAmount);
    this.LottoUI.printLottoCount(lottoCount);
    this.getTotalLottoNumber(lottoCount);
  }
  getLottoCount(purchaseAmount) {
    return parseInt(purchaseAmount, 10) / LOTTO_PRICE;
  }
  inputWinnerNumber() {
    this.LottoUI.inputRequest(
      GUIDE_MESSAGE.WINNERNUMBER_INPUT,
      (winnerNumberElement) => {
        const winnerNumberArr = winnerNumberElement.split(",");
        Validation.checkInputWinnerNumber(winnerNumberArr);
        this.winnerNumber = winnerNumberArr.map(Number);
        this.inputBonusNumber();
      }
    );
  }
  inputBonusNumber() {
    this.LottoUI.inputRequest(
      GUIDE_MESSAGE.BONUSNUMBER_INPUT,
      (bonusNumberElement) => {
        Validation.checkBonusNumber(bonusNumberElement, this.winnerNumber);
        this.bonusNumber = Number(bonusNumberElement);
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
  getResult() {
    const singleLotto = this.lotto.map((lottoNumber) =>
      lottoNumber.getLottoNumber()
    );
    const eachResult = singleLotto.map(this.compareNumber.bind(this));
    const eachLottoRanking = eachResult.map(this.getLottoRaking.bind(this));
    const rankingTotal = this.getRankingTotal(eachLottoRanking);
    const winningMoney = this.getWinningMoney(rankingTotal);
    const earningRatio = this.getEarningRatio(winningMoney);
    const result = this.resultSynthesis(rankingTotal);
    this.LottoUI.prinntLottoNumber(singleLotto);
    this.LottoUI.printRankingTotal(result);
    this.LottoUI.printEarningRatio(earningRatio);
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
  getWinningMoney(rankingTotal) {
    let sumMoney = 0;

    Object.entries(rankingTotal).forEach(
      ([ranking, count]) => (sumMoney += LOTTO_MONEY[ranking] * count)
    );
    return sumMoney;
  }
  getEarningRatio(winningMoney) {
    if (winningMoney) {
      return ((winningMoney / this.purchaseAmount) * 100).toFixed(1);
    }
    return 0.0;
  }
  resultSynthesis(rankingTotal) {
    const resultTable = {
      "5등": `${LOTTO_RANKING_CONDITION.FIFTH_RANK}개 일치 (${LOTTO_MONEY[
        LOTTO_RANKING.FIFTH
      ].toLocaleString()}원) - ${rankingTotal[LOTTO_RANKING.FIFTH]}개`,
      "4등": `${LOTTO_RANKING_CONDITION.FOURTH_RANK}개 일치 (${LOTTO_MONEY[
        LOTTO_RANKING.FOURTH
      ].toLocaleString()}원) - ${rankingTotal[LOTTO_RANKING.FOURTH]}개`,
      "3등": `${LOTTO_RANKING_CONDITION.THIRD_RANK}개 일치 (${LOTTO_MONEY[
        LOTTO_RANKING.THIRD
      ].toLocaleString()}원) - ${rankingTotal[LOTTO_RANKING.THIRD]}개`,
      "2등": `${
        LOTTO_RANKING_CONDITION.THIRD_RANK
      }개 일치, 보너스 볼 일치 (${LOTTO_MONEY[
        LOTTO_RANKING.SECOND
      ].toLocaleString()}원) - ${rankingTotal[LOTTO_RANKING.SECOND]}개`,
      "1등": `${LOTTO_RANKING_CONDITION.FIRST_RANK}개 일치 (${LOTTO_MONEY[
        LOTTO_RANKING.FIRST
      ].toLocaleString()}원) - ${rankingTotal[LOTTO_RANKING.FIRST]}개`,
    };
    return resultTable;
  }
}
const app = new App();
app.play();

module.exports = App;
