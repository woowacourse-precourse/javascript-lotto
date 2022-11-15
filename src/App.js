const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Validator = require("./Validator");
const Winning = require("./Winning");
class App {
  play() {
    this.lottoPrice();
  }
  constructor() {
    this.lottoNumber = null;
    this.WinningData = null;
    this.BonusData = null;
  }
  lottoDraw = () => {
    let lottoMatch = [];
    let winningAndBonustNumber =
      this.WinningData.getWinning() + "," + this.BonusData.getBonus();
    winningAndBonustNumber = winningAndBonustNumber
      .split(",")
      .map((num) => parseInt(num, 10));

    this.lottoNumber.forEach((num) => {
      lottoMatch.push(
        num.getNumbers().filter((lottoNum) => {
          return winningAndBonustNumber.includes(lottoNum);
        })
      );
    });
  };
  BonusInput = () => {
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
    this.lottoNumber = Array.from({ length: count }, () => {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const ascending = randomNumber.sort((a, b) => a - b);
      return new Lotto(ascending);
    });
    this.lottoNumber.forEach((num) => {
      MissionUtils.Console.print(num.getNumbers());
    });
    this.winningNumber();
  };

  lottoPrice = () => {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      new input(input);
      this.lottoIssuance(parseInt(input, 10) / 1000);
    });
  };
}
module.exports = App;
