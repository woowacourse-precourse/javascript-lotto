const UserInterface = require("./UserInterface.js");
const CheckError = require("./CheckError.js");
const Lotto = require("./Lotto.js");
const { LOTTO_LENGTH, WINNING_PRICE } = require("./constants/gameCondition.js");
const { Random } = require("@woowacourse/mission-utils");
class LottoPlay {
  #resultArray;
  // Lotto 게임 기능 구현하는 클래스.
  constructor() {}
  play() {
    const purchaseAmount = UserInterface.purchaseRequest(); // 구입 금액 입력.
    CheckError.checkPurchaseAmount(purchaseAmount); //
    const lottoNumber = this.purchaseLotto(purchaseAmount);
    UserInterface.printLottoNumber(lottoNumber);
    const lottoArray = this.createLottoArray(lottoNumber);
    CheckError.checkLottoSort(lottoArray);
    UserInterface.printLottoArray(lottoArray);
    const winnerNumber = UserInterface.winnerNumberRequest();
    const winnerNumberArray = CheckError.checkWinnerNumber(winnerNumber);
    const bonusNumber = UserInterface.bonusNumberRequest();
    CheckError.checkBonusNumber(bonusNumber, winnerNumberArray);
    this.#resultArray = this.compareWholeLotto(
      lottoArray,
      winnerNumberArray,
      bonusNumber
    );
    UserInterface.printBodyStatistics(this.#resultArray);
    UserInterface.printPercentYield(this.calculateYield(purchaseAmount));
  }

  purchaseLotto(purchaseAmount) {
    return purchaseAmount / 1000;
  }

  createOneLotto() {
    // 한 개의 로또 번호를 생성하는 함수.
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  createLottoArray(lottoNumber) {
    let lottoArray = [];
    let tempLotto;
    for (let i = 0; i < lottoNumber; i++) {
      tempLotto = this.createOneLotto();
      tempLotto = new Lotto(tempLotto).getLotto(); // 유효성 검사.
      lottoArray.push(this.sortNumberArray(tempLotto));
    }
    return lottoArray;
  }

  sortNumberArray(arr) {
    arr.sort((a, b) => a - b);
    return arr;
  }

  /**
   *
   * @param {array} lottoArray 모든 로또 배열이 들어있는 배열
   * @param {array} winnerNumberArray  당첨 번호 배열
   * @param {number} bonusNumber 2등 3등을 판별할 보너스 번호
   * @returns {array} 당첨 등수에 해당되는 인덱스에 몇 개의 로또가 일치하는지에 대한 정보가 들어있는 배열
   */
  compareWholeLotto(lottoArray, winnerNumberArray, bonusNumber) {
    let resultArray = [0, 0, 0, 0, 0, 0];
    lottoArray.forEach((lotto) => {
      const tempRank = this.findWinningResult(
        lotto,
        winnerNumberArray,
        bonusNumber
      );
      resultArray[tempRank] += 1;
    });
    return resultArray;
  }

  /**
   *
   * @param {array} lotto 등수를 구할 로또 번호 배열
   * @param {array} winnerNumberArray 당첨 번호 배열
   * @param {number} bonusNumber 2등 3등을 판별할 보너스 번호
   * @returns {number} 등수를 리턴 1등 ~ 5등 0등은 꽝
   */
  findWinningResult(lotto, winnerNumberArray, bonusNumber) {
    const overlapNumber = this.compareLotteryAndWinning(
      lotto,
      winnerNumberArray
    );
    switch (overlapNumber) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return findSecondOrThirdWinning(lotto, bonusNumber);
      case 6:
        return 1;
      default:
        return 0;
    }
  }
  /**
   *
   * @param {array} lotto 로또 배열 -> 숫자로 이루어져 있음.
   * @param {array} winnerNumberArray 당첨 번호 배열 -> '1'로 되어있음.
   * @returns {number} 로또 배열과 당첨 번호 배열의 일치하는 숫자 개수를 리턴
   */
  compareLotteryAndWinning(lotto, winnerNumberArray) {
    let matchNumberArray;
    matchNumberArray = lotto.filter((item) =>
      winnerNumberArray.includes(String(item))
    );
    return matchNumberArray.length;
  }
  /**
   *
   * @param {array} lotto
   * @param {number} bonusNumber
   * @returns {number} 2 or 3등을 리턴
   */
  findSecondOrThirdWinning(lotto, bonusNumber) {
    if (lotto.includes(bonusNumber)) return 2;
    return 3;
  }

  calculateTotalWinningMoney() {
    let totalWinningMoney = 0;
    for (let i = 0; i < LOTTO_LENGTH; i++) {
      const tempCount = this.#resultArray[i];
      totalWinningMoney += tempCount * WINNING_PRICE[i];
      console.log(totalWinningMoney);
    }
    return totalWinningMoney;
  }

  calculateYield(purchaseAmount) {
    const totalWinningMoney = this.calculateTotalWinningMoney();
    console.log(totalWinningMoney);
    return ((totalWinningMoney / purchaseAmount) * 100).toFixed(1);
  }
}

module.exports = LottoPlay;
