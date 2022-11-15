const Mission = require("@woowacourse/mission-utils");
const Validator = require("./Validator");
const Lotto = require("./Lotto");
class App {
  play() {
    this.lottoPrice();
  }
  BonusInput = () => {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.",
      (BonusNumber) => {
        new Winning.BonusNumber(BonusNumber);
        MissionUtils.Console.print(BonusNumber);
      }
    );
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
    let data = [];
    lottoNumber.forEach((num) => {
      data.push(num.getNumbers());
    });
    this.winningInput();
    MissionUtils.Console.print(data);
  };

  lottoPrice = () => {
    Mission.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      this.lottoIssuance(parseInt(input, 10) / 1000);
    });
  };
}
module.exports = App;
