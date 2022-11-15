const MissionUtils = require("@woowacourse/mission-utils");

const Lotto = require("./Lotto");
const User = require("./User");

class App {
  #user;
  #lottoSystem;
  #bonusNumber;
  winningResults = [];

  constructor() {
    this.#user = new User();
    this.#lottoSystem = new Lotto();
    this.#bonusNumber = this.#lottoSystem.setBonusNumber();
  }

  play() {
    this.compareLottos();
  }

  compareLottos() {
    for (let lotto of this.#user.lottos) {
      let lottoResult = {
        winningNumbers: 0,
        winningBonusNumber: 0,
      };

      lottoResult.winningNumbers = this.checkWinningNumber(lotto);

      if (lotto.includes(this.#bonusNumber)) lottoResult.winningBonusNumber = 1;

      this.winningResults.push(lottoResult);
    }

    this.printWinningResult();
  }

  checkWinningNumber(lotto) {
    let count = 0;

    for (let number of this.#lottoSystem.getWinningNumbers()) {
      if (lotto.includes(number)) count++;
    }

    return count;
  }

  printWinningResult() {
    const [winThree, winFour, winFive, winFiveAndBonus, winSix] =
      this.gatherWinningResult();

    const rateOfReturn = (
      ((winThree * 5000 +
        winFour * 50000 +
        winFive * 1500000 +
        winFiveAndBonus * 30000000 +
        winSix * 2000000000) /
        this.#user.purchaseAmount) *
      100
    ).toFixed(1);

    MissionUtils.Console.print(`
      당첨 통계
      ---
      3개 일치 (5,000원) - ${winThree}개
      4개 일치 (50,000원) - ${winFour}개
      5개 일치 (1,500,000원) - ${winFive}개
      5개 일치, 보너스 볼 일치 (30,000,000원) - ${winFiveAndBonus}개
      6개 일치 (2,000,000,000원) - ${winSix}개
      총 수익률은 ${rateOfReturn}%입니다.
    `);
  }

  gatherWinningResult() {
    let winThree = 0;
    let winFour = 0;
    let winFive = 0;
    let winFiveAndBonus = 0;
    let winSix = 0;
    
    for (let result of this.winningResults) {
      if (result.winningNumbers === 3) winThree++;
      if (result.winningNumbers === 4) winFour++;
      if (result.winningNumbers === 5) winFive++;
      if (result.winningNumbers === 5 && result.winningBonusNumber === 1)
        winFiveAndBonus++;
      if (result.winningNumbers === 6) winSix++;
    }

    return [winThree, winFour, winFive, winFiveAndBonus, winSix];
  }
}

module.exports = App;
