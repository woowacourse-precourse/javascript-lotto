const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

const LOTTO_PRICE = 1000;

class App {
  play() {
    this.lottoAmount();
    return 0;
  }

  lottoAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (inputMoney) => {
      this.amountException(inputMoney);
      let amount = inputMoney / LOTTO_PRICE;
      Console.print(amount + "개를 구매했습니다.");
      let myNumbers = this.autoLottoNums(amount);
      this.inputWinningNums(myNumbers);
      return;
    });
  }

  amountException(input) {
    if (input == " " || input == null) throw new Error("[ERROR] 공백이나 null을 입력하실 수 없습니다.");
    if (input % LOTTO_PRICE != 0) throw "[ERROR] 올바르지 않은 입력입니다.";
    if (input < LOTTO_PRICE) throw "[ERROR] 로또는 1000원부터 구매 가능합니다.";
    return;
  }

  autoLottoNums(cnt) {
    let myNumbers = [];
    while (cnt) {
      const randomNums = Random.pickUniqueNumbersInRange(1, 45, 6);
      let sortLottoNums = this.sortLottoNums(randomNums);
      Console.print("[" + sortLottoNums.join(", ") + "]");
      myNumbers.push(sortLottoNums);
      cnt--;
    }
    return myNumbers;
  }

  sortLottoNums(numbers) {
    numbers.sort((a, b) => {
      return a - b;
    });
    return numbers;
  }

  inputWinningNums(myNumbers) {
    let winNums = [];
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (inputNums) => {
      winNums = inputNums.split(",");
      this.inputBonusNums(winNums, myNumbers);
    });
    return 1;
  }

  inputBonusNums(winNums, myNumbers) {
    const lotto = new Lotto(winNums);
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (inputBonus) => {
      lotto.bonusNumberException(inputBonus);
      let isMatch = lotto.compareLottoNums(myNumbers, winNums);
      let bonusMatch = lotto.compareBonus(myNumbers, inputBonus, isMatch);
      lotto.printWinResult(isMatch, bonusMatch);
      Console.close();
    });
    return;
  }
}

module.exports = App;
