const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  play() {
    this.lottoAmount();
    return 0;
  }

  lottoAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (inputMoney) => {
      if (inputMoney % 1000 != 0) throw "[ERROR] 올바르지 않은 입력입니다.";
      let amount = inputMoney / 1000;
      Console.print(amount + "개를 구매했습니다.");
      let myNumbers = this.autoLottoNums(amount);
      this.inputWinningNums(myNumbers);
    });
    return;
  }

  autoLottoNums(cnt) {
    let myNumbers = [];
    while (cnt) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => {
        return a - b;
      });
      for (let i in numbers) {
        Console.print(
          "[" +
            numbers[0] +
            ", " +
            numbers[1] +
            ", " +
            numbers[2] +
            ", " +
            numbers[3] +
            ", " +
            numbers[4] +
            ", " +
            numbers[5] +
            "]"
        );
        break;
      }
      myNumbers.push(numbers);
      cnt--;
    }
    return myNumbers;
  }
}

module.exports = App;
