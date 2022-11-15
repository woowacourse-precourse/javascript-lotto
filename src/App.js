const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const Randoms = () => {
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    };

    const Lotto = () => {
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 7);
    };

    const userInput = () => {
      MissionUtils.Console.readLine("구입금액을 입력해 주세요.", input);
    };
    const userInputnumber = () => {
      MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
        const userNumbers = input.split(",");
        if (UserNumber !== 45) {
          throw new Error(
            "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야합니다."
          );
        }
      });
    };
  }
}

module.exports = App;
