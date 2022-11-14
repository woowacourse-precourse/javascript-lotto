const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Validation = require("./Validation.js");
const Winning = require("./Winning");
const Bonus = require("./Bonus");
class App {
  constructor() {
    // 로또 번호
    // this.lottoNumber = null;
    this.WinningData = null;
    this.BonusData = null;
  }
  lottoDraw = () => {
    const winningAndBonustNumber =
      this.WinningData.getWinning() + "," + this.BonusData.getBonus();
    console.log(winningAndBonustNumber);
  };
  bonusNumber = () => {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.",
      (BonusInput) => {
        this.BonusData = new Bonus(BonusInput);
        MissionUtils.Console.print(BonusInput);
      }
    );
    this.lottoDraw();
  };
  winningNumber = () => {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.",
      (winningInput) => {
        this.WinningData = new Winning(winningInput);
        MissionUtils.Console.print(winningInput);
      }
    );
    this.bonusNumber();
  };
  lottoIssuance = (count) => {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    const lottoNumber = Array.from({ length: count }, () => {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const ascending = randomNumber.sort((a, b) => a - b);
      return new Lotto(ascending);
    });
    lottoNumber.forEach((num) => {
      MissionUtils.Console.print(num.getNumbers());
    });
    this.winningNumber();
  };
  lottoPurchase = () => {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (purchase) => {
      Validation.validPurchase(purchase);
      this.lottoIssuance(parseInt(purchase, 10) / 1000);
    });
  };
  play() {
    this.lottoPurchase();
  }
}

module.exports = App;
