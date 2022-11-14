const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Validation = require("./Validation");
const { RULE } = require("./constants/rule");

const mConsole = MissionUtils.Console;
const mRandom = MissionUtils.Random;

class LottoController {
  constructor() {
    this.validation = new Validation();
    this.lottoAmount;
    this.boughtLotto = [];
    this.winningNumber;
    this.bonusNumber;
  }

  countLottoAmount(checkedMoney) {
    this.lottoAmount = checkedMoney / RULE.LOTTO_PRICE;
    this.generateLottoNumbers(this.lottoAmount);
  }

  printLottoAmount() {
    mConsole.print(`\n${this.lottoAmount}개를 구매했습니다.`);
  }

  generateLottoNumbers(lottoAmount) {
    for (let count = 0; count < lottoAmount; count++) {
      const lotto = new Lotto(
        mRandom.pickUniqueNumbersInRange(
          RULE.MIN_LOTTO_NUMBER,
          RULE.MAX_LOTTO_NUMBER,
          RULE.LOTTO_NUMS
        )
      );
      this.boughtLotto.push(lotto);
    }
  }

  printLottoList() {
    this.boughtLotto.forEach((number) => {
      number.printNumbers();
    });
  }

  setWinNumbers(inputNumber) {
    this.inputWinNumbers = inputNumber.split(",").map((item) => Number(item));
    if (this.validation.isValidLottoNumber(this.inputWinNumbers))
      this.winningNumber = this.inputWinNumbers;
    return this.winningNumber;
  }

  setBonusNumber(inputNumber) {
    this.inputBonus = Number(inputNumber);
    if (this.validation.checkBonusNumber(this.inputBonus, this.winningNumber))
      return this.inputBonus;
  }

  getLottoResult() {
    const lottoResultList = [];
    this.boughtLotto.forEach((lotto) => {
      lottoResultList.push(
        lotto.getResult(this.winningNumber, this.inputBonus)
      );
    });
    this.compareResult = lottoResultList.filter((result) => result);
  }

  getRankCount(idx) {
    return this.compareResult.filter(
      (result) => result === RULE.RANK_LENGTH - idx
    ).length;
  }

  calcualtePrizeMoney() {
    const prize = [5000, 50000, 1500000, 30000000, 2000000000];
    return prize.reduce((acc, currentRank, idx) => {
      const rankCount = this.getRankCount(idx);
      return acc + currentRank * rankCount;
    }, 0);
  }

  calculateProfitRate() {
    const totalProfit = this.calcualtePrizeMoney();
    const purchaseMoney = this.lottoAmount * RULE.LOTTO_PRICE;
    return ((totalProfit / purchaseMoney) * 100).toFixed(1);
  }

  printRank() {
    this.getLottoResult();
    const rankList = [
      "3개 일치 (5,000원)",
      "4개 일치 (50,000원)",
      "5개 일치 (1,500,000원)",
      "5개 일치, 보너스 볼 일치 (30,000,000원)",
      "6개 일치 (2,000,000,000원)",
    ];
    rankList.forEach((rank, idx) => {
      const rankCount = this.getRankCount(idx);
      mConsole.print(`${rank} - ${rankCount}개`);
    });
  }

  printProfitRate() {
    const profitRate = this.calculateProfitRate();
    mConsole.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

module.exports = LottoController;
